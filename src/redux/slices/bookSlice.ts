import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBook} from "../../models/IBook";

interface BookState {
    books: IBook[]
}

const initialState:BookState= {
    books: []
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBooks: (state,action:PayloadAction<IBook[]>) => {
            state.books.push(...action.payload);
        }
    }
})

export default bookSlice.reducer;
export const {setBooks} = bookSlice.actions;