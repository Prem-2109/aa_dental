import './App.css'
import DentalExpertise from './components/DentalExpertise'
// import DentalHeader from './components/DentalHeader'
// import DentalHero from './components/DentalHero'
import { Hero } from './components/Hero'
import DentalTrustSection from './components/DentalTrustSection'
import Footer from './components/Footer'
import Nav from './components/Nav'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <Nav />
      {/* <DentalHeader /> */}
      <Hero />
      {/* <DentalHero /> */}
      <AboutUs />
      <DentalTrustSection />
      <WhyChooseUs />
      <Testimonials />
      <DentalExpertise />
      <Contact />
      <Footer />
    </>
  )
}

export default App
