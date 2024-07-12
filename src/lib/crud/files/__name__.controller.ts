import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { I<%= classify(name) %>Service } from './<%= name %>.interface';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= name %>.dto';
import { Paginated<%= classify(name) %>Query } from './dto/paginated-<%= name %>-query.dto';
import { Update<%= classify(name) %>Dto } from './dto/update-<%= name %>.dto';
<% if (isSwaggerInstalled) { %>import { ApiTags } from '@nestjs/swagger';
<% } %>
@Controller('<%= dasherize(name) %>')<% if (isSwaggerInstalled) { %>
@ApiTags('<%= classify(name) %> API')<% } %>
export class <%= classify(name) %>Controller {
  constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}

  @Post()
  create(@Body() data: Create<%= classify(name) %>Dto) {
    return this.<%= lowercased(name) %>Service.create(data);
  }

  @Get()
  paginated(@Query() query: Paginated<%= classify(name) %>Query) {
    return this.<%= lowercased(name) %>Service.paginated({
			limit: +query.limit,
			page: +query.page
		});
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.<%= lowercased(name) %>Service.findById(id);
  }

  @Patch(':id')
  updateById(@Param('id') id: string, @Body() data: Update<%= classify(name) %>Dto) {
    return this.<%= lowercased(name) %>Service.updateById(id, data);
  }

  @Delete(':id')
  removeById(@Param('id') id: string) {
    return this.<%= lowercased(name) %>Service.removeById(id);
  }
}
