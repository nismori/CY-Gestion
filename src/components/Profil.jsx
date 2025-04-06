import React from 'react'
import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { NavbarLogedDemo } from "./NavBarLoged";

export default function Profil() {
  return (
    <div className="relative min-h-screen bg-black-100">
      <ShootingStarsAndStarsBackgroundDemo />
      <NavbarLogedDemo />
    </div>
  );
}

