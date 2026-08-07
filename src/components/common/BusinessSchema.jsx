import React from "react";

import business from "../../data/business";

function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    "@id": `${business.website}#business`,

    name: business.name,

    image: `${business.website}/images/logo.png`,

    logo: `${business.website}/images/logo.png`,

    url: business.website,

    telephone: business.phone,

    email: business.email,

    priceRange: "₹₹",

    description: business.description,

    address: {
      "@type": "PostalAddress",

      streetAddress: business.address,

      addressLocality: business.city,

      addressRegion: business.state,

      postalCode: business.pincode,

      addressCountry: "IN"
    },

    areaServed: {
      "@type": "City",
      name: business.city
    },

    openingHours: [
      "Mo-Su 06:00-21:00"
    ],

    aggregateRating: {
      "@type": "AggregateRating",

      ratingValue: business.rating,

      reviewCount: business.reviews
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",

      name: "Services",

      itemListElement: business.services.map((service) => ({
        "@type": "Offer",

        itemOffered: {
          "@type": "Service",

          name: service
        }
      }))
    },

    sameAs: [
      business.googleBusiness,
      business.facebook,
      business.instagram,
      business.youtube
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}

export default BusinessSchema;