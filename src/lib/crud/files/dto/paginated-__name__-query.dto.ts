<% if (isSwaggerInstalled) { %>import { ApiProperty } from '@nestjs/swagger';

<% } %>export class Paginated<%= classify(name) %>Query {
  <% if (isSwaggerInstalled) { %>@ApiProperty({ description: 'Per item a page' })
  <% } %>limit?: string;
  <% if (isSwaggerInstalled) { %>
  @ApiProperty({ description: 'Page number' })
  <% } %>page?: string;
}
