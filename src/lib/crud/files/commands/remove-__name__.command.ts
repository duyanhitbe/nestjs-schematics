export class Remove<%= classify(name) %>Command {
  id!: string;

  constructor(data: Remove<%= classify(name) %>Command) {
    Object.assign(this, data);
  }
}
