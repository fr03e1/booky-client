import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {FilterResponse} from "../models/http/FilterResponse";
import {BookResponse} from "../models/http/BookResponse";

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (builder) => ({
        getBooks: builder.query<BookResponse,string>({
            query: () => ({
                url: '/books',
                method: 'Post'
            }),
        }),
        getFilters: builder.query<FilterResponse,string>({
            query: () => ({
                url: '/filters',
            }),
        })
    })
})

export const {
    useGetFiltersQuery,
    useGetBooksQuery,
} = bookApi;

export const {
    getFilters,
} = bookApi.endpoints