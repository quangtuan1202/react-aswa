import { createAsyncThunk } from "@reduxjs/toolkit";
import TodoService from "services/todo.service";

export const fetchTodoList = createAsyncThunk('todo/fetchTodoList', async (a, b) => {
    const response = await TodoService.fetchTodos();
    return response.data
});