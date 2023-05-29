import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {IYear} from "../../models/IYear";
import {IPrice} from "../../models/IPrice";

interface IFilterSliceState {
    authors: number[],
    publishers: number[],
    year: number[],
    price: number[],
    pages: number,
    sorting: string,

}

const initialState: IFilterSliceState = {
    authors: [],
    publishers: [],
    year: [],
    price: [],
    pages: 8,
    sorting: 'title'
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setAuthorId(state, action: PayloadAction<number[]>) {
            state.authors = action.payload;
        },
        setPublisherId(state, action: PayloadAction<number[]>) {
            state.publishers = action.payload;
        },
        dispYear(state,action: PayloadAction<number[]>) {
            state.year = action.payload;
        },
        dispPrice(state,action: PayloadAction<number[]>) {
            state.price = action.payload
        },
        setPagination(state,action) {
            state.pages = action.payload
        },
        setSorting(state,action) {
            state.sorting = action.payload
        }

    }
});

export default filterSlice.reducer;
export const {setAuthorId,setPublisherId,dispYear,dispPrice,setPagination,setSorting} = filterSlice.actions;