import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { documentFactory } from './utils/swagger_config';
import { validationConfig } from './utils/validation_pipe_config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(validationConfig);
  SwaggerModule.setup('v1/documentation', app, documentFactory(app));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
