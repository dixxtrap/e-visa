"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const swagger_config_1 = require("./utils/swagger_config");
const validation_pipe_config_1 = require("./utils/validation_pipe_config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(validation_pipe_config_1.validationConfig);
    swagger_1.SwaggerModule.setup('v1/documentation', app, (0, swagger_config_1.documentFactory)(app));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map