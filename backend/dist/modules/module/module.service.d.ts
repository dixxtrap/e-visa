import { OnModuleInit } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
export declare class ModuleService implements OnModuleInit {
    private readonly prismaService;
    constructor(prismaService: DatabaseService);
    onModuleInit(): void;
    getTable(): void;
}
