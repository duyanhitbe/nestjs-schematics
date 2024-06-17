export class Remove<%= classify(name) %>ByIdCommand {
	id!: string;

	constructor(data: Remove<%= classify(name) %>ByIdCommand) {
		Object.assign(this, data);
	}
}
