import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponse, WsMessage } from "../model/base_response";
import { SignupDto } from "../model/user";
import { LoginDto } from "../model/login";

export const SecurityApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
    tagTypes: ['securityApi'],
    reducerPath: "securityApi",
    endpoints: (build) => ({
        profile: build.query<BaseResponse<LoginDto>, void>({
            query: () => '/security/profile',
            providesTags: ["securityApi"]
        }),
        login: build.mutation<WsMessage, LoginDto>(
            {
                query: (body) => ({ url: "/security/signin", body, method: "POST" }),
                invalidatesTags: ["securityApi"]
            }
        ),
        signup: build.mutation<WsMessage, SignupDto>(
            {
                query: (body) => ({ url: "/customer/create", body, method: "POST" }),
                invalidatesTags: ["securityApi"]
            }
        )
    })
});


export const { } = SecurityApi
