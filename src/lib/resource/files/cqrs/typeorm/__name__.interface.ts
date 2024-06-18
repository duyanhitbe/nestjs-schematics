import { BaseService } from '@duyanhit/nestjs-base';
import { <%= classify(name) %>Entity } from './entities/<%= singular(name) %>.entity';

export abstract class I<%= classify(name) %>Service extends BaseService<<%= classify(name) %>Entity> {}
