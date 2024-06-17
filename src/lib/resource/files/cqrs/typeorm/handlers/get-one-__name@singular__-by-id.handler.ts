import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetOne<%= classify(name) %>ByIdCommand } from '../commands/get-one-<%= singular(name) %>-by-id.command';
import { I<%= classify(name) %>Service } from '../<%= name %>.interface';

@CommandHandler(GetOne<%= classify(name) %>ByIdCommand)
export class GetOne<%= classify(name) %>ByIdHandler implements ICommandHandler<GetOne<%= classify(name) %>ByIdCommand> {
	private logger = new Logger(GetOne<%= classify(name) %>ByIdHandler.name);

	constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}

	async execute(command: GetOne<%= classify(name) %>ByIdCommand) {
		this.logger.log('execute');
		const { id } = command;
		return this.<%= lowercased(name) %>Service.getOneByIdOrFail(id);
	}
}
