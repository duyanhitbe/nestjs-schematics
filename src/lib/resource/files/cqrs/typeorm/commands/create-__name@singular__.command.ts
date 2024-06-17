import { Create<%= classify(name) %>Dto } from '../dto/create-<%= singular(name) %>.dto';

export class Create<%= classify(name) %>Command {
	data!: Create<%= classify(name) %>Dto;

	constructor(data: Create<%= classify(name) %>Command) {
		Object.assign(this, data);
	}
}