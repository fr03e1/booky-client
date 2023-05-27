import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IFilterSliceState {
    categories: number[],
    authors: number[],
    sorting: string,
    pages: string,
    page: number
}

const initialState: IFilterSliceState = {
    categories: [],
    authors: [],
    sorting: 'title',
    pages: '8',
    page: 1
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number[]>) {
            state.categories.push(...action.payload);
        },
        setAuthorId(state, action: PayloadAction<number[]>) {
            state.authors = action.payload;
        },
        setSorting(state, action: PayloadAction<string>) {
            state.sorting = action.payload
        },
        setPages(state, action: PayloadAction<string>) {
            state.pages = action.payload
        },
        setPage(state,action) {
            state.page = action.payload
        }
    }
});

export default filterSlice.reducer;
export const {setAuthorId} = filterSlice.actions;