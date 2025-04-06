import React from "react";
import { Link } from "react-router-dom";

export function Hero({ userName }) {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-5 py-10 text-center">
      <div className="relative z-10 space-y-5">
        <h1 className="text-4xl font-bold text-white sm:text-5xl " >Bienvenue{userName && `, ${userName}`} !</h1>
        <p className="text-lg text-white sm:text-xl">Vous êtes connecté à votre compte. Profitez de toutes les fonctionnalités de la plateforme !</p>
        <Link
          to="/profil"
          className="inline-block px-6 py-3 mt-4 text-lg font-semibold text-white bg-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Accédez à votre Profil
        </Link>
        </div>
    </div>
  );
}
