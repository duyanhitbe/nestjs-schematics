import { ApiCreate, ApiDelete, ApiGetAll, ApiGetOne, ApiUpdate, HideController, PaginationDto } from '@duyanhit/nestjs-base';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { Create<%= classify(name) %>Command } from './commands/create-<%= singular(name) %>.command';
import { GetAll<%= classify(name) %>PaginatedCommand } from './commands/get-all-<%= singular(name) %>-paginated.command';
import { GetOne<%= classify(name) %>ByIdCommand } from './commands/get-one-<%= singular(name) %>-by-id.command';
import { Remove<%= classify(name) %>ByIdCommand } from './commands/remove-<%= singular(name) %>-by-id.command';
import { Update<%= classify(name) %>ByIdCommand } from './commands/update-<%= singular(name) %>-by-id.command';
import { Create<%= classify(name) %>Dto } from './dto/create-<%= singular(name) %>.dto';
import { Update<%= classify(name) %>ByIdDto } from './dto/update-<%= singular(name) %>-by-id.dto';
import { <%= classify(name) %>Entity } from './entities/<%= singular(name) %>.entity';

@Controller('<%= dasherize(name) %>')
@ApiTags('<%= classify(name) %> API')
@HideController()
export class <%= classify(name) %>Controller {
	constructor(private readonly commandBus: CommandBus) {}

	@Post()
	@ApiCreate(<%= classify(name) %>Entity, '<%= classify(name) %>')
	create(@Body() data: Create<%= classify(name) %>Dto) {
		return this.commandBus.execute(new Create<%= classify(name) %>Command({ data }));
	}

	@Get()
	@ApiGetAll(<%= classify(name) %>Entity, '<%= classify(name) %>')
	getAllPaginated(@Query() query: PaginationDto) {
		return this.commandBus.execute(new GetAll<%= classify(name) %>PaginatedCommand({ query }));
	}

	@Get(':id')
	@ApiGetOne(<%= classify(name) %>Entity, '<%= classify(name) %>')
	getOneById(@Param('id') id: string) {
		return this.commandBus.execute(new GetOne<%= classify(name) %>ByIdCommand({ id }));
	}

	@Patch(':id')
	@ApiUpdate(<%= classify(name) %>Entity, '<%= classify(name) %>')
	updateById(@Param('id') id: string, @Body() data: Update<%= classify(name) %>ByIdDto) {
		return this.commandBus.execute(new Update<%= classify(name) %>ByIdCommand({ id, data }));
	}

	@Delete(':id')
	@ApiDelete(<%= classify(name) %>Entity, '<%= classify(name) %>')
	removeById(@Param('id') id: string) {
		return this.commandBus.execute(new Remove<%= classify(name) %>ByIdCommand({ id }));
	}
}
