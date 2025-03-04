import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";

@Module({
    imports:[],
    controllers:[CustomerController],
    providers:[CustomerService],
})
export class CustomerModule{
    
}