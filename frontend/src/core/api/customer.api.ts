import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponsePagination, WsMessage } from "../model/base_response";
import { PaginationCustomerDto } from "../model/pagination";
import { UserDto } from "../model/user";
import { CustomerDto } from "../model/customer";

export const CustomerApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  reducerPath: "customerApi",
  tagTypes: ["userApi"],
  endpoints: (build) => ({
    gets: build.query<BaseResponsePagination<CustomerDto[]>, PaginationCustomerDto>({
      query: (query) => ({
        url: `customer/all/?page=${query.page??''}&perpage=${query.perpage??''}&phone=${query.phone??''}&displayname=${query.displayename??''}&email=${query.email??''}`,
      }),
      providesTags: ["userApi"],
    }),
    create: build.mutation<WsMessage, Partial<UserDto>>({
      query: (body) => ({ url: `customer/create`, method: "POST", body }),
      invalidatesTags: ["userApi"],
    }),
    edit: build.mutation<WsMessage, {id:number,body:Partial<UserDto>}>({
        query: ({body, id}) => ({ url: `customer/by_id/${id}`, method: "PATCH", body }),
        invalidatesTags: ["userApi"],
      }),
  }),
});
