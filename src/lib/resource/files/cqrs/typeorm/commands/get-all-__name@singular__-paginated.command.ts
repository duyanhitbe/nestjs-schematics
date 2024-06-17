import { PaginationDto } from '@common';

export class GetAll<%= classify(name) %>PaginatedCommand {
	query!: PaginationDto;

	constructor(data: GetAll<%= classify(name) %>PaginatedCommand) {
		Object.assign(this, data);
	}
}
