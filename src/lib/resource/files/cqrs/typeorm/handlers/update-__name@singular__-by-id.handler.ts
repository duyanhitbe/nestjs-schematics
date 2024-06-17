import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Update<%= classify(name) %>ByIdCommand } from '../commands/update-<%= singular(name) %>-by-id.command';
import { I<%= classify(name) %>Service } from '../<%= name %>.interface';

@CommandHandler(Update<%= classify(name) %>ByIdCommand)
export class Update<%= classify(name) %>ByIdHandler implements ICommandHandler<Update<%= classify(name) %>ByIdCommand> {
	private logger = new Logger(Update<%= classify(name) %>ByIdHandler.name);

	constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}

	async execute(command: Update<%= classify(name) %>ByIdCommand) {
		this.logger.log('execute');
		const { id, data } = command;
		return this.<%= lowercased(name) %>Service.updateById(id, data);
	}
}
