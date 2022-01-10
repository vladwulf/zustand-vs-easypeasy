import create from "zustand";
import { Todo } from "../types";

interface ZustandStore {
  todos: Todo[];
  todosCount: () => number;
  addTodo: (todo: Todo) => void;
}

const initialState = {
  todos: [
    {
      id: 1,
      title: "Add zustand todo",
    },
  ] as Todo[],
};

export const useStore = create<ZustandStore>((set, get) => ({
  ...initialState,
  todosCount: () => {
    return get().todos.length;
  },
  addTodo: (todo: Todo) => {
    set((state) => {
      state.todos.push(todo);
    });
  },
}));
