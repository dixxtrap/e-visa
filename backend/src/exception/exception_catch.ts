import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpExceptionCode, WsMessage } from './ws_message';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception?.getStatus ? exception?.getStatus() : 500;
    if (exception instanceof WsMessage) {
      const e = exception.getResponse();
      response.status(status).json({
        ...(e instanceof Object ? e : { message: e }),
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else if (exception instanceof PrismaClientKnownRequestError) {
      const list = exception.message.split('\n') as string[];
      const message = list[list.length - 1];
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
