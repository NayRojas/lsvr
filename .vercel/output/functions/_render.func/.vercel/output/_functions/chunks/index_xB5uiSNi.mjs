/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, q as addAttribute, s as renderComponent, u as renderSlot, v as unescapeHTML, F as Fragment } from './astro/server_CAp2qBl3.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from './MainLayout_hwE98KxZ.mjs';
import 'clsx';
import { $ as $$Image } from './_astro_assets_DWNcgk8B.mjs';

const $$Astro$a = createAstro("https://lsrv.pe");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    withReview,
    avatars,
    starCount,
    rating,
    reviews,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content --><!-- <section
  class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"
> --><!-- Title and description --><!-- <div> --><!-- Each h1 and p tag renders a portion of the title and subTitle defined above --><!-- <h1
      class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight"
    > --><!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --><!-- <Fragment set:html={title} />
    </h1>
    {subTitle &&
    <p
      class="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5"
    >
      {subTitle}
    </p>
  } --><!-- Action Button Section: This section includes two CTAs with their own styles and URL --><!-- <div class="mt-7 grid w-full gap-3 sm:inline-flex">
      {primaryBtn && 
      <PrimaryCTA title={primaryBtn} url={primaryBtnURL} />
      }
      {secondaryBtn && 
      <SecondaryCTA title={secondaryBtn} url={secondaryBtnURL} />
      }
    </div> --><!-- Review Section: This section presents avatars, review ratings and the number of reviews --><!-- { withReview ? (
    <ReviewComponent avatars={avatars} starCount={starCount} rating={rating} reviews={reviews} />
    ) : "" }

  </div> --><!-- Hero Image Section --><!-- <div class="flex w-full">
      <div class="top-12 overflow-hidden">
	{src && alt &&
	<Image
        src={src}
        alt={alt}
        class="h-full w-full scale-110 object-cover object-center"
        draggable={"false"}
        loading={"eager"}
        format={"avif"}
	 />
	}
    </div>
  </div>
</section> -->${maybeRenderHead()}<section> <div class="relative isolate px-5 pt-2 max-[768px]:bg-hero-icon-mobile  max-[768px]:bg-contain max-[768px]:bg-no-repeat  sm:bg-hero-icon-mobile sm:bg-contain sm:bg-no-repeat md:bg-hero-icon-mobile md:bg-contain md:bg-no-repeat  lg:bg-hero-icon lg:bg-cover lg:bg-center lg:px-8"> <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"> <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> </div> <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"> <div class="hidden sm:mb-8 sm:flex sm:justify-center"> <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:bg-yellow-500 hover:text-black hover:ring-gray-900/20 dark:text-neutral-400">
Ve nuestros partidos en vivo <a href="https://www.facebook.com/profile.php?id=61559654964803" target="blank" class="font-semibold text-blueppal hover:text-blueppal dark:text-white"><span class="t absolute inset-0" aria-hidden="true"></span>LSRV<span aria-hidden="true">&rarr;</span></a> </div> </div> <div class="text-center sm:text-margin"> <h1 class="text-4xl font-bold transition duration-500 ease-in-out hover:scale-105 tracking-tight text-gray-900 dark:text-white sm:text-7xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"> ${title} </h1> <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-neutral-300"> ${subTitle} </p> <div class="mt-10 flex flex-col items-center justify-center gap-x-6"> <a${addAttribute(primaryBtnURL, "href")} class="rounded-md bg-bluemain px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">${primaryBtn}</a> <a${addAttribute(secondaryBtnURL, "href")} class="mt-2 text-sm font-semibold leading-6 text-neutral-500 hover:text-bluemain">${secondaryBtn}</a> </div> </div> </div> <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"> <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> </div> </div> </section>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/sections/landing/HeroSection.astro", void 0);

const $$Astro$9 = createAstro("https://lsrv.pe");
const $$GithubBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$GithubBtn;
  const { title, url } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-3 rounded-full px-4 py-3 text-center text-sm font-medium text-neutral-200 ring-zinc-500 focus-visible:ring transition duration-300 outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-bluemain dark:focus:outline-none";
  const hoverClasses = "hover:shadow-2xl hover:shadow-yellow-500 hover:text-blueppal hover:bg-yellow-600";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "facebook" })} ${title} </a>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/ui/buttons/GithubBtn.astro", void 0);

