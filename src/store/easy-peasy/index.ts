import { action, Action, computed, Computed, createStore } from "easy-peasy";
import { Todo } from "../types";

export interface EasyPeasyStore {
  todos: Todo[];
  todosCount: Computed<this, number>;
  addTodo: Action<this, Todo>;
}

const initialState = {
  todos: [
    {
      id: 1,
      title: "Add easy-peasy todo",
    },
  ] as Todo[],
};

export const store = createStore<EasyPeasyStore>({
  ...initialState,
  todosCount: computed((state) => {
    return state.todos.length;
  }),
  addTodo: action((state, todo) => {
    state.todos.push(todo);
  }),
});
