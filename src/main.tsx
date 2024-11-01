import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TanstackProvider from './providers/Tanstack.tsx'

createRoot(document.getElementById('root')!).render(
 
 <TanstackProvider>
  <StrictMode>
      <App />
    </StrictMode>
 </TanstackProvider>
)
