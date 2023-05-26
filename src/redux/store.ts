import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {bookApi} from "../services/bookService";
import bookSlice from "./slices/bookSlice";

const rootReducer = combineReducers({
    bookSlice,
    [bookApi.reducerPath]: bookApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(bookApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];