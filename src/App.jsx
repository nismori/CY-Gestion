import { ShootingStarsAndStarsBackgroundDemo } from "./components/background";
import Hero from "./components/Hero";
import { NavbarDemo } from "./components/NavBar";
import React from "react";
import { description } from "./data/Bg";

function App() {
  return (
    <div>
      <main className="relative flex flex-col items-center justify-center px-5 mx-auto bg-black-100 overflow-clip ">
        <div className="h-screen bg-neutral-900">
          <ShootingStarsAndStarsBackgroundDemo description={description}/>
          <NavbarDemo />
          <Hero/>
        </div>
      </main>
    </div>
  );
}

export default App;
