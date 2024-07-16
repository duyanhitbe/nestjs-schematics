import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Update<%= classify(name) %>Command } from '../commands/update-<%= name %>.command';
import { I<%= classify(name) %>Service } from '../<%= name %>.interface';

@CommandHandler(Update<%= classify(name) %>Command)
export class Update<%= classify(name) %>Handler implements ICommandHandler<Update<%= classify(name) %>Command> {
  constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}

  async execute(command: Update<%= classify(name) %>Command) {
    const { id, data } = command;
    return this.<%= lowercased(name) %>Service.updateById(id, data);
  }
}
