import { createSlice } from "@reduxjs/toolkit";
import { TodoType } from "types/todo.type";
import { fetchTodoList } from "./thunks";

export interface TodoState {
    data: Array<TodoType>;
    status: 'idle' | 'loading' | 'success' | 'error';
}

const initialState: TodoState = {
    data: [],
    status: 'idle'
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodoList.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchTodoList.fulfilled, (state, action) => {
            state.status = 'success'
            state.data = action.payload
        })
        builder.addCase(fetchTodoList.rejected, (state) => {
            state.status = 'error'
        })
    }
})

// export const { } = todoSlice.actions

export default todoSlice.reducer