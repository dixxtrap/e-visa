import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { documentFactory } from './utils/swagger_config';
import { validationConfig } from './utils/validation_pipe_config';
import { HttpExceptionFilter } from './exception/exception_catch';
import * as cookieParser from 'cookie-parser';
import { VersioningType } from '@nestjs/common/enums/version-type.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(validationConfig);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(cookieParser());
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI
  })
  SwaggerModule.setup('v1/documentation', app, documentFactory(app));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
