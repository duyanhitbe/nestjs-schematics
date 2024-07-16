export class FindOne<%= classify(name) %>Query {
  id!: string;

  constructor(data: FindOne<%= classify(name) %>Query) {
    Object.assign(this, data);
  }
}
