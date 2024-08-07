import { Path, strings } from '@angular-devkit/core';
import { classify } from '@angular-devkit/core/src/utils/strings';
import {
  apply, branchAndMerge, chain, filter,
  mergeWith,
  move,
  Rule, SchematicContext, SchematicsException,
  template, Tree,
  url,
} from '@angular-devkit/schematics';
import * as pluralize from 'pluralize';
import { CrudOptions } from './crud.schema';
import { join } from 'path';
import { addPackageJsonDependency, getPackageJsonDependency, NodeDependencyType } from '../../utils/dependencies.utils';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Location, mergeSourceRoot, NameParser, normalizeToKebabOrSnakeCase } from '../../utils';
import { addDeclarationToModule } from '../resource/resource.factory';

export function main(options: CrudOptions): Rule {
  options = transform(options);

  return (tree: Tree, context: SchematicContext) => {
    dependencies(tree, context, options);

    return branchAndMerge(
      chain([
        mergeSourceRoot(options),
        addDeclarationToModule(options as any),
        mergeWith(apply(url(join('./files')), [
          generateFilter(options),
          generateTemplate(tree, options),
          move(join('src', options.path)),
        ])),
      ]),
    )(tree, context);
  };
}

function transform(options: CrudOptions): CrudOptions {
  const target: CrudOptions = Object.assign({}, options);
  if (!target.name) {
    throw new SchematicsException('Option (name) is required.');
  }
  target.metadata = 'imports';

  const location: Location = new NameParser().parse(target);
  target.name = normalizeToKebabOrSnakeCase(location.name);
  target.path = normalizeToKebabOrSnakeCase(location.path);

  target.path = target.flat
    ? target.path
    : join(target.path as Path, target.name);
  target.isSwaggerInstalled = options.isSwaggerInstalled ?? false;

  return target;
}

function generateFilter(options: CrudOptions): Rule {
  return filter((path) => {
    if (path.endsWith('.entity.ts')) {
      return options.orm === 'typeorm';
    }
    if (path.endsWith('.handler.ts') || path.endsWith('.command.ts') || path.endsWith('.query.ts')) {
      return options.cqrs;
    }
    if (path.endsWith('.swagger.ts')) {
      return options.isSwaggerInstalled;
    }
    return true;
  });
}

function generateTemplate(tree: Tree, options: CrudOptions): Rule {
  let name = options.name;
  if (name.includes('/')) {
    const split = name.split('/');
    name = split[split.length - 1];
  }

  return template({
    ...strings,
    ...options,
    name,
    lowercased: (name: string) => {
      const classifiedName = classify(name);
      return (
        classifiedName.charAt(0).toLowerCase() + classifiedName.slice(1)
      );
    },
    singular: (name: string) => pluralize.singular(name),
    ent: (name: string) => name + '.entity',
  });
}

function dependencies(tree: Tree, context: SchematicContext, options: CrudOptions) {
  options.isSwaggerInstalled = !!getPackageJsonDependency(tree, '@nestjs/swagger');

  if (options.cqrs) {
    installDependency('@nestjs/cqrs', 'latest')(tree, context);
  }

  if (options.orm === 'typeorm') {
    installDependency('@nestjs/typeorm', 'latest')(tree, context);
    installDependency('typeorm', 'latest')(tree, context);
  }

  if (options.orm === 'mongoose') {
    installDependency('@nestjs/mongoose', 'latest')(tree, context);
    installDependency('mongoose', 'latest')(tree, context);
  }
}

function installDependency(name: string, version: string, type: NodeDependencyType = NodeDependencyType.Default) {
  return (tree: Tree, context: SchematicContext) => {
    const nodeDependencyRef = getPackageJsonDependency(
      tree,
      name,
    );
    if (!nodeDependencyRef) {
      addPackageJsonDependency(tree, {
        type,
        name,
        version,
      });
      context.addTask(new NodePackageInstallTask());
    }
  };
}
