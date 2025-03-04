import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { VisaTypeController } from "./visa_type.controller";
import { VisaTypeService } from "./visa_type.service";

@Module(
    {
        imports:[],
        controllers:[VisaTypeController],
        providers:[VisaTypeService ]
    }
)
export class VisaTypeModule{}
