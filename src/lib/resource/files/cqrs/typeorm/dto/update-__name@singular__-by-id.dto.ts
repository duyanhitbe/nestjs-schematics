import { Create<%= classify(name) %>Dto } from './create-<%= singular(name) %>.dto';
import { PartialType } from '@nestjs/swagger';

export class Update<%= classify(name) %>ByIdDto extends PartialType(Create<%= classify(name) %>Dto) {}
