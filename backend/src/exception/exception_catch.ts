import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpExceptionCode, WsMessage } from './ws_message';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log();
    console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception?.getStatus ? exception?.getStatus() : 500;
    if (exception instanceof BadRequestException) {
      response.status(status).json({
        code: 'BAD_REQUEST',
        message: (exception.getResponse() as unknown as { message: any })
          .message,
        status: false,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else if (exception instanceof WsMessage) {
      const e = exception.getResponse();
      response.status(status).json({
        ...(e instanceof Object ? e : { message: e }),
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else if (
      exception instanceof PrismaClientKnownRequestError ||
      exception.meta
    ) {
      console.log(
        '===============PrismaClientKnownRequestError==================',
      );
      const message = exception.meta.modelName + ' : ' + exception.meta.cause;
      response.status(status).json({
        code: 'CONSTRAINT_VIOLATION',
        message: [message],
        status: false,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else {
      response.status(status).json({
        status: false,
        message: HttpExceptionCode.FAILLURE.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
