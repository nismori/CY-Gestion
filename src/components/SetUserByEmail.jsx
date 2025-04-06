import React, { useState } from "react";

function SetUserByEmail() {
  
  const [email, setEmail] = useState("");  // Email de l'utilisateur
  const [prenom, setPrenom] = useState("");  // Nouveau prénom
  const [nom, setNom] = useState("");  // Nouveau nom
  const [pseudo, setPseudo] = useState("");  // Nouveau pseudo
  const [mot_de_passe, setMotDePasse] = useState("");  // Nouveau mot de passe
  const [message, setMessage] = useState("");  // Message de retour

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const formData = {
      email,
      prenom,
      nom,
      pseudo,
      mot_de_passe,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/update_user_by_email/", {
        method: "PUT",  // Utilisation de la méthode PUT pour la mise à jour
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),  // Envoi des données modifiées
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);  // Message de succès
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);  // Message d'erreur
      }
    } catch (error) {
      setMessage("Une erreur s'est produite lors de la mise à jour.");
    }
  };

  return (
    <div>
      <h1>Mettre à jour un utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="prenom">Prénom :</label>
        <input
          id="prenom"
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />

        <label htmlFor="nom">Nom :</label>
        <input
          id="nom"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <label htmlFor="pseudo">Pseudo :</label>
        <input
          id="pseudo"
          type="text"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />

        <label htmlFor="mot_de_passe">Mot de passe :</label>
        <input
          id="mot_de_passe"
          type="password"
          value={mot_de_passe}
          onChange={(e) => setMotDePasse(e.target.value)}
        />

        <button type="submit">Mettre à jour</button>
      </form>

      {message && <p>{message}</p>}  {/* Affichage du message de retour */}
    </div>
  );
}

export default SetUserByEmail;
