import React from "react";
import { EasyPeasyTodos } from "./components/EasyPeasyTodos";
import { ZustandTodos } from "./components/ZustandTodos";

function App() {
  return (
    <div className="h-px min-h-screen text-white bg-gradient-to-b from-zinc-900 to-stone-900">
      <div className="container px-4 pt-40 mx-auto">
        <div className="flex justify-between h-full">
          <ZustandTodos />
          <EasyPeasyTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
