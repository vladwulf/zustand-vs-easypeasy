import { useState } from "react";
import { TodoCard } from "./TodoCard";

import easyPeasyLogo from "../assets/easy-peasy.logo.png";
import { useStoreActions, useStoreState } from "../store/easy-peasy/hooks";

export const EasyPeasyTodos = () => {
  const { todos, todosCount } = useStoreState((store) => store);
  const { addTodo } = useStoreActions((store) => store);

  const [input, setInput] = useState("");

  function handleOnZustandSubmit() {
    if (input) {
      const lastTodo = todos[todos.length - 1];
      addTodo({
        id: lastTodo ? lastTodo.id + 1 : 1,
        title: input,
      });
      setInput("");
    }
  }
  return (
    <div className="text-center">
      <img
        className="mx-auto"
        src={easyPeasyLogo}
        alt="easy-peasy"
        style={{ height: 200 }}
      />
      <h1>Easy Peasy Store ({todosCount})</h1>

      <div className="flex mt-10">
        <input
          className="px-2 py-1 text-white rounded-md bg-zinc-600"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 ml-4 font-bold text-white bg-green-500 rounded-md hover:bg-green-400"
          onClick={handleOnZustandSubmit}
        >
          Submit Easy Peasy Todo
        </button>
      </div>

      <div className="mt-10">
        {todos.map((todo) => {
          return <TodoCard key={todo.id} title={todo.title} />;
        })}
      </div>
    </div>
  );
};
