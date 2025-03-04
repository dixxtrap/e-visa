import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { DatabaseService } from "../database/database.service";
import { BaseResponse } from "src/utils/base_response";
import {  PaginationSearchDto } from "src/dto/pagination.dto";

@Injectable({})
export class WsService {
  constructor(private readonly db: DatabaseService) {}
  moduleAll({
    pagination, 
  }: {
    pagination: PaginationSearchDto;
  }) {
    console.log(pagination)
    return this.db.module.findMany({where:{name:{contains:pagination.search}}}).then((val) => BaseResponse.success(val));
  }
}
