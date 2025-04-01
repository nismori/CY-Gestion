import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import { PlaceholdersAndVanishInputDemo } from "./SearchBar";


export function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-center w-full">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed inset-x-0 max-w-5xl mt-5 mx-auto z-50 items-center justify-between", className)}
    >
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Accueil">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/accueil">Accueil</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Nous rejoindre">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/connexion">Connexion</HoveredLink>
            <HoveredLink to="/inscription">Inscription</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
        <div className="flex justify-center flex-1 ml-4">
          <PlaceholdersAndVanishInputDemo/>
        </div>

      </Menu>
    </div>
  );
} 
