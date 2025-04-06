import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { NavbarLogedDemo } from "./NavBarLoged";

export default function Loged() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/connexion");
      return;
    }

    // Vérifie que le token est valide en appelant la vue protégée
    const verifyToken = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/loged/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          console.log("Accès autorisé :", data.message);
        } else {
          console.error("Token invalide, redirection...");
          navigate("/connexion");
        }
      } catch (error) {
        console.error("Erreur lors de la vérification du token :", error);
        navigate("/connexion");
      }
    };

    verifyToken();
  }, [navigate]);

  return (
    <div className="relative min-h-screen bg-black-100">
      <ShootingStarsAndStarsBackgroundDemo />
      <NavbarLogedDemo />
    </div>
  );
}
