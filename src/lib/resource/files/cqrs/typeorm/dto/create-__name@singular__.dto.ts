import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Create<%= classify(name) %>Dto {
	/** Tên <%= classify(name) %> */
	@ApiProperty({ description: 'Tên <%= classify(name) %>' })
	@IsString()
	name!: string;
}
