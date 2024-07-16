import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindOne<%= classify(name) %>Query } from '../queries/find-one-<%= name %>.query';
import { I<%= classify(name) %>Service } from '../<%= name %>.interface';

@QueryHandler(FindOne<%= classify(name) %>Query)
export class FindOne<%= classify(name) %>Handler implements IQueryHandler<FindOne<%= classify(name) %>Query> {
  constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}

  async execute(command: FindOne<%= classify(name) %>Query) {
    const { id } = command;
    return this.<%= lowercased(name) %>Service.findById(id);
  }
}
