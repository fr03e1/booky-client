import {AsyncThunkAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {EStatus} from "../../models/EStatus";
import {IBook} from "../../models/IBook";
import {BookRequest} from "../../models/http/BookRequest";

type Links = {
    label: number
}

interface BookSliceState {
    items: IBook[] ,
    status: EStatus,
    links: Links[],
    current_page: number,
    last_page:number,
}
const initialState:BookSliceState = {
    items:[],
    status: EStatus.LOADING,
    links: [],
    current_page: 1,
    last_page:1
}


export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (params: BookRequest,{dispatch}) => {
        const {authors,publishers,year, price,pages} = params;
        const {data} = await axios.post('http://localhost:80/api/books',{
            authors: authors,
            publishers: publishers,
            year: year,
            price: price,
            pages: pages
        })
        return data;
    }
)

const booksSlice = createSlice(({
    name: 'books',
    initialState,
    reducers: {
       setItems(state,action) {

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
        builder.addCase(fetchBooks.pending,(state,action) => {
            state.status = EStatus.LOADING;
        });
        builder.addCase(fetchBooks.fulfilled, (state,action:any) => {
            state.status = EStatus.SUCCESS;
            state.items = action.payload.data
        });
        builder.addCase(fetchBooks.rejected, (state,action) => {
            state.status = EStatus.ERROR
        });
    }
}))

export default booksSlice.reducer;
export const {setItems,setLinks,setCurrentPage,setLastPage} = booksSlice.actions;