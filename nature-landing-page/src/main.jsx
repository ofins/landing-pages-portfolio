import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Navbar/Navbar'
import AboutMe from './AboutMe/AboutMe'
import Theta from './Theta/Theta'
import ClassDocA from './ClassDocA/ClassDocA'
import ClassInfo from './ClassInfo/ClassInfo'
import Recommend from './Recommend/Recommend'
import Article from './Article/Article'
import Footer from './Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Navbar />
    <AboutMe />
    <Theta />
    <ClassDocA />
    <ClassInfo />
    <Recommend />
    <Article />
    <Footer />
  </div>
)
