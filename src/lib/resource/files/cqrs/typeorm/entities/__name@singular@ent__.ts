import { BaseEntity } from '@duyanhit/nestjs-base';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

@Entity({ name: '<%= underscored(name) %>' })
export class <%= classify(name) %>Entity extends BaseEntity {
	/** Tên <%= classify(name) %> */
	@ApiProperty({ description: 'Tên <%= classify(name) %>' })
	@Column()
	name!: string;
}
