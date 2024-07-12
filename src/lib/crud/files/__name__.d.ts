import { <%= classify(name) %>Entity } from './entities/<%= name %>.entity';
import { FindOneOptions, FindManyOptions } from 'typeorm';

export interface UserPaginated {
  data: <%= classify(name) %>Entity[];
  pagination: {
    limit: number;
    page: number;
    total: number;
  };
}

export type <%= classify(name) %>PaginatedOptions = FindManyOptions<<%= classify(name) %>Entity> & {
  limit?: number;
  page?: number;
};

export type Find<%= classify(name) %>ByIdOptions = Omit<FindOneOptions<<%= classify(name) %>Entity>, 'where'>;
