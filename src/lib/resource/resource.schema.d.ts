import {Path} from '@angular-devkit/core';

export enum ORMStrategy {
    TYPEORM = 'typeorm',
    MONGOOSE = 'mongoose',
    PRISMA = 'prisma',
    NONE = 'none',
}

export interface ResourceOptions {
    /**
     * The name of the resource.
     */
    name: string;
    /**
     * The path to create the resource.
     */
    path?: string | Path;
    /*
    * Should use CQRS
    */
    shouldUseCqrs?: boolean;
    /*
    * ORM Strategy
    */
    orm?: ORMStrategy;
}
