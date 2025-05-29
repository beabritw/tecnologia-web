import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NavegaProvider } from './contents/NavegaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavegaProvider>
      <App />
    </NavegaProvider>
  </StrictMode>,
)
