// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Resultados", url: "/resultados" },
  { name: "Estadisticas", url: "/estadisticas" },
  { name: "Equipos", url: "/equipos" },
  { name: "Contacto", url: "/contacto" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "La Liga",
    links: [
      { name: "Resultados", url: "/welcome-to-docs/" },
      { name: "Estadisticas", url: "/products" },
      { name: "Partidos pasados", url: "/services" },
    ],
  },
  {
    section: "LSRV",
    links: [
      { name: "Nosotros", url: "#" },
      { name: "Convenios", url: "/blog" },
      { name: "Fundadores", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61559654964803&locale=es_LA",
  instagram: "https://www.facebook.com/profile.php?id=61559654964803&locale=es_LA",
  tiktok: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};