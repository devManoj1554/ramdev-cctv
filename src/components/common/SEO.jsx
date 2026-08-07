import React from "react";
import { Helmet } from "react-helmet-async";

import business from "../../data/business";
import seoData from "../../utils/seo";

function SEO({
  title = seoData.title,
  description = seoData.description,
  keywords = seoData.keywords,
  image = "/images/og-image.jpg",
  url = seoData.url,
  type = "website",
  noIndex = false
}) {
  const fullTitle = title.includes(business.name)
    ? title
    : `${title} | ${business.name}`;

  return (
    <Helmet>

      {/* Basic */}

      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords.join(", ")}
      />

      <meta
        name="author"
        content={business.name}
      />

      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />

      <meta
        name="theme-color"
        content="#2563eb"
      />

      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph */}

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:site_name"
        content={business.name}
      />

      <meta
        property="og:locale"
        content="en_IN"
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

    </Helmet>
  );
}

export default SEO;