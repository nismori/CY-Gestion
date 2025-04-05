import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import du hook
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

export function SignupFormDemo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    mot_de_passe: "",
    sexe: "",
    date_naissance: "",
    pseudo: "",
    type_de_membre: "",
    photo: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        photo: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/inscription/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Réponse du serveur :", data);
        navigate("/connexion");
      } else {
        console.error("Erreur lors de l’inscription :", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de l’envoi :", error);
    }
  };
  return (
    <div className="relative w-full max-w-md p-4 mx-auto bg-white rounded-none shadow-input md:rounded-2xl translate-y-[30%] md:p-8 dark:bg-black">
      <h2 className="flex justify-center mx-auto text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Sign up
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="prenom">Prénom</Label>
            <Input id="prenom" type="text" placeholder="Tyler" value={formData.prenom} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="nom">Nom</Label>
            <Input id="nom" type="text" placeholder="Durden" value={formData.nom} onChange={handleChange} />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="pseudo">Pseudo</Label>
          <Input id="pseudo" type="text" placeholder="tyler123" value={formData.pseudo} onChange={handleChange} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Adresse e-mail</Label>
          <Input id="email" type="email" placeholder="adresse@mail.com" value={formData.email} onChange={handleChange} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="mot_de_passe">Mot de passe</Label>
          <Input id="mot_de_passe" type="password" placeholder="••••••••" value={formData.mot_de_passe} onChange={handleChange} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="sexe">Sexe</Label>
          <select
            id="sexe"
            value={formData.sexe}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md dark:bg-black dark:text-white dark:border-neutral-700"
          >
            <option value="">-- Sélectionner --</option>
            <option value="H">Homme</option>
            <option value="F">Femme</option>
          </select>
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="date_naissance">Date de naissance</Label>
          <Input id="date_naissance" type="date" value={formData.date_naissance} onChange={handleChange} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="type_de_membre">Type de membre</Label>
          <select
            id="type_de_membre"
            value={formData.type_de_membre}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md dark:bg-black dark:text-white dark:border-neutral-700"
          >
            <option value="">-- Choisir --</option>
            <option value="utilisateur">Utilisateur</option>
            <option value="auteur">Auteur</option>
            <option value="admin">Admin</option>
          </select>
        </LabelInputContainer>

          
        <LabelInputContainer className="mb-8">
          <Label htmlFor="photo">Photo de profil</Label>
          <Input id="photo" type="file" accept="image/*" onChange={handleFileChange} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <p className="max-w-sm mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Ou bien vous avez déjà un
            <span className="text-black hover:opacity-[0.9] dark:text-neutral-400 underline mx-1.5">
              <Link to={"/connexion"}>compte</Link>
            </span> ?
          </p>
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 block w-full h-px transition duration-500 opacity-0 -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent group-hover/btn:opacity-100" />
      <span className="absolute block w-1/2 h-px mx-auto transition duration-500 opacity-0 inset-x-10 -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
