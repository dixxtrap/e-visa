import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { WsController } from "./ws.controller";
import { WsService } from "./ws.service";

@Module({
  imports: [],
  controllers: [WsController],
  providers: [WsService],
  exports: [],
})
export class WsModule{}
