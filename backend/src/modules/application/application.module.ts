import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { ApplicationController } from "./application.controller";
import { ApplicationService } from "./application.service";
import { MulterConfig } from "src/utils/multer.config";

@Module({
    // imports: [MulterConfig],
    controllers: [ApplicationController],
    providers:[ApplicationService]
})
export class VisaApplicationModule {

};
