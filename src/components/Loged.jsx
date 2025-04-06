import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { NavbarLogedDemo } from "./NavBarLoged";

export default function Loged() {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("accessToken");
  
      if (!token) {
        navigate("/login"); // Redirige vers la page de login si pas de token
      }
    }, [navigate]);
  return (
    <div className="relative min-h-screen bg-black-100">
      <ShootingStarsAndStarsBackgroundDemo />
      <NavbarLogedDemo />
    </div>
  );
}
