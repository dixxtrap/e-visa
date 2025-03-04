import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponse } from "../model/base_response";
import { LoginDto } from "../model/login";
export const SecurityApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
    reducerPath: "securityApi",
    tagTypes: ["securityApi"],
    endpoints: (build) => ({
        profile: build.query<BaseResponse<LoginDto>, void>({
            query: () => "security/profile",
            providesTags: ['securityApi']
        }),
        login: build.mutation<BaseResponse<LoginDto>, LoginDto>({
            query: (body) => ({ url: "security/signin", body, method: "POST" }),
            invalidatesTags: ['securityApi']
        })
    }),
})
