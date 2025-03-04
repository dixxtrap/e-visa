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
exports.UserController = void 0;
const controller_decorator_1 = require("@nestjs/common/decorators/core/controller.decorator");
const user_service_1 = require("./user.service");
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const user_dto_1 = require("../../dto/user.dto");
const api_use_tags_decorator_1 = require("@nestjs/swagger/dist/decorators/api-use-tags.decorator");
const api_bearer_decorator_1 = require("@nestjs/swagger/dist/decorators/api-bearer.decorator");
const is_public_meta_1 = require("../security/is_public.meta");
const pagination_dto_1 = require("../../dto/pagination.dto");
const Tag = 'user';
let UserController = class UserController {
    constructor(userServide) {
        this.userServide = userServide;
    }
    getAll(query) {
        return this.userServide.getAll({ query });
    }
    getById(id) {
        return this.userServide.getById(id);
    }
    create(body) {
        return this.userServide.create(body);
    }
    updateById(id, body) {
        return this.userServide.updateById({ id, body });
    }
};
exports.UserController = UserController;
__decorate([
    (0, request_mapping_decorator_1.Get)('all'),
    (0, is_public_meta_1.Public)(),
    __param(0, (0, route_params_decorator_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    (0, request_mapping_decorator_1.Get)('by_id/:id'),
    __param(0, (0, route_params_decorator_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getById", null);
__decorate([
    (0, request_mapping_decorator_1.Post)('create'),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, request_mapping_decorator_1.Patch)('by_id/:id'),
    __param(0, (0, route_params_decorator_1.Param)('id')),
    __param(1, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UserUpdateDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateById", null);
exports.UserController = UserController = __decorate([
    (0, controller_decorator_1.Controller)(Tag),
    (0, api_use_tags_decorator_1.ApiTags)(Tag),
    (0, api_bearer_decorator_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map