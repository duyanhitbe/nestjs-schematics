import { <%= classify(name) %>Entity } from '../entities/<%= name %>.entity';<% if (isSwaggerInstalled) { %>
import { ApiProperty } from '@nestjs/swagger';<% } %>

export class Paginated<%= classify(name) %>Query {
  <% if (isSwaggerInstalled) { %>@ApiProperty({ description: 'Per item a page', required: false })
  <% } %>limit?: string;
  <% if (isSwaggerInstalled) { %>
  @ApiProperty({ description: 'Page number', required: false })
  <% } %>page?: string;
}

export class Paginated<%= classify(name) %> {
  <% if (isSwaggerInstalled) { %>@ApiProperty({ type: [<%= classify(name) %>Entity] })
  <% } %>data: <%= classify(name) %>Entity[];
  <% if (isSwaggerInstalled) { %>
  @ApiProperty({
    properties: {
      limit: { example: 10 },
      page: { example: 1 },
      total: { example: 1 }
    }
  })
  <% } %>pagination: {
    limit: number;
    page: number;
    total: number;
  };
}
