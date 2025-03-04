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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const controller_decorator_1 = require("@nestjs/common/decorators/core/controller.decorator");
const role_service_1 = require("./role.service");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const role_dto_1 = require("../../dto/role.dto");
const pagination_dto_1 = require("../../dto/pagination.dto");
const api_use_tags_decorator_1 = require("@nestjs/swagger/dist/decorators/api-use-tags.decorator");
const Tag = 'role';
let RoleController = class RoleController {
    constructor(service) {
        this.service = service;
    }
    getAll(query) {
        return this.service.getAll({ query });
    }
    getOne(id) {
        return this.service.getById({ id });
    }
    create(body) {
        console.log(body);
        return this.service.create(body);
    }
    update(id, body) {
        console.log(body);
        return this.service.update({ body, id });
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, request_mapping_decorator_1.Get)('all'),
    __param(0, (0, route_params_decorator_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationSearchDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "getAll", null);
__decorate([
    (0, request_mapping_decorator_1.Get)('by_id/:id'),
    __param(0, (0, route_params_decorator_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "getOne", null);
__decorate([
    (0, request_mapping_decorator_1.Post)('create'),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.RoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "create", null);
__decorate([
    (0, request_mapping_decorator_1.Patch)('by_id/:id'),
    __param(0, (0, route_params_decorator_1.Param)('id')),
    __param(1, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, role_dto_1.RoleUpdateDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "update", null);
exports.RoleController = RoleController = __decorate([
    (0, controller_decorator_1.Controller)(Tag),
    (0, api_use_tags_decorator_1.ApiTags)(Tag),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map