import { Path } from '@angular-devkit/core';

export interface CrudOptions {
  /**
   * The name of the resource.
   */
  name: string;
  /** Type of transport layer */
  type: 'rest' | 'graphql';
  /** ORM */
  orm: 'typeorm' | 'mongoose' | 'prisma' | 'sequelize';
  /** Is installed @nestjs/swagger */
  isSwaggerInstalled: boolean;
  /** Should use cqrs */
  cqrs: boolean;
  /**
   * Flag to indicate if a directory is created.
   */
  flat?: boolean;
  /**
   * The path to insert the module declaration.
   */
  module?: Path;
  /**
   * Metadata name affected by declaration insertion.
   */
  metadata?: string;
  /**
   * The path to create the resource.
   */
  path?: string | Path;
  /**
   * The source root path
   */
  sourceRoot?: string;
}
