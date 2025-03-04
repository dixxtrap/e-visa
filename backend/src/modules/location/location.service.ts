// import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
// import { DatabaseService } from "../database/database.service";
// import { BaseResponse } from "src/utils/base_response";

// import { throwSuccess } from "src/exception/ws_message";
// import { LocationDto, LocationUpdateDto } from "src/dto/location.dto";

// @Injectable()
// export class LocationService{
//     constructor(private readonly db :DatabaseService){}
//     all({}:{}){
//         return this.db.location
//           .findMany()
//           .then((val) => BaseResponse.success(val));
//     }

//     one({id}:{id:number}){
//         return this.db.location
//           .findFirstOrThrow({ where: { id } })
//           .then((val) => BaseResponse.success(val));
//     }
//     create({body}:{body:LocationDto}){
//         return this.db.location.create({data:body}).then(throwSuccess)
//     }
//     update({id, body}:{id:number, body:LocationUpdateDto}){
//         return this.db.location.update({ where: { id }, data: body }).then(throwSuccess);
//     }
// }
