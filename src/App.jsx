import './App.css'
import Seo from './components/Seo'  
import DentalExpertise from './components/DentalExpertise'
import { Hero } from './components/Hero'
import DentalTrustSection from './components/DentalTrustSection'
import Footer from './components/Footer'
import Nav from './components/Nav'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import FaqSection from './components/FaqSection'

function App() {

  return (
    <>
      <Seo />
      <Nav />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <DentalTrustSection />
      <Testimonials />
      <DentalExpertise />
      <FaqSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App
