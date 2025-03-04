// import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
// import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
// import { LocationService } from "./location.service";
// import { Get, Patch, Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
// import { Body, Param } from "@nestjs/common/decorators/http/route-params.decorator";
// import { LocationDto, LocationUpdateDto } from "src/dto/location.dto";
// import { CurrentUser } from "src/decorateur/current_user";
// const Tag:string ="location"
// @Controller(Tag)
// @ApiTags(Tag)
// export class LocationController {
//   constructor(private readonly service: LocationService) {}
//   @Get('all')
//   all() {
//     return this.service.all({});
//   }
//   @Get('by_id/:id')
//   byId(@Param('id') id: number, @CurrentUser() by) {
//     return this.service.one({ id });
//   }
//   @Post('create')
//   create(@Body() body: LocationDto) {
//     return this.service.create({ body });
//   }
//   @Patch('by_id/:id')
//   update(@Body() body: LocationUpdateDto, @Param('id') id: number) {
//     return this.service.update({ id, body });
//   }
// }