const $$Astro$8 = createAstro("https://lsrv.pe");
const $$HeroSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle, url } = Astro2.props;
  const btnTitle = "Siguenos en Facebook";
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8"> <!-- Decorating SVG elements --> <div class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#0D2577" viewBox="0 0 24 24"> <path fill="#0D2577" stroke="#0D2577" stroke-linecap="round" stroke-linejoin="round" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#0D2577" stroke-linecap="round" stroke-linejoin="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"></path> <path stroke="#0D2577" stroke-linecap="round" stroke-linejoin="round" d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path> </svg> </div> <div class="absolute left-[85%] top-0 scale-75"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#eab308" viewBox="0 0 24 24"> <path stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path> <path fill="#eab308" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" d="M5 10.5V9M5 15v-1.5"></path> <path fill="#eab308" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19H9M15 19h-1.5"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#a3a3a3" viewBox="0 0 24 24"> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> </svg> </div> <!-- Hero Section Heading --> <div class="mx-auto mt-5 max-w-xl text-center"> <h2 class="block text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h2> </div> <!-- Hero Section Sub-heading --> <div class="mx-auto mt-5 max-w-3xl text-center"> ${subTitle && renderTemplate`<p class="text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Github Button --> ${url && renderTemplate`<div class="mt-8 flex justify-center gap-3"> ${renderComponent($$result, "GithubBtn", $$GithubBtn, { "url": url, "title": btnTitle })} </div>`} </section>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/sections/landing/HeroSectionAlt.astro", void 0);

const $$Astro$7 = createAstro("https://lsrv.pe");
const $$ClientsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ClientsSection;
  const { title, subTitle } = Astro2.props;
}, "/Users/nrojasma/Documents/lsvr/src/components/sections/landing/ClientsSection.astro", void 0);

const $$Astro$6 = createAstro("https://lsrv.pe");
const $$TabNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TabNav;
  const { aria, dataTab, id, heading, content, first } = Astro2.props;
  const BUTTON_CLASS = "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none  dark:hs-tab-active:bg-neutral-700/60 md:p-5";
  return renderTemplate`<!-- Tab button with dynamic class based on 'first' property, id, tab data, and aria-controls  -->${maybeRenderHead()}<button type="button"${addAttribute(`${first ? "active " : ""}${BUTTON_CLASS}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-hs-tab")}${addAttribute(aria, "aria-controls")} role="tab"> <!-- Slot for additional content --> <span class="flex"> ${renderSlot($$result, $$slots["default"])} <!-- Container for the heading and content of the tab --> <span class="ms-6 grow"> <!-- Heading of the tab, changes color when active --> <span class="block text-lg font-bold text-neutral-800 hs-tab-active:text-blueppal dark:text-neutral-200 dark:hs-tab-active:text-yellow-600">${heading}</span> <!-- Content of the tab, changes color when active --> <span class="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200">${content}</span> </span> </span> </button>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/ui/blocks/TabNav.astro", void 0);

const $$Astro$5 = createAstro("https://lsrv.pe");
const $$TabContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { id, aria, src, alt, first, second } = Astro2.props;
  const firstClass = first ? "" : "hidden";
  const secondClass = second ? "shadow-xl aspect-* bg-neutral-300 dark:bg-neutral-600 object-cover p-3 lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" : "shadow-xl aspect-* object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]";
  return renderTemplate`<!-- Container for tab content that controls visibility and accessibility -->${maybeRenderHead()}<div${addAttribute(id, "id")} role="tabpanel"${addAttribute(firstClass, "class")}${addAttribute(aria, "aria-labelledby")}> <!-- Astro Image component to display the image with dynamic classes based on the 'second' property --> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": secondClass, "draggable": "false", "format": "avif", "loading": "eager" })} </div>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/ui/blocks/TabContent.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://lsrv.pe");
const $$FeaturesNavs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FeaturesNavs;
  const { title, tabs } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", `<section class="mx-auto max-w-[80rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-6 2xl:max-w-full"> <div class="relative p-2 md:p-16"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <!-- Section's heading and tab navigation --> <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-1xl"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> `, ` </h2> <!-- Tab navigation - use the attribute 'first' in the first TabNav for the component to work --> <nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist"> `, ` </nav> </div> <!-- Contents for each tab - the 'first' attribute should be used in the first tab for that tab to be initially visible, 'second' changes the styles --> <div class="lg:col-span-6"> <div class="relative"> <div> `, ' </div> </div> </div> </div> <div class="absolute inset-0 grid h-full w-full grid-cols-12"> <!-- Decorative background and sizing --> <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div> </div> </div> </section> <!--Import the necessary Tabs plugin--> <!--https://preline.co/plugins/html/tabs.html--> <script src="/scripts/vendor/preline/tabs/index.js"><\/script>'])), maybeRenderHead(), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` }), tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabNav", $$TabNav, { "id": `tabs-with-card-item-${index + 1}`, "dataTab": `#tabs-with-card-${index + 1}`, "aria": `tabs-with-card-${index + 1}`, "heading": tab.heading, "content": tab.content, "first": tab.first }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": tab.svg })} ` })}`), tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabContent", $$TabContent, { "id": `tabs-with-card-${index + 1}`, "aria": `tabs-with-card-item-${index + 1}`, "src": tab.src, "alt": tab.alt, "first": tab.first, "second": tab.second })}`));
}, "/Users/nrojasma/Documents/lsvr/src/components/sections/features/FeaturesNavs.astro", void 0);

