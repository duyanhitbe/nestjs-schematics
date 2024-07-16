import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Create<%= classify(name) %>Command } from '../commands/create-<%= name %>.command';
import { I<%= classify(name) %>Service } from '../<%= name %>.interface';

@CommandHandler(Create<%= classify(name) %>Command)
export class Create<%= classify(name) %>Handler implements ICommandHandler<Create<%= classify(name) %>Command> {
  constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}

  async execute(command: Create<%= classify(name) %>Command) {
    const { data } = command;
    return this.<%= lowercased(name) %>Service.create(data).save();
  }
}
