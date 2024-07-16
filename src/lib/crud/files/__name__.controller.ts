import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= name %>.dto';
import { Paginated<%= classify(name) %>Query } from './dto/paginated-<%= name %>-query.dto';
import { Update<%= classify(name) %>Dto } from './dto/update-<%= name %>.dto';<% if (isSwaggerInstalled) { %>
import { ApiTags } from '@nestjs/swagger';<% } %><% if (cqrs) { %>
import { CommandBus } from '@nestjs/cqrs';
import { Create<%= classify(name) %>Command } from './commands/create-<%= name %>.command';
import { Find<%= classify(name) %>Query } from './queries/find-<%= name %>.query';
import { FindOne<%= classify(name) %>Query } from './queries/find-one-<%= name %>.query';
import { Remove<%= classify(name) %>Command } from './commands/remove-<%= name %>.command';
import { Update<%= classify(name) %>Command } from './commands/update-<%= name %>.command';<% } %><% else { %>
import { I<%= classify(name) %>Service } from './<%= name %>.interface';<% } %>

@Controller('<%= dasherize(name) %>')<% if (isSwaggerInstalled) { %>
@ApiTags('<%= classify(name) %> API')<% } %>
export class <%= classify(name) %>Controller {
  <% if (cqrs) { %>constructor(private readonly commandBus: CommandBus) {}<% } %><% else { %>constructor(private readonly <%= lowercased(name) %>Service: I<%= classify(name) %>Service) {}<% } %>

  @Post()
  create(@Body() data: Create<%= classify(name) %>Dto) {
    return <% if (cqrs) { %>this.commandBus.execute(new Create<%= classify(name) %>Command({ data }))<% } %><% else { %>this.<%= lowercased(name) %>Service.create(data);<% } %>
  }

  @Get()
  find(@Query() query: Paginated<%= classify(name) %>Query) {
    return <% if (cqrs) { %>this.commandBus.execute(new Find<%= classify(name) %>Query({ query }))<% } %><% else { %>this.<%= lowercased(name) %>Service.paginated({
      limit: +query.limit,
      page: +query.page,
    });<% } %>
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return <% if (cqrs) { %>this.commandBus.execute(new FindOne<%= classify(name) %>Query({ id }))<% } %><% else { %>this.<%= lowercased(name) %>Service.findById(id);<% } %>
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Update<%= classify(name) %>Dto) {
    return <% if (cqrs) { %>this.commandBus.execute(new Update<%= classify(name) %>Command({ id, data }))<% } %><% else { %>this.<%= lowercased(name) %>Service.updateById(id, data);<% } %>
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return <% if (cqrs) { %>this.commandBus.execute(new Remove<%= classify(name) %>Command({ id }))<% } %><% else { %>this.<%= lowercased(name) %>Service.softRemoveById(id);<% } %>
  }
}