const $$Astro$3 = createAstro("https://lsrv.pe");
const $$TestimonialItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TestimonialItem;
  const { content, author, role, avatarSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote class="relative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "quotation" })} <div class="relative z-10"> <p class="text-xl italic text-neutral-800 dark:text-neutral-200"> ${content} </p> </div> <div class="mt-6"> <div class="flex items-center"> <div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": avatarSrc, "alt": "Avatar Description", "loading": "eager", "inferSize": true })} </div> <div class="ms-4 grow"> <div class="font-bold text-neutral-800 dark:text-neutral-200"> ${author} </div> <div class="text-xs text-neutral-500">${role}</div> </div> </div> </div> </blockquote>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/sections/testimonials/TestimonialItem.astro", void 0);

const $$Astro$2 = createAstro("https://lsrv.pe");
const $$StatsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StatsGrid;
  const { count, description, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="-m-0.5 flex flex-col p-4 sm:p-8"> <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl"> ${index === 1 || index === 2 ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowUp" })}` : null} ${count} </div> <p class="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base"> ${description} </p> </li>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/ui/blocks/StatsGrid.astro", void 0);

const $$Astro$1 = createAstro("https://lsrv.pe");
const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const {
    title,
    subTitle,
    testimonials,
    statistics
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Container for the testimonials --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16"> <div class="lg:col-span-5 lg:col-start-1"> <!-- Title and Subtitle --> <div class="mb-8"> <h2 class="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Generate a blockquote for each testimonial in the testimonials array by mapping over the array. --> ${testimonials && testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialItem", $$TestimonialItem, { "content": testimonial.content, "author": testimonial.author, "role": testimonial.role, "avatarSrc": testimonial.avatarSrc })}`)} </div> ${statistics && renderTemplate`<div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <ul class="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700"> <!-- Generate a list item for each stat in the statistics array by mapping over the array. --> ${statistics.map((stat, index) => renderTemplate`${renderComponent($$result, "StatsGrid", $$StatsGrid, { "count": stat.count, "description": stat.description, "index": index })}`)} </ul> </div> </div>`} </div> </section>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/sections/testimonials/TestimonialsSection.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.DRPoHq2O.avif","width":4067,"height":2576,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/hero-image.avif";
							}
							
							return target[name];
						}
					});

const coco = new Proxy({"src":"/_astro/coco.RTqJrrlE.avif","width":305,"height":292,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/coco.avif";
							}
							
							return target[name];
						}
					});

const categoriac = new Proxy({"src":"/_astro/categoriab.FsZB3YzJ.avif","width":4000,"height":6000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/home/categoriab.avif";
							}
							
							return target[name];
						}
					});

