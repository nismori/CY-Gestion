import React from 'react'
import { ShootingStarsAndStarsBackgroundDemo } from "./background"
import {NavbarDemo} from "./NavBar"
import { LoginFormDemo } from './LoginForm'


function LogIn() {
  return (
    <div>
      <main className="relative flex flex-col items-center justify-center px-5 mx-auto bg-black-100 sm:px-10 overflow-clip">
        <div className="h-screen ">
          <ShootingStarsAndStarsBackgroundDemo showCyGestion={1}/>
          <NavbarDemo/>
          <LoginFormDemo/>
        </div>
      </main>
    </div>
  )
}

export default LogIn
