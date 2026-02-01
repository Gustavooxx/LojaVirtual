import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
)
