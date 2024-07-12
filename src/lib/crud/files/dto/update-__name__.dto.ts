<% if (isSwaggerInstalled) { %>import { PartialType } from '@nestjs/swagger';
import { Create<%= classify(name) %>Dto } from './create-<%= name %>.dto';

<% } %>export class Update<%= classify(name) %>Dto<% if (isSwaggerInstalled) { %> extends PartialType(Create<%= classify(name) %>Dto)<% } %> {}
