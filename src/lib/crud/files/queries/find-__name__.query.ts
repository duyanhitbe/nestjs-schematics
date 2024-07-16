import { Paginated<%= classify(name) %>Query } from '../dto/paginated-<%= name %>-query.dto';

export class Find<%= classify(name) %>Query {
  query!: Paginated<%= classify(name) %>Query;

  constructor(data: Find<%= classify(name) %>Query) {
    Object.assign(this, data);
  }
}
