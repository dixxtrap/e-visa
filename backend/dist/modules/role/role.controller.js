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
let RoleController = class RoleController {
    constructor(service) {
        this.service = service;
    }
    create(body) {
        console.log(body);
        return this.service.create(body);
    }
    update(body) {
        console.log(body);
        return this.service.create(body);
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, request_mapping_decorator_1.Post)(),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.RoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "create", null);
__decorate([
    (0, request_mapping_decorator_1.Post)(),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.RoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "update", null);
exports.RoleController = RoleController = __decorate([
    (0, controller_decorator_1.Controller)('role'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map