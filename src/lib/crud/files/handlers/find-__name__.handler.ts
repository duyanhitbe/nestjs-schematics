import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { Find<%= classify(name) %>Query } from '../queries/find-<%= name %>.query';
import { I<%= classify(name) %>Service } from '../<%= name %>.interface';

@QueryHandler(Find<%= classify(name) %>Query)
export class Find<%= classify(name) %>Handler implements IQueryHandler<Find<%= classify(name) %>Query> {
  constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}

  async execute(command: Find<%= classify(name) %>Query) {
    const { query } = command;
    return this.<%= lowercased(name) %>Service.paginated({
      limit: +query.limit || 10,
      page: +query.page || 1,
    });
  }
}
