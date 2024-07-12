import { Injectable } from '@nestjs/common';
<% if (orm === 'typeorm') { %>import { InjectRepository } from '@nestjs/typeorm';
import { <%= classify(name) %>Entity } from './entities/<%= name %>.entity';
import { Repository } from 'typeorm';<% } %>
import { I<%= classify(name) %>Service } from './<%= name %>.interface';
import { Find<%= classify(name) %>ByIdOptions, <%= classify(name) %>Paginated, <%= classify(name) %>PaginatedOptions } from './<%= name %>';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
<% if (orm === 'typeorm') { %>export class <%= classify(name) %>Service extends I<%= classify(name) %>Service {
  constructor(
    @InjectRepository(<%= classify(name) %>Entity)
    private readonly <%= lowercased(name) %>Repository: Repository<<%= classify(name) %>Entity>
  ) {
    super(<%= lowercased(name) %>Repository.target, <%= lowercased(name) %>Repository.manager, <%= lowercased(name) %>Repository.queryRunner);
  }

  findById(id: string, options?: Find<%= classify(name) %>ByIdOptions): Promise<<%= classify(name) %>Entity | null> {
    return this.findOne({
      ...options,
      where: { id },
    });
  }

  findByIdOrFail(id: string, options?: Find<%= classify(name) %>ByIdOptions): Promise<<%= classify(name) %>Entity> {
    return this.findOneOrFail({
      ...options,
      where: { id },
    });
  }

  async paginated(options: <%= classify(name) %>PaginatedOptions): Promise<<%= classify(name) %>Paginated> {
    const { limit = 10, page = 1 } = options;
    const take = limit === -1 ? undefined : limit;
    const skip = limit === -1 ? undefined : limit * (+page - 1);
    delete options.limit;
    delete options.page;
    const [data, total] = await this.findAndCount({
      ...options,
      take,
      skip,
    });
    return {
      data,
      pagination: {
        limit,
        page,
        total,
      },
    };
  }

  async updateById(id: string, data: QueryDeepPartialEntity<<%= classify(name) %>Entity>): Promise<<%= classify(name) %>Entity | null> {
    const <%= lowercased(name) %> = await this.findById(id);
    if (!<%= lowercased(name) %>) return;
    for (const dataKey in data) {
      <%= lowercased(name) %>[dataKey] = data[dataKey];
    }
    return <%= lowercased(name) %>.save();
  }

  async removeById(id: string): Promise<<%= classify(name) %>Entity | null> {
    const <%= lowercased(name) %> = await this.findById(id);
    if (!<%= lowercased(name) %>) return;
    return <%= lowercased(name) %>.remove();
  }

  async softRemoveById(id: string): Promise<<%= classify(name) %>Entity | null> {
    const <%= lowercased(name) %> = await this.findById(id);
    if (!<%= lowercased(name) %>) return;
    return <%= lowercased(name) %>.softRemove();
  }
}<% } %>
