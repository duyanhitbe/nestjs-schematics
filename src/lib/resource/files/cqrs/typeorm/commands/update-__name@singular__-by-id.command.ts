import { Update<%= classify(name) %>ByIdDto } from '../dto/update-<%= singular(name) %>-by-id.dto';

export class Update<%= classify(name) %>ByIdCommand {
	id!: string;
	data!: Update<%= classify(name) %>ByIdDto;

	constructor(data: Update<%= classify(name) %>ByIdCommand) {
		Object.assign(this, data);
	}
}
