import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponse, BaseResponsePagination, WsMessage } from "../model/base_response";
import { RoleDto } from "../model/role";
import {  PaginationSearchDto } from "../model/pagination";

export const RoleApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  reducerPath: "roleAPi",
  tagTypes: ["roleApi"],
  endpoints: (build) => ({
    gets: build.query<BaseResponsePagination<RoleDto[]>, PaginationSearchDto>({
      query: (query) => ({
        url: `role/all?page=${query.page}&perpage=${query.perpage}&search=${query.search??""}`,
      }),
      providesTags: ["roleApi"],
    }),
    getById: build.query<BaseResponse<RoleDto>, number>({
      query: (id) => ({
        url: `role/by_id/${id}`,
      }),
      providesTags: ["roleApi"],
    }),
    create: build.mutation<WsMessage, RoleDto>({
        query: (body) => ({
            url: `role/create`,
            body,
            method: "POST",

        }),
        invalidatesTags: ["roleApi"],
    }),
    edit: build.mutation<WsMessage, {id:number, body:RoleDto}>({
        query: ({id, body}) => ({
            url: `role/by_id/${id}`,
            body,
            method: "PATCH",

        }),
        invalidatesTags: ["roleApi"],
      }),
  }),
});
