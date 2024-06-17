export class GetOne<%= classify(name) %>ByIdCommand {
	id!: string;

	constructor(data: GetOne<%= classify(name) %>ByIdCommand) {
		Object.assign(this, data);
	}
}
