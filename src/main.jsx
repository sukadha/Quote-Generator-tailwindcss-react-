import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // or whatever your CSS file is named
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
