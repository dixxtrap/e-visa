"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badRequestExceptionCatch = void 0;
const bad_request_exception_1 = require("@nestjs/common/exceptions/bad-request.exception");
const badRequestExceptionCatch = (errors) => {
    console.log(errors);
    const messages = [];
    errors.map((error) => Object.entries(error.constraints).forEach((value) => {
        messages.push(`${error.property} : ${value[1]}`);
    }));
    return new bad_request_exception_1.BadRequestException(messages);
};
exports.badRequestExceptionCatch = badRequestExceptionCatch;
//# sourceMappingURL=bad_request_error.js.map