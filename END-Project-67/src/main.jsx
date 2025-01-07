import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'

import Navbar from './Component/Navbar/Nav'
import Cardcontainer from './Component/CardProduct/Card'

//navbar
createRoot(document.getElementById('nav-ber')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>
)
//main content
createRoot(document.querySelector('.main')).render(
  <StrictMode>
    <Cardcontainer/>
  </StrictMode>
)


