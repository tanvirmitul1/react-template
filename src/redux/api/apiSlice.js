import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiBaseUrl = "https://dummyjson.com/";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  keepUnusedDataFor: 60,
  tagTypes: [],
  endpoints: () => ({}),
});
