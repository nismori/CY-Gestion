<<<<<<< HEAD
import React from 'react'
import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { NavbarLogedDemo } from "./NavBarLoged";

export default function Profil() {
  return (
    <div className="relative min-h-screen bg-black-100">
      <ShootingStarsAndStarsBackgroundDemo />
      <NavbarLogedDemo />
=======
import React, { useState } from "react";

function Profil() {
  const [email, setEmail] = useState("");  // Email de l'utilisateur
  const [userData, setUserData] = useState(null); // Données de l'utilisateur récupérées
  const [error, setError] = useState("");  // Message d'erreur

  const handleEmailChange = (e) => {
    setEmail(e.target.value);  // Met à jour l'email lorsqu'il change
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/get_user_by_email/?email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data); // Si l'API répond avec succès, on met à jour les données de l'utilisateur
        setError(""); // Réinitialise l'erreur
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Si une erreur survient, on l'affiche
        setUserData(null);
      }
    } catch (error) {
      setError("Cet utilisateur n'existe pas");
      setUserData(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Consultez un profil avec son adresse mail</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="email" className="text-gray-700 dark:text-white">Email :</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="flex-1 p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Récupérer
        </button>
      </form>

      {error && <p className="text-red-500 mt-4 text-center text-lg">{error}</p>}

      {userData && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Utilisateur trouvé :</h2>
          <div className="space-y-3">
            <p className="text-lg text-red-600"><strong className="text-gray-700 dark:text-white">Email : </strong> {userData.email}</p>
            <p className="text-lg text-red-600"><strong className="text-gray-700 dark:text-white">Pseudo :</strong> {userData.pseudo}</p>
            <p className="text-lg text-red-600"><strong className="text-gray-700 dark:text-white">Prénom :</strong> {userData.prenom}</p>
            <p className="text-lg text-red-600"><strong className="text-gray-700 dark:text-white">Nom :</strong> {userData.nom}</p>
            <p className="text-lg text-red-600"><strong className="text-gray-700 dark:text-white">Sexe :</strong> {userData.sexe}</p>
            <p className="text-lg text-red-600"><strong className="text-gray-700 dark:text-white">Date de naissance : </strong> {userData.date_de_naissance}</p>
            <p className="text-lg text-red-600"><strong className="text-gray-700 dark:text-white">Type de membre : </strong> {userData.type_de_membre}</p>
            <p className="text-lg text-red-600"><strong className="text-gray-700 dark:text-white">Mot de Passe :</strong> {userData.mot_de_passe}</p>
          </div>
        </div>
      )}
>>>>>>> e17d97bd78557bb041f50899c43fe134d8b7aebb
    </div>
  );
}

<<<<<<< HEAD
=======
export default Profil;
>>>>>>> e17d97bd78557bb041f50899c43fe134d8b7aebb
