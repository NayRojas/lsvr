/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, s as renderComponent, p as maybeRenderHead } from './astro/server_CAp2qBl3.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from './MainLayout_hwE98KxZ.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_tZkKSPsX.mjs';
import { g as getCollection } from './_astro_content_Dx8GzMVl.mjs';

const $$Astro = createAstro("https://lsrv.pe");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  (await getCollection("products")).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Resultados";
  const subTitle = "Consulta los detalles a continuaci\xF3n para ver c\xF3mo ha rendido tu equipo favorito y mantente actualizado con los puntajes y estad\xEDsticas m\xE1s recientes.";
  const pageTitle = `Products | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/products",
    "url": "https://screwfast.uk/products",
    "name": "Hardware Tools | ScrewFast",
    "description": "Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "ScrewFast",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Ver Estad\xEDsticas", "url": "/estadisticas", "noArrow": true })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> <div class=""> <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right"> <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"> <tr> <th scope="col" class="px-6 py-3"> Equipos </th> <th scope="col" class="px-6 py-3 text-center"> PP/PG </th> <th scope="col" class="px-6 py-3 text-center"> Resultados </th> </tr> </thead> <tbody> <!-- Equipo 1  --> <tr class=" bg-white flex-col hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap  px-4 py-2 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/8.png" alt="Los Chamos"> <div class="ps-3"> <div class="text-base font-semibold">Los Chamos</div> </div> </th> <td class=" px-4 py-2  text-black text-center">PP <br>Ramiro Lopez</td> <td class=" px-4 py-2 text-black font-semibold text-center">7</td> </tr> <tr class="border-b-4 border-gray-300 border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap   px-4 py-2 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/9.png" alt="Rangers"> <div class="ps-3"> <div class="text-base font-semibold">Rangers</div> </div> </th> <td class=" px-4 py-2  text-black text-center">PG <br>Ramiro Lopez</td> <td class=" px-4 py-2 text-black font-semibold text-center">7</td> </tr> <!-- Equipo 2 --> <tr class=" bg-white flex-col hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap  px-4 py-2 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/8.png" alt="Los Chamos"> <div class="ps-3"> <div class="text-base font-semibold">Los Chamos</div> </div> </th> <td class=" px-4 py-2  text-black text-center">PP <br>Ramiro Lopez</td> <td class=" px-4 py-2 text-black font-semibold text-center">7</td> </tr> <tr class="border-b-4 border-gray-300 border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap  px-4 py-2 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/9.png" alt="Rangers"> <div class="ps-3"> <div class="text-base font-semibold">Rangers</div> </div> </th> <td class=" px-4 py-2  text-black text-center">PG <br>Ramiro Lopez</td> <td class=" px-4 py-2 text-black font-semibold text-center">7</td> </tr> <!-- Equipo 3  --> <tr class=" bg-white flex-col hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/8.png" alt="Los Chamos"> <div class="ps-3"> <div class="text-base font-semibold">Los Chamos</div> </div> </th> <td class=" px-4 py-2  text-black text-center">PP <br>Ramiro Lopez</td> <td class=" px-4 py-2 text-black font-semibold text-center">7</td> </tr> <tr class="border-b-4 border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap  px-4 py-2 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/9.png" alt="Rangers"> <div class="ps-3"> <div class="text-base font-semibold">Rangers</div> </div> </th> <td class=" px-4 py-2  text-black text-center">PG <br>Ramiro Lopez</td> <td class=" px-4 py-2 text-black font-semibold text-center">7</td> </tr> <!-- Equipo 4 --> <tr class=" bg-white flex-col hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap  px-4 py-2 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/8.png" alt="Los Chamos"> <div class="ps-3"> <div class="text-base font-semibold">Los Chamos</div> </div> </th> <td class=" px-4 py-2  text-black text-center">PP <br>Ramiro Lopez</td> <td class=" px-4 py-2 text-black font-semibold text-center">7</td> </tr> <tr class="border-b-4 border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap  px-4 py-2 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/9.png" alt="Rangers"> <div class="ps-3"> <div class="text-base font-semibold">Rangers</div> </div> </th> <td class=" px-4 py-2  text-black text-center">PG <br>Ramiro Lopez</td> <td class=" px-4 py-2 text-black font-semibold text-center">7</td> </tr> <!-- Equipo 5 --> <tr class=" bg-white flex-col hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap  px-4 py-2 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/8.png" alt="Los Chamos"> <div class="ps-3"> <div class="text-base font-semibold">Los Chamos</div> </div> </th> <td class=" px-4 py-2  text-black text-center">PG <br>Ramiro Lopez</td> <td class=" px-4 py-2 text-black font-semibold text-center">7</td> </tr> <tr class="border-b-4 border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap   px-4 py-2 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/9.png" alt="Rangers"> <div class="ps-3"> <div class="text-base font-semibold">Rangers</div> </div> </th> <td class=" px-4 py-2  text-black text-center">PP <br>Ramiro Lopez</td> <td class="px-4 py-2 text-black font-semibold text-center">7</td> </tr> </tbody> </table> </div> </div>     ` })}`;
}, "/Users/nrojasma/Documents/lsvr/src/pages/resultados/index.astro", void 0);

const $$file = "/Users/nrojasma/Documents/lsvr/src/pages/resultados/index.astro";
const $$url = "/resultados";

export { $$Index as default, $$file as file, $$url as url };
