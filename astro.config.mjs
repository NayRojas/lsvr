import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://lsrv.pe",
  image: {
    domains: ["images.unsplash.com"],
  },
  devToolbar: {
    enabled: true
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "es", // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
        locales: {
          es: "es", // The `defaultLocale` value must present in `locales` keys
        },
      },
    }),
    starlight({
      title: "Liga de Softbol RafaelVargas",
      defaultLocale: "root",
      locales: {
        root: {
          label: "Spanish",
          lang: "es",
        },
        de: { label: "English", lang: "en" },
        "zh-cn": { label: "简体中文", lang: "zh-CN" },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Estadísticas",
          autogenerate: { directory: "estadisticas" },
        },
        {
          label: "Resultados",
          autogenerate: { directory: "resultados" },
        },
        {
          label: "Partidos",
          autogenerate: { directory: "partidos" },
        },
      ],
      social: {
        facebook: "https://www.facebook.com/profile.php?id=61559654964803",
      },
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://lsrv.pe" + "/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "facebook:image",
            content: "https://screwfast.uk" + "/social.webp",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
});
