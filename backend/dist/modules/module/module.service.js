"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleService = void 0;
const injectable_decorator_1 = require("@nestjs/common/decorators/core/injectable.decorator");
const database_service_1 = require("../database/database.service");
let ModuleService = class ModuleService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    onModuleInit() {
        this.getTable();
    }
    getTable() {
        this.prismaService.$queryRaw `SELECT table_name as name
    FROM information_schema.tables
    WHERE table_schema = 'e-visa'
      AND table_type = 'BASE TABLE';`.then((val) => {
            console.log(val);
            Promise.all(val.map((e) => {
                const name = e.name.replace('_', '');
                return this.prismaService.module.upsert({
                    create: { name: name },
                    update: { name: name },
                    where: { name: name },
                });
            }));
        });
    }
};
exports.ModuleService = ModuleService;
exports.ModuleService = ModuleService = __decorate([
    (0, injectable_decorator_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ModuleService);
//# sourceMappingURL=module.service.js.map