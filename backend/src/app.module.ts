import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './modules/database/database.module';
import { ModuleModule } from './modules/module/module.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [DatabaseModule, ModuleModule, RoleModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
