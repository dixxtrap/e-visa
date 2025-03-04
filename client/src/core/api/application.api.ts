import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponse, WsMessage } from "../model/base_response";
import { ApplicationContactDto, ApplicationDto, RoadTripInfoDto } from "../model/application";

export const ApplicationApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  reducerPath: "ApplicationAPi",
  tagTypes: ["ApplicationApi"],
  endpoints: (build) => ({
    pending: build.query<BaseResponse<ApplicationDto>, void>({
        query: () => "application/pending",
        providesTags:["ApplicationApi"]
    }),
    addContact: build.mutation<WsMessage, ApplicationContactDto>({
        query: (body) => ({url:"application/contact", method:"POST", body}),
        invalidatesTags:["ApplicationApi"]
    }),
    addRoadTripInfo: build.mutation<WsMessage, RoadTripInfoDto>({
        query: (body) => ({url:"application/road_trip_info", method:"POST", body}),
        invalidatesTags:["ApplicationApi"]
    }),
  }),
});
