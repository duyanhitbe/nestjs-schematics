import { PaginationDto } from '@duyanhit/nestjs-base';

export class GetAll<%= classify(name) %>PaginatedCommand {
	query!: PaginationDto;

	constructor(data: GetAll<%= classify(name) %>PaginatedCommand) {
		Object.assign(this, data);
	}
}
