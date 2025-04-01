import React from "react";
import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { NavbarDemo } from "./Navbar";
import { SignupFormDemo } from "./SignupForm";

function SignUp() {
  return (
    <div>
      <main className="relative flex flex-col items-center justify-center px-5 mx-auto bg-black-100 sm:px-10 overflow-clip ">
        <div className="h-screen overflow-y-auto bg-neutral-900">
          <ShootingStarsAndStarsBackgroundDemo />
          <NavbarDemo />
          <SignupFormDemo/>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
