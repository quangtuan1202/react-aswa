import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import TodoList from "components/TodoList";
import { useEffect } from "react";
import { fetchTodoList } from "./thunks";

const Todo: React.FC = () => {
  const todo = useAppSelector((state: RootState) => state.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <>
      <h1>Todo {todo.status}</h1>
      <TodoList data={todo.data} />
    </>
  );
};

export default Todo;
