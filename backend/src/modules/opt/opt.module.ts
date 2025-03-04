import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import OptController from './opt.controller';
import { OptService } from './opt.service';

@Module({ controllers: [OptController], providers: [OptService] })
export default class OptModule {}
