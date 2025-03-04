import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { DatabaseService } from "../database/database.service";
import { throwSuccess } from "src/exception/ws_message";
import { VisaTypeDto, VisaTypeUpdateDto } from "src/dto/visa_type.dto";
import { BaseResponse } from "src/utils/base_response";
import { PaginationSearchDto } from "src/dto/pagination.dto";
import { LoginDto } from "src/dto/login.dto";
import { AddIdDto } from "src/dto/id_param";

@Injectable()
export class VisaTypeService {
  constructor(private readonly db: DatabaseService) {}
  create({ body , by}: { body: VisaTypeDto, by:AddIdDto&LoginDto}) {
    return this.db.visaType.create({ data: {...body, byId:by.id} }).then(throwSuccess);
  }
  async all({ query }: { query: PaginationSearchDto }) {
    const whereClause={name:{contains:query.search??""}}
    return this.db.visaType.findMany({where:whereClause}).then(async (val) => BaseResponse.successWithPagination(val, await this.db.visaType.count({where:whereClause}), query.perpage));
  }
  updateById({ body, id }: { body: VisaTypeUpdateDto; id: number }) {
    return this.db.visaType
      .update({ where: { id }, data: body })
      .then(throwSuccess);
  }
 
  getOneById({ id }: { id: number }) {
    return this.db.visaType
      .findUniqueOrThrow({ where: { id } })
      .then((val) => BaseResponse.success(val));
  }
}
