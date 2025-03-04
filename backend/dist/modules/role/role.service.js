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
exports.RoleService = void 0;
const injectable_decorator_1 = require("@nestjs/common/decorators/core/injectable.decorator");
const database_service_1 = require("../database/database.service");
const ws_message_1 = require("../../exception/ws_message");
const exclude_key_1 = require("../../utils/exclude_key");
const base_response_1 = require("../../utils/base_response");
let RoleService = class RoleService {
    constructor(db) {
        this.db = db;
    }
    onModuleInit() {
        this.createAdminRole();
    }
    createAdminRole() {
        console.log('=========create role adsmin=============');
        return this.db.role
            .upsert({
            create: { name: 'super_admin' },
            update: {},
            where: { name: 'super_admin' },
        })
            .then((val) => {
            console.log(val);
        })
            .catch((error) => {
            console.log(error);
        });
    }
    update({ body, id }) {
        return this.db.role
            .update({
            data: { ...(0, exclude_key_1.excludeFields)(body, ['permissionIds']) },
            where: { id: id },
        })
            .then(() => {
            if (body.permissionIds && body.permissionIds.length > 0)
                return this.db.rolePermission
                    .deleteMany({ where: { roleId: id } })
                    .then(() => {
                    return this.db.rolePermission.createMany({
                        data: body.permissionIds.map((e) => ({
                            permissionId: e,
                            roleId: id,
                        })),
                    });
                });
        })
            .then(() => {
            throw new ws_message_1.WsMessage(ws_message_1.HttpExceptionCode.SUCCEEDED);
        });
    }
    getAll({ query }) {
        const search = {
            ...(query.search ? { name: { contains: query.search } } : {}),
        };
        return this.db.role
            .findMany({
            where: search,
            include: {
                rolePermission: {
                    select: { permission: { select: { id: true, code: true } } },
                },
                _count: {
                    select: {
                        rolePermission: true,
                        login: { where: { type: 'USER' } },
                    },
                },
            },
        })
            .then(async (val) => base_response_1.BaseResponse.successWithPagination(val, await this.db.role.count({ where: search }), query.perpage));
    }
    getById({ id }) {
        return this.db.role
            .findFirstOrThrow({
            where: { id },
            include: {
                rolePermission: true,
            },
        })
            .then(async (val) => base_response_1.BaseResponse.success(val));
    }
    create(body) {
        return this.db.role.create({ data: body }).then(() => {
            throw ws_message_1.WsMessageSuccess;
        });
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, injectable_decorator_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], RoleService);
//# sourceMappingURL=role.service.js.map