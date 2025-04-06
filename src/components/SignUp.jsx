import React from "react";
import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { NavbarDemo } from "./NavBar";
import { SignupFormDemo } from "./SignupForm";

export default function Signup() {
  return (
    <div className="relative min-h-screen bg-black-100">
      <ShootingStarsAndStarsBackgroundDemo showCyGestion={1} />
      <NavbarDemo />
      <div className="flex items-center justify-center min-h-screen">
        <SignupFormDemo />
      </div>
    </div>
  );
}
