import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './modules/database/database.module';
import { ModuleModule } from './modules/module/module.module';
import { RoleModule } from './modules/role/role.module';
import { PermissionModule } from './modules/permission/permission.module';
import { VisaTypeModule } from './modules/visa_type/visa_type.module';
import { WsModule } from './modules/ws/ws.module';
import { SecurityModule } from './modules/security/security.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { CustomerModule } from './modules/customer/customer.module';
import { EmailerModule } from './modules/mailer/mailer.module';
import OptModule from './modules/opt/opt.module';
import { VisaApplicationModule } from './modules/application/application.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      // load: [configurations],

      isGlobal: true,
    }),
    DatabaseModule,
    SecurityModule,
    UserModule,
    CustomerModule,
    ModuleModule,
    RoleModule,
    PermissionModule,
    VisaTypeModule,
    EmailerModule,
    OptModule,
    VisaApplicationModule,
    WsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
