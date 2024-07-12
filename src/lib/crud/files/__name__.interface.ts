import { <%= classify(name) %>Entity } from './entities/<%= name %>.entity';
import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Find<%= classify(name) %>ByIdOptions, <%= classify(name) %>Paginated, <%= classify(name) %>PaginatedOptions } from './<%= name %>';

export abstract class I<%= classify(name) %>Service extends Repository<<%= classify(name) %>Entity> {
  /**
   * Find <%= name %> by id
   * @param id <%= classify(name) %>'s id
   * @param options Options find <%= name %>
   * @returns Promise<<%= classify(name) %>Entity | null>
   * @example this.<%= name %>Service.getOneById('uuid')
   */
  abstract findById(id: string, options?: Find<%= classify(name) %>ByIdOptions): Promise<<%= classify(name) %>Entity | null>;

  /**
   * Find <%= name %> by id, if not exist, throw NotFoundException
   * @param id <%= classify(name) %>'s id
   * @param options Options find <%= name %>
   * @returns Promise<<%= classify(name) %>Entity>
   * @example this.<%= name %>Service.getOneByIdOrFail('uuid')
   */
  abstract findByIdOrFail(id: string, options?: Find<%= classify(name) %>ByIdOptions): Promise<<%= classify(name) %>Entity>;

  /**
   * Find <%= name %>s with pagination
   * @param options Options find <%= name %>
   * @returns Promise<IPaginationResponse<<%= classify(name) %>Entity>>
   * @example this.<%= name %>Service.paginated({ limit: '10', page: '1' })
   */
  abstract paginated(options: <%= classify(name) %>PaginatedOptions): Promise<<%= classify(name) %>Paginated>;

  /**
   * Update <%= name %> by id
   * @param id <%= classify(name) %>'s id
   * @param data Update data
   * @returns Promise<<%= classify(name) %>Entity>
   * @example this.<%= name %>Service.updateById('uuid', { name: 'Jane Doe updated' })
   */
  abstract updateById(id: string, data: QueryDeepPartialEntity<<%= classify(name) %>Entity>): Promise<<%= classify(name) %>Entity | null>;

  /**
   * Remove <%= name %> by id
   * @param id <%= classify(name) %>'s id
   * @returns Promise<<%= classify(name) %>Entity>
   * @example this.<%= name %>Service.removeById('uuid')
   */
  abstract removeById(id: string): Promise<<%= classify(name) %>Entity | null>;

  /**
   * Soft remove <%= name %> by id
   * @param id <%= classify(name) %>'s id
   * @returns Promise<<%= classify(name) %>Entity>
   * @example this.<%= name %>Service.softRemoveById('uuid')
   */
  abstract softRemoveById(id: string): Promise<<%= classify(name) %>Entity | null>;
}
