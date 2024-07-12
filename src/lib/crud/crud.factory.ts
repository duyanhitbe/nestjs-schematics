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
import { getPackageJsonDependency } from '../../utils/dependencies.utils';

export function main(options: CrudOptions): Rule {
  let name = options.name;
  if (name.includes('/')) {
    const split = name.split('/');
    name = split[split.length - 1];
  }

  return (tree: Tree, context: SchematicContext) => {
    return branchAndMerge(
      chain([
        mergeWith(apply(url(join('./files')), [
          filter((path) => {
            if (path.endsWith('.entity.ts')) {
              return options.orm === 'typeorm';
            }
            return true;
          }),
          template({
            ...strings,
            ...options,
            name,
            isSwaggerInstalled: !!getPackageJsonDependency(tree, '@nestjs/swagger'),
            lowercased: (name: string) => {
              const classifiedName = classify(name);
              return (
                classifiedName.charAt(0).toLowerCase() + classifiedName.slice(1)
              );
            },
            singular: (name: string) => pluralize.singular(name),
            ent: (name: string) => name + '.entity',
          }),
          move(join('src', options.name)),
        ])),
      ]),
    )(tree, context);
  };
}
