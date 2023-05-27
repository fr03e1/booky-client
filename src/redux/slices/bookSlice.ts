import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosRequestConfig} from "axios";
import {IBook} from "../../models/IBook";

type Links = {
    label: number
}

interface BookSliceState {
    items: IBook[] ,
    links: Links[],
    current_page: number,
    last_page:number,
}
const initialState:BookSliceState = {
    items:[],
    links: [],
    current_page: 1,
    last_page:1
}

interface BookParams {
    categories: number[],
    authors: number[],
    sortBy: string,
    order: string,
    pages:string,
    page: number
}

export const getBooks = createAsyncThunk(
    'book/getBooks',
    async (params:BookParams,{dispatch})=>{
        const {sortBy,categories,authors,order,pages,page} = params;
        const {data} = await axios.post('http://localhost:80/api', {
            categories: categories,
            authors: authors,
            sorting: sortBy,
            order: order,
            pages: pages,
            page:page

        })
        dispatch(setLinks(data.meta.links))
        dispatch(setCurrentPage(data.meta.current_page))
        dispatch(setLastPage(data.meta.last_page))
        return data;
    })

const booksSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setItems(state,action) {
            state.items = action.payload
        },
        setLinks(state,action) {
            state.links = action.payload
        },
        setCurrentPage(state,action) {
            state.current_page = action.payload
        },
        setLastPage(state,action) {
            state.last_page = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state) => {
        });
        builder.addCase(getBooks.fulfilled, (state,action:any) => {
            state.items = action.payload.data
        });
        builder.addCase(getBooks.rejected, (state,action) => {
        });
    },
});

export default booksSlice.reducer;
export const {setItems,setLinks,setCurrentPage,setLastPage} = booksSlice.actions;