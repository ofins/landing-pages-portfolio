import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage';
import HowWeWork from './components/HowWeWork/HowWeWork';
import Features from './components/Features/Features';
import OurWorks from './components/OurWorks/OurWorks';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div data-theme={theme} className="app-container">
      <NavbarComponent toggleTheme={toggleTheme} theme={theme} />
      <LandingPage toggleTheme={toggleTheme} theme={theme} />
      <HowWeWork />
      <Features toggleTheme={toggleTheme} theme={theme} />
      <OurWorks />
      <Testimonials toggleTheme={toggleTheme} theme={theme} />
      <ContactUs />
      <Footer toggleTheme={toggleTheme} theme={theme}/>
    </div>
  )
}

export default App
