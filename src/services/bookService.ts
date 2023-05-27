import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BookResponse} from "../models/responses/IbookResponse";

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (builder) => ({
        getBooks: builder.query<BookResponse,string>({
            query: () => ({
                url: '/books',
                method: 'POST'
            }),
        })
    })
})

export const {useGetBooksQuery} = bookApi