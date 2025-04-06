import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import GetUserByEmail from './components/GetUserByEmail';
import SetUserByEmail from './components/SetUserByEmail';



const router = createBrowserRouter([
  {path: "/", element: <App />,},
  {path: "/accueil", element: <App />,},
  {path: "/connexion", element: <LogIn />},
  {path: "/inscription", element: <SignUp />},
  {path: "/contact", element: <App />},
  {path: "/profil", element: <GetUserByEmail/>},
  {path: "/setprofil", element: <SetUserByEmail/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);