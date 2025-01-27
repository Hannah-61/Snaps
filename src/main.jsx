import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

window.apikey = "69b5842e-e715-49ab-8044-ab8a33230f89"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
    <App />
  </StrictMode>,
  </BrowserRouter>
)
