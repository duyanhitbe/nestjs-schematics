import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= classify(name) %>Entity } from './entities/<%= singular(name) %>.entity';
import { Create<%= classify(name) %>Handler } from './handlers/create-<%= singular(name) %>.handler';
import { GetAll<%= classify(name) %>PaginatedHandler } from './handlers/get-all-<%= singular(name) %>-paginated.handler';
import { GetOne<%= classify(name) %>ByIdHandler } from './handlers/get-one-<%= singular(name) %>-by-id.handler';
import { Remove<%= classify(name) %>ByIdHandler } from './handlers/remove-<%= singular(name) %>-by-id.handler';
import { Update<%= classify(name) %>ByIdHandler } from './handlers/update-<%= singular(name) %>-by-id.handler';
import { <%= classify(name) %>Controller } from './<%= name %>.controller';
import { I<%= classify(name) %>Service } from './<%= name %>.interface';
import { <%= classify(name) %>Service } from './<%= name %>.service';

@Module({
	imports: [TypeOrmModule.forFeature([<%= classify(name) %>Entity])],
	controllers: [<%= classify(name) %>Controller],
	providers: [
		{
			provide: I<%= classify(name) %>Service,
			useClass: <%= classify(name) %>Service
		},
		Create<%= classify(name) %>Handler,
		GetAll<%= classify(name) %>PaginatedHandler,
		GetOne<%= classify(name) %>ByIdHandler,
		Remove<%= classify(name) %>ByIdHandler,
		Update<%= classify(name) %>ByIdHandler
	],
	exports: [I<%= classify(name) %>Service]
})
export class <%= classify(name) %>Module {}
