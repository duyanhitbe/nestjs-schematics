import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Remove<%= classify(name) %>Command } from '../commands/remove-<%= name %>.command';
import { I<%= classify(name) %>Service } from '../<%= name %>.interface';

@CommandHandler(Remove<%= classify(name) %>Command)
export class Remove<%= classify(name) %>Handler implements ICommandHandler<Remove<%= classify(name) %>Command> {
  constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}

  async execute(command: Remove<%= classify(name) %>Command) {
    const { id } = command;
    return this.<%= lowercased(name) %>Service.softRemoveById(id);
  }
}
