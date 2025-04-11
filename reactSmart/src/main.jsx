import { StrictMode } from 'react' //pakeri
import { createRoot } from 'react-dom/client' //paketi
import "./styles.css"

import App from './App.jsx' //default import 
// import { App } from "/App.jsx"; //default ne postoji i sluzi za helper fajlove

createRoot(document.getElementById('root')).render( //parametar
  <StrictMode>
    <App number={10} title="Title from the main file" vtext="Text from the main file" />
  </StrictMode>,
)
