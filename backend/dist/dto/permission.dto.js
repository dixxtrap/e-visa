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
exports.PermissionDto = void 0;
const client_1 = require("@prisma/client");
const valid_enum_1 = require("../decorateur/valid_enum");
const valid_number_1 = require("../decorateur/valid_number");
const valid_string_1 = require("../decorateur/valid_string");
class PermissionDto {
}
exports.PermissionDto = PermissionDto;
__decorate([
    (0, valid_string_1.IsValidStringApi)(),
    __metadata("design:type", String)
], PermissionDto.prototype, "code", void 0);
__decorate([
    (0, valid_enum_1.IsValidEnumApi)(Object.values(client_1.$Enums.PermissionActionEnum)),
    __metadata("design:type", String)
], PermissionDto.prototype, "action", void 0);
__decorate([
    (0, valid_number_1.IsValidNumberApi)(),
    __metadata("design:type", Number)
], PermissionDto.prototype, "moduleId", void 0);
__decorate([
    (0, valid_string_1.IsValidStringOptionalApi)(),
    __metadata("design:type", String)
], PermissionDto.prototype, "comment", void 0);
//# sourceMappingURL=permission.dto.js.map