import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="w-screen h-screen dark:bg-gray-900">
      <main className="relative flex flex-col items-center justify-center mx-auto overflow-clip">
        <div className="w-full mx-auto text-white max-w-7xl">
          <NavBar/>
        </div>
      </main>
    </div>
  );
};

export default App;