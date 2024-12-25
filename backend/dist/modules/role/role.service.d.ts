import { DatabaseService } from '../database/database.service';
import { RoleDto } from 'src/dto/role.dto';
export declare class RoleService {
    private readonly db;
    constructor(db: DatabaseService);
    create(body: RoleDto): Promise<any>;
}
