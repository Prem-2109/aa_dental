// src/components/Seo.jsx
import React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <Helmet>
      {/* Meta Title */}
      <title>AA Dental Clinic | Best Dental Care in Arakkonam</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Looking for top dental care in Arakkonam? AA Dental Clinic offers expert general, cosmetic, and pediatric dentistry. Book your appointment today!"
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="Dental Clinic Arakkonam, Dentist in Arakkonam, Cosmetic Dentistry, Pediatric Dentist, Teeth Whitening, Root Canal, Braces"
      />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Structured Data (JSON-LD for LocalBusiness) */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "AA Dental Clinic",
          "image": "https://aa-dental.netlify.app/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "#3, VSV Shopping Complex, TNHB Road",
            "addressLocality": "Arakkonam",
            "postalCode": "631001",
            "addressCountry": "IN"
          },
          "telephone": "+91 9087231303",
          "url": "https://aa-dental.netlify.app",
          "priceRange": "$$",
          "openingHours": "Mo,Tu,We,Th,Fr,Sa 10:00-20:00"
        }
        `}
      </script>
    </Helmet>
  );
};

export default Seo;
