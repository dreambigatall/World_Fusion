import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Map from './components/Map.jsx'
import Container from './UI/Container.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App/>
  </StrictMode>,
)