const product5 = new Proxy({"src":"/_astro/features-image.DLBKWj8b.avif","width":4560,"height":3648,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/features-image.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://lsrv.pe");
const $$FeaturesStatsAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesStatsAlt;
  const { title, subTitle, benefits } = Astro2.props;
  const ListItemMarker = `<svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="mt-0.5 h-6 w-6 text-bluemain dark:text-orange-300 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Grid --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <div class="lg:col-span-7"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-xl", "src": product5, "alt": "Mockup of floating boxes" })} </div> <div class="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <div class="space-y-2 md:space-y-4"> <h2 class="text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> ${benefits && renderTemplate`<ul class="space-y-2 sm:space-y-4"> ${benefits.map((item) => renderTemplate`<li class="flex space-x-3"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(ListItemMarker)}` })} <span class="text-pretty text-base font-medium text-neutral-600 dark:text-neutral-400"> ${item} </span> </li>`)} </ul>`} </div> </div> </div> </section>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/sections/features/FeaturesStatsAlt.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Liga de Softb\xF3l Rafael Vargas`, "subTitle": "1\xB0 Liga de Softb\xF3l amateur en Per\xFA", "primaryBtn": "Resultados", "primaryBtnURL": "/resultados", "secondaryBtn": "Ver partidos", "secondaryBtnURL": "/Partidos", "withReview": true, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `From Over <span class="font-bold">12.8k</span> Reviews`, "src": heroImage, "alt": "Stack of ScrewFast product boxes containing assorted hardware tools" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Nuestros patrocinadores", "subTitle": "Ellos confian en la potencia y pasi\xF3n del softbol de Venezuela" })} ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "La Liga", "subTitle": "Nuestra liga de softbol nace del amor por el deporte, la cultura venezolana y la familia. Cada juego celebra nuestras tradiciones y fortalece nuestros lazos, record\xE1ndonos que juntos somos m\xE1s fuertes. Aqu\xED, el softbol es vida, uni\xF3n y pasi\xF3n. \xA1Bienvenidos a nuestra familia, donde el amor por el softbol y nuestras ra\xEDces venezolanas brillan en cada jugada!.", "benefits": [
    "Pasi\xF3n - Vivir y jugar el softbol con entusiasmo y dedicaci\xF3n.",
    "Tradici\xF3n - Honrar y celebrar la rica herencia cultural venezolana.",
    "Deportividad - Promover el juego limpio y el respeto mutuo en la competencia."
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "\xBFSoftb\xF3l amateur?", "subTitle": "Desde el 2017 el softbol ha sido el deporte con mas acogida en la poblaci\xF3n venezolana en Per\xFA.", ";": true, "testimonials": [
    {
      content: "La Liga ha logrado integrar los componentes distintivos del venezolano: la pelota y la familia.",
      author: "Jes\xFAs 'El Coco' Sanchez",
      role: "Pitcher Coach - Equipo Cagua",
      avatarSrc: coco
    }
  ], "statistics": [
    {
      count: "200+",
      description: "Partidos jugados en 2024"
    },
    {
      count: "90%",
      description: "Asistencia de equipos"
    },
    {
      count: "30%",
      description: "Crecimiento de equipos este a\xF1o"
    },
    {
      count: "100%",
      description: "Ambiente para la familia"
    }
  ] })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `Categor\xEDas`, "tabs": [
    {
      heading: "Categor\xEDa B",
      content: "Para jugadores y equipos de nivel intermedio. Incluye a aquellos con experiencia y habilidades desarrolladas, pero que no alcanzan el nivel avanzado. Los partidos son competitivos y ofrecen un entorno desafiante. Las reglas son similares a las de la categor\xEDa m\xE1s alta, con algunas adaptaciones. Esta categor\xEDa es ideal para quienes buscan competencia intensa pero no profesional, fomentando tanto el crecimiento individual como el trabajo en equipo.",
      svg: "checkCircle",
      src: categoriac,
      alt: "Yellow and black heavy equipment on brown grass field",
      first: true
    },
    {
      heading: "Categor\xEDa C",
      content: "Dirigida a principiantes. Es perfecta para nuevos jugadores o aquellos con poca experiencia. El enfoque principal es el desarrollo de habilidades b\xE1sicas y la comprensi\xF3n de las reglas. Los partidos son relajados, ofreciendo un ambiente inclusivo para aprender y mejorar. Las reglas pueden estar modificadas para facilitar el aprendizaje. Esta categor\xEDa es ideal para quienes desean iniciarse en el softbol y progresar en un entorno de apoyo.",
      svg: "checkCircle",
      src: categoriac,
      alt: "A screenshot or graphic representation of the intuitive dashboard",
      second: true
    }
  ] })}  ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Listo para la pr\xF3xima jornada", "subTitle": "Siguenos y encuentra una comunidad que te sume y apoye.", "url": "https://www.facebook.com/profile.php?id=61559654964803" })} ` })}`;
}, "/Users/nrojasma/Documents/lsvr/src/pages/index.astro", void 0);

const $$file = "/Users/nrojasma/Documents/lsvr/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };