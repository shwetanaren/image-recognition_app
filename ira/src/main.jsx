import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Rank from './Rank'
import ImageLinkForm from './ImageLinkForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Navbar />
   <Rank />
   <ImageLinkForm />
  </StrictMode>,
)
