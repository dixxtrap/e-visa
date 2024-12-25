import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { ModuleService } from './module.service';

@Module({
  controllers: [],
  providers: [ModuleService],
})
export class ModuleModule {}
