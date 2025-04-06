import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { NavbarLogedDemo } from "./NavBarLoged";
import { Hero } from "./Hero";

export default function Loged() {
 /* const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/connexion");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/user/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUserName(data.user_name);
        } else {
          console.error("Erreur lors de la récupération des données utilisateur");
          navigate("/connexion");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur :", error);
        navigate("/connexion");
      }
    };

    fetchUserData();
  }, [navigate]);
*/
  return (
    <div className="relative min-h-screen bg-black-100">
      <ShootingStarsAndStarsBackgroundDemo showCyGestion={1} />
      <NavbarLogedDemo />
      <Hero /*userName={userName}*/ />
    </div>
  );
}
