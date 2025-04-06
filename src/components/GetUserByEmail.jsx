import React, { useState } from "react";

function GetUserByEmail() {
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
      setError("Cette utilisateur n'existe pas");
      setUserData(null);
    }
  };

  return (
    <div>
      <h1>Récupérer un utilisateur par email</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Récupérer</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div>
          <h2>Utilisateur trouvé :</h2>
          <p><strong>Prénom :</strong> {userData.prenom}</p>
          <p><strong>Nom :</strong> {userData.nom}</p>
          <p><strong>Email :</strong> {userData.email}</p>
          <p><strong>Pseudo :</strong> {userData.pseudo}</p>
        </div>
      )}
    </div>
  );
}

export default GetUserByEmail;
