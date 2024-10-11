import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import FirstApp from './FirstApp.jsx'
import { PruebaAxiosAysinc } from './componentes/PruebaAxiosAsync.tsx'
import { CrearSolicitud } from './solicitudes/CrearSolicitud.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CrearSolicitud/>
  </StrictMode>
)
