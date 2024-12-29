import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';

const config = new DocumentBuilder()
  .setTitle('E-visa')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .setContact('Djiga Salane', '', 'dakspro2007@gmail.com')
  .build();
export const documentFactory = (app) =>
  SwaggerModule.createDocument(app, config);
