import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  BaseResponsePagination } from "../model/base_response";
import { PermissionDto } from "../model/permission";
import { PaginationSearchDto } from "../model/pagination";

export const PermissionApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
    reducerPath: "permissionApi",
    endpoints:(build)=> ({
        get: build.query< BaseResponsePagination<PermissionDto[]>, PaginationSearchDto>({
    query:(query)=>({url:`permission/all?page=${query.page}&perpage=${query.perpage}&search=${query.search??""}`,method:"GET", })
})
    }),
})
