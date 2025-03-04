import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponsePagination, WsMessage } from "../model/base_response";
import { PaginationUserDto } from "../model/pagination";
import { UserDto } from "../model/user";

export const UserApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  reducerPath: "userApi",
  tagTypes: ["userApi"],
  endpoints: (build) => ({
    gets: build.query<BaseResponsePagination<UserDto[]>, PaginationUserDto>({
      query: (query) => ({
        url: `user/all/?page=${query.page}&perpage=${query.perpage}&phone=${query.phone}&displayname=${query.displayename}`,
      }),
      providesTags: ["userApi"],
    }),
    create: build.mutation<WsMessage, Partial<UserDto>>({
      query: (body) => ({ url: `user/create`, method: "POST", body }),
      invalidatesTags: ["userApi"],
    }),
    edit: build.mutation<WsMessage, {id:number,body:Partial<UserDto>}>({
        query: ({body, id}) => ({ url: `user/by_id/${id}`, method: "PATCH", body }),
        invalidatesTags: ["userApi"],
      }),
  }),
});
