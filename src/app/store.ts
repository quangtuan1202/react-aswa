import { configureStore } from "@reduxjs/toolkit";
import counterReducer from 'pages/Counter/slice';
import todoReducer from 'pages/Todo/slice';

const devToolEnabled = process.env.NODE_ENV === 'production' ? false : true;

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    },
    devTools: devToolEnabled
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch