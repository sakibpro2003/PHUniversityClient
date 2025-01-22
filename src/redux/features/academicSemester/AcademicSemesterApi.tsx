import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/auth/login",
        method: "POST",
      }),
    }),
  }),
});


export const { useGetAllSemestersQuery } = academicSemesterApi;
