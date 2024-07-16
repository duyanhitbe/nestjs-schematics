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
}
