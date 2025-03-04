import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { SecurityService } from "./security.service";
import { Get, Patch, Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { LoginDto } from "src/dto/login.dto";
import { Body, Req, Res } from "@nestjs/common/decorators/http/route-params.decorator";
import { Public } from "./is_public.meta";
import { ApiBearerAuth } from "@nestjs/swagger/dist/decorators/api-bearer.decorator";
import { Response } from "express";
import { CurrentUser } from "src/decorateur/current_user";

const TAG='security'
@ApiTags(TAG)
@Controller(TAG)
export class SecurityController {
  constructor(private readonly service: SecurityService) {}
  @Post("signin")
  @Public()
  signup(@Body() body:LoginDto, @Res() res :Response){
    // TODO document why this method 'signup' is empty
  console.log(body)
return this.service.sigin(body, res)

  }
  @Patch("reset-password")
  resetPassword(){
    // TODO document why this method 'resetPassword' is empty


  }
  @Patch("define-password")
  definePassword(){
    // TODO document why this method 'resetPassword' is empty


  }
  @Post("forget-password")
  forgetPassword(){
    // TODO document why this method 'forgetPassword' is empty


  }
  @Get("profile")
  @ApiBearerAuth()
  profile(@CurrentUser() user){
    // TODO document why this method 'profile' is empty
  return this.service.profile(user);

  }
}
