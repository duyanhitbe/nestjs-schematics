import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';<% if (isSwaggerInstalled) { %>
import { ApiProperty } from '@nestjs/swagger';<% } %>

@Entity('<%= underscore(name) %>')
export class <%= classify(name) %>Entity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')<% if (isSwaggerInstalled) { %>
  @ApiProperty()<% } %>
  id!: string;

  @CreateDateColumn()<% if (isSwaggerInstalled) { %>
  @ApiProperty()<% } %>
  createdAt!: Date;

  @UpdateDateColumn()<% if (isSwaggerInstalled) { %>
  @ApiProperty()<% } %>
  updatedAt!: Date;

  @DeleteDateColumn()<% if (isSwaggerInstalled) { %>
  @ApiProperty()<% } %>
  deletedAt?: Date;
}
