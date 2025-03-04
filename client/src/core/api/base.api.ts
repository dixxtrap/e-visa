
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponse } from "../model/base_response";
import { UserDto } from "../model/user";

export const BaseApi = createApi({

    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
    tagTypes: ['baseApi'],
    endpoints: (build) => ({
        profile: build.query<BaseResponse<UserDto>, void>({
            query: () => '/security/profile'
        })
    })
});
