import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
//import FirstApp from './FirstApp.jsx'
import { SolicitudPermiso } from './permisos/SolicitudPermiso.tsx'
// Asegúrate de que el ID coincide con el elemento en index.html
// Asegúrate de que el ID coincide con el elemento en index.html

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SolicitudPermiso/>
  </StrictMode>
)
