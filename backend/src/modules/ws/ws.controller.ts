import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Query } from "@nestjs/common/decorators/http/route-params.decorator";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { WsService } from "./ws.service";
import { PaginationSearchDto } from "src/dto/pagination.dto";

const Tag='ws'
@ApiTags(Tag)
@Controller(Tag)
export class WsController {
  constructor(private readonly service: WsService) {}
  @Get('module/all')
  allModule(@Query() pagination: PaginationSearchDto) {
    return this.service.moduleAll({ pagination });
  }
}