import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Loged from './components/Loged';
import Profil from './components/Profil';



const router = createBrowserRouter([
  {path: "/", element: <App />,},
  {path: "/accueil", element: <App />,},
  {path: "/connexion", element: <LogIn />},
  {path: "/inscription", element: <SignUp />},
  {path: "/contact", element: <App />},
  {path: "/loged", element: <Loged />},
  {path: "/profil", element: <Profil />},
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);