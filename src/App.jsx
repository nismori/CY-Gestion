import { ShootingStarsAndStarsBackgroundDemo } from "./components/background";
import { NavbarDemo } from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div>
      <main className="relative flex flex-col items-center justify-center px-5 mx-auto bg-black-100 sm:px-10 overflow-clip ">
        <div className="h-screen bg-neutral-900">
          <ShootingStarsAndStarsBackgroundDemo />
          <NavbarDemo />
        </div>
      </main>
    </div>
  );
}

export default App;
