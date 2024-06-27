// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Resultados", url: "/resultados" },
  { name: "Estadísticas", url: "/estadisticas" },
  { name: "Equipos", url: "/equipos" },
  { name: "Contacto", url: "/contacto" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "La Liga LSRV",
    links: [
      { name: "Resultados", url: "/resultados" },
      { name: "Estadísticas", url: "/estadisticas" },
      { name: "Equipos", url: "/equipos" },
    ],
  },
  {
    section: "Contacto",
    links: [
      { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61559654964803" },
      { name: "Youtube (proximamente)", url: "" },
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