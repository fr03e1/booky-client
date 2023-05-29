import {combineReducers, configureStore} from "@reduxjs/toolkit";
import filterSlice from './slices/filterSlice'
import bookSlice from './slices/bookSlice'

const rootReducer = combineReducers({
    filterSlice,
    bookSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];