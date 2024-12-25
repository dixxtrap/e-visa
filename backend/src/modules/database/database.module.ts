import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { DatabaseService } from './database.service';
import { Global } from '@nestjs/common';
@Global()
@Module({
  imports: [],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
