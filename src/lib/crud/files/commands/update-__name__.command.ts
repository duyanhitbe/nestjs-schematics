import { Update<%= classify(name) %>Dto } from '../dto/update-<%= name %>.dto';

export class Update<%= classify(name) %>Command {
  id!: string;
  data!: Update<%= classify(name) %>Dto;

  constructor(data: Update<%= classify(name) %>Command) {
    Object.assign(this, data);
  }
}
