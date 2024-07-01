/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, q as addAttribute, s as renderComponent } from './astro/server_CAp2qBl3.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout, S as SITE } from './MainLayout_AfSUoPkv.mjs';
import { $ as $$Image } from './_astro_assets_DWNcgk8B.mjs';
import { g as getCollection } from './_astro_content_DXTNp4vt.mjs';

const $$Astro = createAstro("https://lsrv.pe");
const $$CardInsight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardInsight;
  const { insightEntry } = Astro2.props;
  return renderTemplate`<!-- The anchor tag is the root container for the "Insight" card. It links to the insight detail page. -->${maybeRenderHead()}<a class="group outline-none rounded-xl ring-zinc-500 transition duration-300 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"${addAttribute(`/insights/${insightEntry.slug}/`, "href")}> <!-- This is the container for the insight's cover image. --> <div class="relative overflow-hidden rounded-xl pt-[60%] sm:pt-[60%]"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105 ", "src": insightEntry.data.cardImage, "alt": insightEntry.data.cardImageAlt, "draggable": "false", "format": "avif" })} </div> <!-- This is the container for the insight's title and description. --> <div class="mt-7"> <!-- The title of the insight --> <h3 class="text-xl font-bold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400"> ${insightEntry.data.title} </h3> <!-- The description of the insight --> <p class="mt-3 text-neutral-600 dark:text-neutral-400"> ${insightEntry.data.description} </p> <!-- The "Read More" hyperlink going to the full insight. With an arrow icon --> <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-orange-400 decoration-2 group-hover:underline dark:text-orange-300">
Ver más
${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRightStatic" })} </p> </div> </a>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/ui/cards/CardInsight.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const englishBlogEntries = await getCollection("blog", ({ id }) => {
    return id.startsWith("en/");
  });
  const blogPosts = englishBlogEntries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const insightPosts = await getCollection("insights");
  blogPosts[0];
  blogPosts.slice(1);
  const title = "Equipos de la liga";
  const subTitle = "Conoce mas de cada equipo, sus integrantes e identidad.";
  const pageTitle = `Blog | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/blog",
    url: "https://screwfast.uk/blog",
    name: "Blog | ScrewFast",
    description: "Stay up-to-date with the latest trends and developments in the construction industry with insights from ScrewFast's team of industry experts.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk",
      name: "ScrewFast",
      description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    inLanguage: "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> <!--Page header--> <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h1> <p class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section>       <section class="mx-auto max-w-[85rem] px-6 py-10 sm:px-6 lg:px-8 lg:py-28 2xl:max-w-full"> <!-- <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
      <h2
        class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"
      >
        {secondTitle}
      </h2>
      <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
        {secondSubTitle}
      </p>
    </div> --> <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"> ${insightPosts.map((insightEntry) => renderTemplate`${renderComponent($$result2, "CardInsight", $$CardInsight, { "insightEntry": insightEntry })}`)} </div> </section> ` })}`;
}, "/Users/nrojasma/Documents/lsvr/src/pages/equipos/index.astro", void 0);

const $$file = "/Users/nrojasma/Documents/lsvr/src/pages/equipos/index.astro";
const $$url = "/equipos";

export { $$Index as default, $$file as file, $$url as url };
