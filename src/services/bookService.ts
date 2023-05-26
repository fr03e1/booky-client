import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BookResponse, IBook} from "../models/IBook";

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:80/api/'}),
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