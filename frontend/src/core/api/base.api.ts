import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponsePagination } from "../model/base_response";
import { ModuleDto } from "../model/module";
import { PaginationSearchDto } from "../model/pagination";
export const BaseApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
    reducerPath: "baseApi",
    endpoints: (build) => ({
        module: build.query<BaseResponsePagination<ModuleDto>, PaginationSearchDto>(
            {
                query: (query) => ({
            url:`modulenpm run builkd/all?page=${query.page}&perpage=${query.perpage}&search=${query.search??""}`, method:"GET"
        })
    }
)
    }),
})
