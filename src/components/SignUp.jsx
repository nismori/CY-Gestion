import React from "react";
import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { NavbarDemo } from "./NavBar";
import { SignupFormDemo } from "./SignupForm";

export default function Signup() {
  return (
    <div>
      <main className="relative flex flex-col items-center justify-center px-5 mx-auto bg-black-100 sm:px-10 overflow-clip">
        <div className="relative h-screen">
          <ShootingStarsAndStarsBackgroundDemo />
          <NavbarDemo />
          <SignupFormDemo />
        </div>
      </main>
    </div>
  );
}
