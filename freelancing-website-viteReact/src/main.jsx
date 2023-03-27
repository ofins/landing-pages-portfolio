import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './component/Navbar'
import Calltoaction from './component/Calltoaction'
import Frame1 from './component/Frame1'
import Frame2 from './component/Frame2'
import Frame3 from './component/Frame3'
import Frame4 from './component/Frame4'
import Frame5 from './component/Frame5'
import Frame6 from './component/Frame6'
import Footer from './component/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Navbar />
      <Calltoaction />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Footer />
    </>
    
)
