import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetAll<%= classify(name) %>PaginatedCommand } from '../commands/get-all-<%= singular(name) %>-paginated.command';
import { I<%= classify(name) %>Service } from '../<%= name %>.interface';

@CommandHandler(GetAll<%= classify(name) %>PaginatedCommand)
export class GetAll<%= classify(name) %>PaginatedHandler implements ICommandHandler<GetAll<%= classify(name) %>PaginatedCommand> {
	private logger = new Logger(GetAll<%= classify(name) %>PaginatedHandler.name);

	constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}

	async execute(command: GetAll<%= classify(name) %>PaginatedCommand) {
		this.logger.log('execute');
		const { query } = command;
		return this.<%= lowercased(name) %>Service.getAllWithPagination(query);
	}
}
