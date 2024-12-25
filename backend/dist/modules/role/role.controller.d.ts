import { RoleService } from './role.service';
import { RoleDto } from 'src/dto/role.dto';
export declare class RoleController {
    private readonly service;
    constructor(service: RoleService);
    create(body: RoleDto): Promise<any>;
    update(body: RoleDto): Promise<any>;
}
