import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { IconService } from './icon.service';

@Controller()
@ApiTags()
export class IconController {
  constructor(private readonly service: IconService) {}
}
