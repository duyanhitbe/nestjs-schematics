import { strings } from '@angular-devkit/core';
import { classify } from '@angular-devkit/core/src/utils/strings';
import {
  apply, branchAndMerge, chain, filter,
  mergeWith,
  move,
  Rule, SchematicContext,
  template, Tree,
  url,
} from '@angular-devkit/schematics';
import * as pluralize from 'pluralize';
import { CrudOptions } from './crud.schema';
import { join } from 'path';
import { addPackageJsonDependency, getPackageJsonDependency, NodeDependencyType } from '../../utils/dependencies.utils';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function main(options: CrudOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    dependencies(tree, context, options);

    return branchAndMerge(
      chain([
        mergeWith(apply(url(join('./files')), [
          generateFilter(options),
          generateTemplate(tree, options),
          move(join('src', options.name)),
        ])),
      ]),
    )(tree, context);
  };
}

function generateFilter(options: CrudOptions): Rule {
  return filter((path) => {
    if (path.endsWith('.entity.ts')) {
      return options.orm === 'typeorm';
    }
    if (path.endsWith('.handler.ts') || path.endsWith('.command.ts') || path.endsWith('.query.ts')) {
      return options.cqrs;
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
