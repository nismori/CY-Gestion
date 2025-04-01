import React from "react";
import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { NavbarDemo } from "./Navbar";
import { SignupFormDemo } from "./SignupForm";

export default function Signup() {
  return (
    <div className="relative">
      <ShootingStarsAndStarsBackgroundDemo />
        <NavbarDemo />
        <SignupFormDemo/>
    </div>
  );
}

