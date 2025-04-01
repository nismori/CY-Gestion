import React from "react";
import ShootingStars from "./ui/ShootingStars";
import StarsBackground from "./ui/StarsBackground";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-neutral-900 -z-10">
      <h2 className="py-1 absolute z-10 left-1/2 -translate-x-1/2 flex items-center gap-2 mx-auto font-medium tracking-tight text-center text-transparent mt-[20vh] md:text-5xl md:leading-tight bg-clip-text bg-gradient-to-b from-neutral-800 via-white to-purple-900 md:gap-8">
        Cy gestion
      </h2>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
