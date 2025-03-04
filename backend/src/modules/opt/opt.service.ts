import { BaseResponse } from "src/utils/base_response";
import { DatabaseService } from "../database/database.service";
import { PaginationSearchDto } from "src/dto/pagination.dto";
import { CryptoService } from "src/utils/crypto_service";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
@Injectable()
export  class OptService {
    constructor(private db: DatabaseService, private readonly crypto: CryptoService) { }
    getKey() {
        return this.crypto.hash("Kalanji2024")
    }
    all(query:PaginationSearchDto ) {
        return this.db.opt.findMany().then(val=>BaseResponse.success(val))
    }
};

