import {ResourceOptions} from "./resource.schema";
import {apply, mergeWith, move, Rule, Source, strings, template, url} from "@angular-devkit/schematics";
import {normalize} from "@angular-devkit/core";

export function main(options: ResourceOptions): Rule {
    return mergeWith(generate(options));
}

function generate(options: ResourceOptions): Source {
    return apply(url('./files'), [
        template({
            ...strings,
            ...options
        }),
        move(options.path)
    ]);
}
