import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';
import { cn } from '../../utils/cn'

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
    <div className={cn('fixed top-10 inset-x-0 max-w-5xl mx-auto z-50', className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Accueil">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/">Accueil</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Nous rejoindre">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="#">Connexion</HoveredLink>
            <HoveredLink to="#">Inscription</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div id="searchBar" className="flex flex-col space-y-4 text-sm">
            {/* Vous pouvez ajouter votre code de recherche ici */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Recherche">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}