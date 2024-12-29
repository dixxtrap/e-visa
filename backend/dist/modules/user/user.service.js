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
exports.UserService = void 0;
const types_1 = require("../../../prisma/types/index.js");
const database_service_1 = require("../database/database.service");
const common_1 = require("@nestjs/common");
const crypto_service_1 = require("../../utils/crypto_service");
const exclude_key_1 = require("../../utils/exclude_key");
let UserService = class UserService {
    constructor(db, crypto) {
        this.db = db;
        this.crypto = crypto;
    }
    create(body) {
        console.log(body);
        return this.db.user
            .create({
            data: {
                ...(0, exclude_key_1.excludeFields)(body, ['password', 'roleId']),
                login: {
                    create: {
                        username: body.phone,
                        type: types_1.LoginEnum.USER,
                        roleId: body.roleId,
                        password: this.crypto.createHash(body.password),
                    },
                },
            },
            include: { login: true },
        })
            .catch((e) => {
            console.log(typeof e);
            return {
                meta: e.meta,
                messages: e.message.split('\n')[e.message.split('\n').length - 1],
            };
        });
    }
    getAll() {
        return this.db.user.findMany({
            include: { login: { select: { username: true } } },
            where: {},
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        crypto_service_1.CryptoService])
], UserService);
//# sourceMappingURL=user.service.js.map