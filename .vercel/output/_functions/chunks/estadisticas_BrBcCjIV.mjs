/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, s as renderComponent } from './astro/server_CAp2qBl3.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from './MainLayout_hwE98KxZ.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_tZkKSPsX.mjs';

const $$Astro = createAstro("https://lsrv.pe");
const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { title, subTitle, btnExists, btnTitle, btnURL } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto mt-10 max-w-[85rem] px-4 py-6 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-screen-md"> <!-- Section title --> <h1 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h1> <!-- Section subtitle --> <p class="mb-8 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p> <!-- Conditional rendering of PrimaryCTA component if 'btnExists' property is truthy --> ${btnExists ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })} </div>` : null} </div> </section>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/ui/blocks/MainSection.astro", void 0);

new Proxy({"src":"/_astro/blueprints-image.DxAt2gto.avif","width":1333,"height":2000,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/blueprints-image.avif";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/person-working.aUGgRiE_.avif","width":1334,"height":2000,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/person-working.avif";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/before-after.BntBToq6.avif","width":2048,"height":1366,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/before-after.avif";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/construction-workers.XhU7Ouf4.avif","width":1920,"height":1280,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/construction-workers.avif";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/aerial-view.CeV30CXX.avif","width":1920,"height":1282,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/aerial-view.avif";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/using-tools.BrEE8t5H.avif","width":1920,"height":1280,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/using-tools.avif";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/progress-building.Cjca0suI.avif","width":1920,"height":2560,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/progress-building.avif";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/under-construction.DfISh1yq.avif","width":1920,"height":2876,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/under-construction.avif";
							}
							
							return target[name];
						}
					});

const $$Estadisticas = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Services | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/services",
    url: "https://screwfast.uk/services",
    name: "Expert Consultation Services | ScrewFast",
    description: "Uniting expertise with your vision, ScrewFast provides exceptional service and comprehensive solutions in the hardware and construction industry, from consultation to project completion.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk",
      name: "ScrewFast",
      description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    inLanguage: "en-US"
  } }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Estad\xEDsticas", "subTitle": "Aqu\xED podr\xE1s encontrar informaci\xF3n detallada sobre el rendimiento de cada equipo, incluyendo juegos jugados (JJ), juegos ganados (JG), juegos empatados (JE), juegos perdidos (JP), carreras a favor (CA), carreras en contra (CR), diferencia de carreras (DC), y puntos (PTS). Estas estad\xEDsticas se actualizan regularmente para reflejar el desempe\xF1o m\xE1s reciente de los equipos.", "btnExists": false, "btnURL": "#" })}     ${maybeRenderHead()}<div class="relative mx-auto mb-16 max-w-[85rem] overflow-x-auto px-4 py-4 shadow-md sm:rounded-lg sm:px-6 sm:py-8 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="flex-column flex flex-wrap items-center justify-between space-y-4 bg-white pb-4 dark:bg-gray-900 md:flex-row md:space-y-0"> <label for="table-search" class="sr-only">Search</label> <div class="relative"> <div class="rtl:inset-r-0 pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> </div> <input type="text" id="table-search-users" class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Search for users"> </div> </div> <div class=""> <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right"> <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"> <tr> <!-- <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th> --> <th scope="col" class="px-6 py-3"> Equipo </th> <th scope="col" class="px-6 py-3"> <div class="flex items-center">
Categoría
<a href="#"><svg class="ms-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"></path> </svg></a> </div> </th> <th scope="col" class="px-6 py-3"> JJ </th> <th scope="col" class="px-6 py-3"> JG </th> <th scope="col" class="px-6 py-3"> JE </th> <th scope="col" class="px-6 py-3"> JP </th> <th scope="col" class="px-6 py-3"> CA </th> <th scope="col" class="px-6 py-3"> CR </th> <th scope="col" class="px-6 py-3"> DC </th> <th scope="col" class="px-6 py-3"> PTS </th> </tr> </thead> <tbody> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <!-- <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td> --> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/8.png" alt="Los Chamos"> <div class="ps-3"> <div class="text-base font-semibold">Los Chamos</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> <!-- 
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td> --> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <!-- <td class="w-4 p-4">
                  <div class="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
              </td> --> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/9.png" alt="Bravos"> <div class="ps-3"> <div class="text-base font-semibold">Bravos</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> <!-- 
              <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
              </td> --> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/1.png" alt="Cagua"> <div class="ps-3"> <div class="text-base font-semibold">Cagua</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/2.png" alt="Cagua"> <div class="ps-3"> <div class="text-base font-semibold">The Alliens</div> </div> </th> <td class="px-6 py-4"> B </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/3.png" alt="Cagua"> <div class="ps-3"> <div class="text-base font-semibold">Vikingos</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/4.png" alt="Boston"> <div class="ps-3"> <div class="text-base font-semibold">Boston</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/5.png" alt="Team Borrachos"> <div class="ps-3"> <div class="text-base font-semibold">Team Borrachos</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/6.png" alt="Rosario"> <div class="ps-3"> <div class="text-base font-semibold">Rosario</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> </tbody> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/10.png" alt="Royals"> <div class="ps-3"> <div class="text-base font-semibold">Royals</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/11.png" alt="Chicago"> <div class="ps-3"> <div class="text-base font-semibold">Chicago</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/12.png" alt="Vensport"> <div class="ps-3"> <div class="text-base font-semibold">Vensport</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/13.svg" alt="Cagua"> <div class="ps-3"> <div class="text-base font-semibold">Maitana</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/14.svg" alt="Soy Venezuela"> <div class="ps-3"> <div class="text-base font-semibold">Soy Venezuela</div> </div> </th> <td class="px-6 py-4"> B </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/15.svg" alt="The Rockies"> <div class="ps-3"> <div class="text-base font-semibold">The Rockies</div> </div> </th> <td class="px-6 py-4"> B </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/16.svg" alt="Pittsburg"> <div class="ps-3"> <div class="text-base font-semibold">Pittsburg</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/17.svg" alt="Guerreros"> <div class="ps-3"> <div class="text-base font-semibold">Guerreros</div> </div> </th> <td class="px-6 py-4"> B </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/18.svg" alt="Rays"> <div class="ps-3"> <div class="text-base font-semibold">Rays</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/18.svg" alt="La Maquina"> <div class="ps-3"> <div class="text-base font-semibold">La Maquina</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"> <th scope="row" class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"> <img class="h-10 w-10 rounded-full" src="/src/images/insights/18.svg" alt="Guaros"> <div class="ps-3"> <div class="text-base font-semibold">Guaros</div> </div> </th> <td class="px-6 py-4"> C </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 3 </td> <td class="px-6 py-4"> 0 </td> <td class="px-6 py-4"> 37 </td> <td class="px-6 py-4"> 10 </td> <td class="px-6 py-4"> 18 </td> <td class="px-6 py-4"> -4 </td> <td class="px-6 py-4"> 9 </td> </tr> </table> </div> </div> ` })}`;
}, "/Users/nrojasma/Documents/lsvr/src/pages/estadisticas.astro", void 0);

const $$file = "/Users/nrojasma/Documents/lsvr/src/pages/estadisticas.astro";
const $$url = "/estadisticas";

export { $$Estadisticas as default, $$file as file, $$url as url };
