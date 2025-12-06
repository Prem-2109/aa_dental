import { Routes, Route } from "react-router-dom";

import Seo from "./components/Seo";
import Nav from "./components/Nav";
import DentalHero from "./components/DentalHero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import DentalExpertise from "./components/DentalExpertise";
import FaqSection from "./components/FaqSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Rct from "./components/Rct";
import About from "./components/About";
import Beforeafter from "./components/Beforeafter";
import DentalImplement from "./components/DentalImplement";
import DentalFilling from "./components/DentalFilling";
import DentalExtraction from "./components/DentalExtraction";
import AestheticDentistry from "./components/AestheticDentistry";
import Contactus from "./components/Contactus";
function App() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919087231303"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="whats-float">
          <i className="fa fa-whatsapp" />
        </div>
      </a>

      <Seo />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <DentalHero />
              <AboutUs />
              <WhyChooseUs />
              <DentalExpertise />
              <FaqSection />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/rct" element={<Rct />} />
        <Route path="/beforeafter" element={<Beforeafter />} />
        <Route path="/dentalimplement" element={<DentalImplement />} />
        <Route path="/dentalfilling" element={<DentalFilling />} />
        <Route path="/dentalextraction" element={<DentalExtraction />} />
        <Route path="/aestheticdentistry" element={<AestheticDentistry />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </>
  );
}

export default App;
