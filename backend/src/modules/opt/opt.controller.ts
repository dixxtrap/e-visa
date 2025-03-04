import { ApiController } from 'src/decorateur/api_controller';
import { OptService } from './opt.service';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Public } from '../security/is_public.meta';

@ApiController('opt')
export default class OptController {
  constructor(private readonly service: OptService) {}
  @Get('key')
  @Public()
  getKey() {
    return this.service.getKey();
  }
}
