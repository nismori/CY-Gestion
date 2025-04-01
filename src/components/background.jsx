import React from "react";
import ShootingStars from "./ui/ShootingStars";
import StarsBackground from "./ui/StarsBackground";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="relative flex flex-col items-center w-screen h-[50vh] bg-neutral-900">
      <h2 className="relative z-10 flex flex-col items-center gap-2 mx-auto font-medium tracking-tight text-center text-transparent mt-[10vh] md:flex-row md:text-5xl md:leading-tight bg-clip-text bg-gradient-to-b from-neutral-800 via-white to-purple-900 md:gap-8">
        <span className="my-5">Cy gestion</span>
      </h2>
      <div className="text-2xl text-white ">
        description du site      
     </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
