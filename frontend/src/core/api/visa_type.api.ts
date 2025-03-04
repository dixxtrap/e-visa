import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponsePagination, WsMessage } from "../model/base_response";
import { VisaTypeDto } from "../model/visa_type";
import { PaginationSearchDto } from "../model/pagination";

export const VisaTypeAPi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
    reducerPath: "visaTypeApi",
  tagTypes:["visaTypeApi"],
  endpoints: (build) => ({
    all: build.query<BaseResponsePagination<VisaTypeDto[]>, PaginationSearchDto>({
        query: (query) => `visa_type/all?page=${query.page}&perpage=${query.perpage}&search=${query.search ?? ""}`,
        providesTags:["visaTypeApi"]
    }),
    create: build.mutation<WsMessage, VisaTypeDto>({
        query: (body) => ({ url: "visa_type/create", body , method:"POST"}),
        invalidatesTags:["visaTypeApi"]
    }),
    edit: build.mutation<WsMessage, {id:number,body:VisaTypeDto}>({
        query: ({id,body}) => ({ url: "visa_type/by_id/"+id, body, method:"PATCH" }),
        invalidatesTags:["visaTypeApi"]
      }),
  }),
});
