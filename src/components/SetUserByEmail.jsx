import React, { useState } from "react";


export default function SetUserByEmail () {
  const [email, setEmail] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mot_de_passe, setMotDePasse] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Nettoyer les données pour ne pas envoyer de champs vides
    const formData = {
      email,
      prenom,
      nom,
      pseudo,
      mot_de_passe,
    };

    const cleanedData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value.trim() !== "")
    );

    console.log("Formulaire envoyé :", cleanedData); // Debug

    try {
      const response = await fetch("http://127.0.0.1:8000/api/update_user_by_email/", {
        method: "POST", // plus stable en dev, change si besoin côté Django
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Réponse OK :", data);
        setMessage(data.message || "Mise à jour réussie !");
      } else {
        const errorData = await response.json();
        console.warn("Réponse erreur :", errorData);
        setMessage(errorData.message || "Erreur lors de la mise à jour.");
      }
    } catch (error) {
      console.error("Erreur réseau ou JSON :", error);
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

      {message && <p style={{ marginTop: "1rem", color: "blue" }}>{message}</p>}
    </div>
  );
}
