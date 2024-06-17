import {ResourceOptions} from "./resource.schema";
import {apply, mergeWith, move, Rule, Source, strings, template, url} from "@angular-devkit/schematics";
import * as pluralize from "pluralize";

export function main(options: ResourceOptions): Rule {
    return mergeWith(generate(options));
}

function generate(options: ResourceOptions): Source {
    let folder = 'default';
    let orm = options.orm;

    if (options.shouldUseCqrs) {
        folder = 'cqrs';
    }

    return apply(url(`./files/${folder}/${orm}`), [
        template({
            ...strings,
            ...options,
            underscored: (name: string) => name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase().replace(/[^a-z0-9]+/g, '_'),
            lowercased: (name: string) => {
                const classifiedName = strings.classify(name);
                return (classifiedName.charAt(0).toLowerCase() + classifiedName.slice(1));
            },
            singular: (name: any) => pluralize.singular(name),
            ent: (name: string) => name + '.entity',
        }),
        move(`${options.path}/${options.name}`)
    ]);
}
