import { Module } from '@nestjs/common';
<% if (orm === 'typeorm') { %>import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= classify(name) %>Controller } from './<%= name %>.controller';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import { I<%= classify(name) %>Service } from './<%= name %>.interface';
import { <%= classify(name) %>Entity } from './entities/<%= name %>.entity';<% } %><% if (cqrs) { %>
import { Create<%= classify(name) %>Handler } from './handlers/create-<%= name %>.handler';
import { Find<%= classify(name) %>Handler } from './handlers/find-<%= name %>.handler';
import { FindOne<%= classify(name) %>Handler } from './handlers/find-one-<%= name %>.handler';
import { Remove<%= classify(name) %>Handler } from './handlers/remove-<%= name %>.handler';
import { Update<%= classify(name) %>Handler } from './handlers/update-<%= name %>.handler';<% } %>

@Module({<% if (orm === 'typeorm') { %>
  imports: [TypeOrmModule.forFeature([<%= classify(name) %>Entity])],<% } %>
  controllers: [<%= classify(name) %>Controller],
  providers: [
    {
      provide: I<%= classify(name) %>Service,
      useClass: <%= classify(name) %>Service
    }<% if (cqrs) { %>,
    Create<%= classify(name) %>Handler,
    Find<%= classify(name) %>Handler,
    FindOne<%= classify(name) %>Handler,
    Remove<%= classify(name) %>Handler,
    Update<%= classify(name) %>Handler<% } %>
  ],
  exports: [I<%= classify(name) %>Service]
})
export class <%= classify(name) %>Module {}
