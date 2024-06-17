import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Remove<%= classify(name) %>ByIdCommand } from '../commands/remove-<%= singular(name) %>-by-id.command';
import { I<%= classify(name) %>Service } from '../<%= name %>.interface';

@CommandHandler(Remove<%= classify(name) %>ByIdCommand)
export class Remove<%= classify(name) %>ByIdHandler implements ICommandHandler<Remove<%= classify(name) %>ByIdCommand> {
	private logger = new Logger(Remove<%= classify(name) %>ByIdHandler.name);

	constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}

	async execute(command: Remove<%= classify(name) %>ByIdCommand) {
		this.logger.log('execute');
		const { id } = command;
		return this.<%= lowercased(name) %>Service.softRemoveById(id);
	}
}
