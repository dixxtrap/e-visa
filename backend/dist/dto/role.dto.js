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
exports.RoleUpdateDto = exports.RoleDto = void 0;
const valid_string_1 = require("../decorateur/valid_string");
const valid_number_1 = require("../decorateur/valid_number");
const valid_boolean_1 = require("../decorateur/valid_boolean");
class RoleDto {
}
exports.RoleDto = RoleDto;
__decorate([
    (0, valid_string_1.IsValidStringApi)(),
    __metadata("design:type", String)
], RoleDto.prototype, "name", void 0);
__decorate([
    (0, valid_boolean_1.IsValidBooleanOptionalApi)(),
    __metadata("design:type", Boolean)
], RoleDto.prototype, "isActive", void 0);
__decorate([
    (0, valid_string_1.IsValidStringOptionalApi)(),
    __metadata("design:type", String)
], RoleDto.prototype, "comment", void 0);
__decorate([
    (0, valid_number_1.IsValidNumberOptionnalApi)(),
    __metadata("design:type", Number)
], RoleDto.prototype, "byId", void 0);
class RoleUpdateDto {
}
exports.RoleUpdateDto = RoleUpdateDto;
__decorate([
    (0, valid_string_1.IsValidStringOptionalApi)({ apiPropertyOptions: { required: false } }),
    __metadata("design:type", String)
], RoleUpdateDto.prototype, "name", void 0);
__decorate([
    (0, valid_boolean_1.IsValidBooleanOptionalApi)({ apiPropertyOptions: { required: false } }),
    __metadata("design:type", Boolean)
], RoleUpdateDto.prototype, "isActive", void 0);
__decorate([
    (0, valid_string_1.IsValidStringOptionalApi)(),
    __metadata("design:type", String)
], RoleUpdateDto.prototype, "comment", void 0);
__decorate([
    (0, valid_number_1.IsValidNumberOptionnalArrayApi)({
        apiPropertyOptions: { type: () => Number, isArray: true, required: false },
        validationOptions: { each: true },
    }),
    __metadata("design:type", Array)
], RoleUpdateDto.prototype, "permissionIds", void 0);
//# sourceMappingURL=role.dto.js.map