import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Liga de Softbol Rafael Vargas",
  tagline: "Primera liga amateur de Softbol del Perú",
  description: "Primera liga amateur de Softbol del Perú.",
  description_short: "Primera liga amateur de Softbol del Perú",
  url: "https://lsrv.pe",
  author: "Nayllen Rojas",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Primera liga amateur de Softbol del Perú`,
  description: "Primera liga amateur de Softbol del Perú",
  image: ogImageSrc,
};
