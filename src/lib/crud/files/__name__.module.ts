import { Module } from '@nestjs/common';
import { <%= classify(name) %>Controller } from './<%= name %>.controller';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import { I<%= classify(name) %>Service } from './<%= name %>.interface';
<% if (orm === 'typeorm') { %>import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= classify(name) %>Entity } from './entities/<%= name %>.entity';<% } %>

@Module({<% if (orm === 'typeorm') { %>
  imports: [TypeOrmModule.forFeature([<%= classify(name) %>Entity])],<% } %>
  controllers: [<%= classify(name) %>Controller],
  providers: [
    {
      provide: I<%= classify(name) %>Service,
      useClass: <%= classify(name) %>Service
    }
  ],
  exports: [I<%= classify(name) %>Service]
})
export class <%= classify(name) %>Module {}
