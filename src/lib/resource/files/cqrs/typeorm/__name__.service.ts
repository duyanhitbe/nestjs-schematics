import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { <%= classify(name) %>Entity } from './entities/<%= singular(name) %>.entity';
import { I<%= classify(name) %>Service } from './<%= name %>.interface';

@Injectable()
export class <%= classify(name) %>Service extends I<%= classify(name) %>Service {
	notFoundMessage = 'Không tìm thấy <%= classify(name) %>';

	constructor(@InjectRepository(<%= classify(name) %>Entity) private readonly <%= lowercased(name) %>Repo: Repository<<%= classify(name) %>Entity>) {
		super(<%= lowercased(name) %>Repo);
	}
}
