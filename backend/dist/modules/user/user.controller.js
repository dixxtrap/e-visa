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
const exception_catch_1 = require("../../exception/exception_catch");
const exception_filters_decorator_1 = require("@nestjs/common/decorators/core/exception-filters.decorator");
const user_dto_1 = require("../../dto/user.dto");
const id_param_1 = require("../../dto/id_param");
let UserController = class UserController {
    constructor(userServide) {
        this.userServide = userServide;
    }
    create(body) {
        return this.userServide.create(body);
    }
    getById(param) {
        return this.userServide.getById(param.id);
    }
    getAll() {
        return this.userServide.getAll();
    }
};
exports.UserController = UserController;
__decorate([
    (0, request_mapping_decorator_1.Post)(),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, request_mapping_decorator_1.Get)(':id'),
    (0, exception_filters_decorator_1.UseFilters)(exception_catch_1.HttpExceptionFilter),
    __param(0, (0, route_params_decorator_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_param_1.ParamIdDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getById", null);
__decorate([
    (0, request_mapping_decorator_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
exports.UserController = UserController = __decorate([
    (0, controller_decorator_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map