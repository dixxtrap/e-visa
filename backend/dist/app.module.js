"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./modules/user/user.module");
const database_module_1 = require("./modules/database/database.module");
const module_module_1 = require("./modules/module/module.module");
const role_module_1 = require("./modules/role/role.module");
const permission_module_1 = require("./modules/permission/permission.module");
const visa_type_module_1 = require("./modules/visa_type/visa_type.module");
const ws_module_1 = require("./modules/ws/ws.module");
const security_module_1 = require("./modules/security/security.module");
const config_module_1 = require("@nestjs/config/dist/config.module");
const customer_module_1 = require("./modules/customer/customer.module");
const mailer_module_1 = require("./modules/mailer/mailer.module");
const opt_module_1 = require("./modules/opt/opt.module");
const application_module_1 = require("./modules/application/application.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            database_module_1.DatabaseModule,
            security_module_1.SecurityModule,
            user_module_1.UserModule,
            customer_module_1.CustomerModule,
            module_module_1.ModuleModule,
            role_module_1.RoleModule,
            permission_module_1.PermissionModule,
            visa_type_module_1.VisaTypeModule,
            mailer_module_1.EmailerModule,
            opt_module_1.default,
            application_module_1.VisaApplicationModule,
            ws_module_1.WsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map