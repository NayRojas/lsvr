import { m as createAstro, n as createComponent, o as renderTemplate, v as unescapeHTML, q as addAttribute, s as renderComponent, F as Fragment, p as maybeRenderHead, t as renderScript, u as renderSlot, w as renderHead } from './astro/server_CAp2qBl3.mjs';
import 'kleur/colors';
import { a as getImage } from './_astro_assets_DWNcgk8B.mjs';
import { i as icon } from './icon_TjZPgGbc.mjs';
import 'clsx';
/* empty css                            */

const ogImageSrc = new Proxy({"src":"/_astro/social.CWnIx2-K.png","width":1200,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/social.png";
							}
							
							return target[name];
						}
					});

const SITE = {
  title: "Liga de Softbol Rafael Vargas",
  tagline: "Primera liga amateur de Softbol del Perú",
  description: "Primera liga amateur de Softbol del Perú.",
  description_short: "Primera liga amateur de Softbol del Perú",
  url: "https://lsrv.pe",
  author: "Nayllen Rojas"
};
const SEO = {
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
      description: SITE.description
    }
  }
};
const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Primera liga amateur de Softbol del Perú`,
  description: "Primera liga amateur de Softbol del Perú",
  image: ogImageSrc
};

const faviconSrc = new Proxy({"src":"/_astro/icon2.BJD5tiNw.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nrojasma/Documents/lsvr/src/images/icon2.png";
							}
							
							return target[name];
						}
					});

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$7 = createAstro("https://lsrv.pe");
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Meta;
  const defaultProps = {
    meta: SITE.description,
    structuredData: SEO.structuredData
  };
  const {
    meta = defaultProps.meta,
    structuredData = defaultProps.structuredData
  } = Astro2.props;
  const URL = `${Astro2.site}`;
  const author = SITE.author;
  const canonical = Astro2.url.href;
  Astro2.url.pathname;
  const ogTitle = OG.title;
  const ogDescription = OG.description;
  const socialImageRes = await getImage({
    src: OG.image,
    width: 1200,
    height: 600
  });
  const socialImage = Astro2.url.origin + socialImageRes.src;
  const languages = {
    en: "",
    fr: "fr"
  };
  function createHref(lang, prefix, path) {
    const hasPrefix = path.startsWith(`/${prefix}/`);
    const basePath2 = hasPrefix ? path : `/${prefix}${path}`;
    const normalizedBasePath = basePath2.replace(/\/\/+/g, "/");
    return `${URL.slice(0, -1)}${normalizedBasePath}`;
  }
  const fullPath = Astro2.url.pathname;
  const alternateLanguageLinks = Object.entries(languages).map(([lang, prefix]) => {
    const basePath2 = lang === "en" ? fullPath.replace(/^\/fr\//, "/") : fullPath;
    const href = createHref(lang, prefix, basePath2);
    return `<link rel="alternate" hreflang="${lang}" href="${href}" />`;
  }).join("\n");
  const faviconSvg = await getImage({
    src: icon,
    format: "svg"
  });
  const appleTouchIcon = await getImage({
    src: faviconSrc,
    width: 180,
    height: 180,
    format: "png"
  });
  return renderTemplate`<!-- Inject structured data into the page if provided. This data is formatted as JSON-LD, a method recommended by Google for structured data pass:
     https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data -->${structuredData && renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))}<!-- Define the character set, description, author, and viewport settings --><meta charset="utf-8"><meta${addAttribute(meta, "content")} name="description"><meta name="web_author"${addAttribute(author, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="canonical"${addAttribute(canonical, "href")}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(alternateLanguageLinks)}` })}<!-- Facebook Meta Tags --><meta property="og:locale" content="en_US"><meta property="og:url"${addAttribute(URL, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:description"${addAttribute(ogDescription, "content")}><meta property="og:image"${addAttribute(socialImage, "content")}><meta content="1200" property="og:image:width"><meta content="600" property="og:image:height"><meta content="image/png" property="og:image:type"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(URL, "content")}><meta property="twitter:url"${addAttribute(URL, "content")}><meta name="twitter:title"${addAttribute(ogTitle, "content")}><meta name="twitter:description"${addAttribute(ogDescription, "content")}><meta name="twitter:image"${addAttribute(socialImage, "content")}><!-- Links to the webmanifest and sitemap --><link rel="manifest" href="/manifest.json"><!-- https://docs.astro.build/en/guides/integrations-guide/sitemap/ --><link rel="sitemap" href="/sitemap-index.xml"><!-- Links for favicons --><link href="/favicon.ico" rel="icon" sizes="any" type="image/x-icon"><link${addAttribute(faviconSvg.src, "href")} rel="icon" type="image/svg+xml" sizes="any"><meta name="mobile-web-app-capable" content="yes"><link${addAttribute(appleTouchIcon.src, "href")} rel="apple-touch-icon"><link${addAttribute(appleTouchIcon.src, "href")} rel="shortcut icon"><!-- Set theme color --><meta name="theme-color" content="#facc15">`;
}, "/Users/nrojasma/Documents/lsvr/src/components/Meta.astro", void 0);

const $$Astro$6 = createAstro("https://lsrv.pe");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { url, name } = Astro2.props;
  return renderTemplate`<!--
Re-usable link component for navigation bar. Highlights the active link
by comparing the current URL with the href of each link.
We assign an ID matching the URL for easy reference in our script.
If URL is '/' (home page), assign ID as 'home' 
-->${maybeRenderHead()}<a${addAttribute(url === "/" ? "home" : url.replace("/", ""), "id")}${addAttribute(url, "href")} data-astro-prefetch class="rounded-lg text-base font-medium text-neutral-400 outline-none ring-zinc-500 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-500 dark:focus:outline-none md:py-3 md:text-sm 2xl:text-base"> ${name} </a> ${renderScript($$result, "/Users/nrojasma/Documents/lsvr/src/components/ui/links/NavLink.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nrojasma/Documents/lsvr/src/components/ui/links/NavLink.astro", void 0);

const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Resultados", url: "/resultados" },
  { name: "Estadísticas", url: "/estadisticas" },
  { name: "Equipos", url: "/equipos" },
  { name: "Contacto", url: "/contacto" }
];
const footerLinks = [
  {
    section: "La Liga LSRV",
    links: [
      { name: "Resultados", url: "/resultados" },
      { name: "Estadísticas", url: "/estadisticas" },
      { name: "Equipos", url: "/equipos" }
    ]
  },
  {
    section: "Contacto",
    links: [
      { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61559654964803" },
      { name: "Youtube (proximamente)", url: "" }
    ]
  }
];
const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61559654964803&locale=es_LA",
  instagram: "https://www.facebook.com/profile.php?id=61559654964803&locale=es_LA",
  tiktok: "https://slack.com/"
};
const enStrings = {
  navBarLinks,
  footerLinks,
  socialLinks
};

const $$BrandLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="45.328" height="35.600" viewBox="0 0 3005 1879" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="2885.38" height="2112" rx="100" fill="white" class="rounded"></rect> <path d="M2745 1944.7C2745 1984.4 2701.22 1997.5 2672.18 1997.5H433.979C405.934 1997.5 473.049 1960.17 500.052 1952.96C505.133 1951.61 509.607 1948.71 512.788 1944.7L1059.22 1256.7C1073.98 1238.11 1100.29 1231.68 1122.65 1241.2L2375.39 1774.4L1668.77 1361.3L1193.85 1024.57C1182.83 1016.75 1175.46 1005.14 1173.33 992.221L1140.84 795.003C1136.2 766.784 1157.31 740.602 1187.17 737.551L2280.36 625.845L1431.65 655.187C1427.11 655.344 1422.57 654.941 1418.14 653.989L1291.11 626.669C1288.56 626.12 1285.97 625.753 1283.36 625.572L1063.02 610.221C1038.48 608.511 1018.46 590.835 1014.86 567.681L1009.79 535.132C1009.42 532.776 1008.88 530.448 1008.16 528.166L984.608 453.071C972.076 413.113 916.647 404.44 891.313 438.473L805.577 553.652C781.946 585.398 730.924 580.455 714.509 544.83L666.701 441.072C657.33 420.735 663.185 396.958 681.075 382.692L994.581 132.687C1004.05 125.138 1016.01 121 1028.36 121L2693.47 113C2722.51 113 2745 127.886 2745 155.5V1944.7Z" fill="#0D2577"></path> <path d="M139.852 171C139.852 143.386 163.391 121 192.428 121H1005.25L646.686 384L913.772 1175.5L867.505 1353.78L433.979 1997.5L192.428 1998C163.391 1998 139.852 1975.61 139.852 1948V171Z" fill="#1E1E1E"></path> <path d="M277.075 1970L262.354 1981.5C256.038 1987.32 260.917 1997.84 269.715 1997.84L433.979 1997.5C433.979 1997.5 479.636 1996.61 485.069 1994.86L504.608 1988.56C507.836 1987.52 510.951 1986.19 513.907 1984.57L541.533 1969.5L554.094 1961.96C558.938 1959.05 562.805 1954.88 565.236 1949.94C567.941 1944.46 568.738 1938.29 567.512 1932.35L566.222 1926.1C564.85 1919.44 564.976 1912.58 566.591 1905.98L566.645 1905.76C568.456 1898.36 572.052 1891.45 577.15 1885.59L582.017 1880L601.533 1857.22C603.938 1854.42 606.655 1851.87 609.638 1849.62L627.219 1836.37C631.065 1833.47 635.318 1831.1 639.855 1829.32L644.497 1827.5C648.742 1825.84 652.739 1823.66 656.388 1821.01L676.509 1806.4C678.705 1804.8 680.766 1803.04 682.672 1801.14L698.097 1785.74C699.922 1783.92 701.89 1782.23 703.983 1780.68L733.436 1759L751.675 1745.18C759.999 1738.88 766.115 1730.32 769.214 1720.63L769.968 1718.28C771.196 1714.44 772.905 1710.76 775.058 1707.31L781.806 1696.5L785.388 1689.29C788.658 1682.7 795.63 1678.5 803.288 1678.5C807.762 1678.5 812.104 1677.06 815.606 1674.41L826.293 1666.33C829.224 1664.12 831.898 1661.61 834.269 1658.85L839.777 1652.45C843.171 1648.51 845.91 1644.09 847.901 1639.36L856.631 1618.6C858.611 1613.9 859.827 1608.93 860.236 1603.87L860.756 1597.44C861.719 1585.54 867.126 1574.36 876 1565.92L876.969 1565L905.886 1541.5L946.37 1514L974.761 1491.5L1001.05 1468.5L1024.18 1443.5L1048.89 1413.5L1070.45 1383L1089.57 1360.86C1092.93 1356.98 1096.88 1353.59 1101.3 1350.83L1129.51 1333.18C1132.89 1331.07 1136.51 1329.33 1140.31 1328.01L1162.4 1320.3C1164.89 1319.44 1167.44 1318.75 1170.04 1318.25L1187.5 1314.88C1197.24 1313 1207.35 1313.78 1216.64 1317.14L1239.74 1325.5L1254.3 1332.04C1257.18 1333.33 1260.32 1334 1263.5 1334C1265.87 1334 1268.23 1334.37 1270.47 1335.1L1282.8 1339.11C1285.64 1340.04 1288.39 1341.19 1291.02 1342.56L1314.93 1355L1375.92 1387L1425.34 1411L1479.49 1435L1534.17 1462.5L1609.88 1490.5L1653.52 1504L1697.03 1515.82C1699.91 1516.61 1702.72 1517.62 1705.42 1518.86L1746.05 1537.5L1797.05 1561.5L1835.96 1578L1884.03 1597.13C1886.33 1598.04 1888.69 1598.8 1891.11 1599.4L1942.16 1612L1987.38 1625.5L2032.07 1643L2065.72 1660.5L2112.51 1684.5L2144.85 1702.36C2155.1 1708.02 2161.4 1718.43 2161.4 1729.7C2161.4 1739.93 2166.61 1749.52 2175.36 1755.45L2190.86 1765.95C2194.33 1768.3 2198.19 1770.09 2202.27 1771.25L2208.15 1772.92C2219.07 1776.02 2227.11 1784.88 2228.72 1795.61C2229.06 1797.86 2229.68 1800.07 2230.59 1802.17L2245.53 1837L2256.06 1867.4C2259.14 1876.29 2264.78 1884.18 2272.34 1890.16L2273.26 1890.89C2279.57 1895.89 2287.02 1899.42 2295.03 1901.19L2306.43 1903.7C2310.33 1904.57 2314.32 1905 2318.32 1905H2346.02C2354.21 1905 2362.22 1902.74 2369.08 1898.5L2388.01 1885.5L2400.52 1875.91C2404.77 1872.66 2408.46 1868.79 2411.46 1864.46L2417.2 1856.16C2419.12 1853.39 2420.73 1850.45 2422.04 1847.39L2430.89 1826.53C2431.73 1824.53 2433 1822.72 2434.6 1821.19L2435.72 1820.12C2438.16 1817.8 2439.53 1814.66 2439.53 1811.37V1802.29C2439.53 1800.47 2437.98 1799 2436.07 1799C2434 1799 2432.39 1797.28 2432.63 1795.32L2435.17 1774.99C2435.59 1771.58 2437.85 1768.62 2441.13 1767.18C2445.91 1765.08 2448.28 1759.91 2446.64 1755.14L2441.69 1740.78C2440.27 1736.65 2437.82 1732.92 2434.55 1729.89L2424.32 1720.42C2421.5 1717.82 2418.38 1715.52 2415.03 1713.57L2398.52 1704L2369.08 1690L2347.68 1682.79C2345.12 1681.93 2342.51 1681.26 2339.85 1680.78L2302.87 1674.17C2300.4 1673.72 2297.96 1673.11 2295.58 1672.34L2264.15 1662.11C2260.85 1661.04 2257.68 1659.66 2254.67 1657.99L2227.65 1643L2205.04 1631.5L2183.49 1619L2160.56 1605.25C2153.18 1600.82 2147.07 1594.71 2142.79 1587.47L2137.94 1579.28C2136.06 1576.1 2133.83 1573.13 2131.27 1570.42L2107.78 1545.5L2069.92 1513.5L2028.91 1484L1985.27 1460L1942.69 1438.5L1883.8 1412.5L1830.17 1392.5L1797.58 1380.5L1757.09 1369L1726.3 1361.78C1721.27 1360.6 1716.45 1358.72 1712 1356.2L1696.63 1347.5L1674.55 1331L1648.26 1308.5L1639.85 1299.5L1604.62 1259L1573.14 1227.22C1571.35 1225.41 1569.42 1223.73 1567.36 1222.19L1533.65 1197L1494.74 1169.5L1272.75 1020.73C1264.41 1015.14 1258.78 1006.62 1257.1 997.051L1256.67 994.576C1254.38 981.53 1244.02 971.099 1230.45 968.191C1220.97 966.16 1212.85 960.392 1208.11 952.327L1205.57 948L1194.81 933.185C1191.84 929.085 1189.52 924.584 1187.94 919.832L1185.86 913.56C1184.63 909.866 1183.86 906.049 1183.56 902.185L1178.23 833.5V802.5C1178.23 785.379 1192.82 771.5 1210.83 771.5H1237.05C1241.97 771.5 1246.87 770.797 1251.57 769.415L1265.97 765.183C1270.68 763.799 1274.5 760.511 1276.43 756.196C1279.05 750.318 1285.11 746.5 1291.83 746.5H1325.44L1364.88 742.5L1404.31 736.5L1427.44 730.5C1435.05 728.525 1443.04 728.206 1450.8 729.566L1451.86 729.752C1456.59 730.58 1461.42 730.788 1466.2 730.368L1544.69 723.5L1670.87 706.5L1691.12 703.569C1693.74 703.19 1696.38 703 1699.03 703H1716.08L1749.73 699.5L1793.37 696.5L1833.33 691L1864.59 683.155C1868.97 682.056 1873.48 681.5 1878 681.5H1892.7C1898.49 681.5 1904.08 683.497 1908.43 687.121C1909.54 688.038 1910.72 688.857 1911.99 689.568L1917.95 692.931C1922.15 695.299 1925.99 698.212 1929.34 701.586L1939.71 712.012C1941.69 714 1943.84 715.832 1946.13 717.486L1957.93 726L1983.74 744.192C1986.86 746.391 1990.22 748.254 1993.77 749.748L2020.5 761L2049.42 772.5L2089.9 787.5L2123.02 797L2164.03 808L2189.49 812.248C2192.49 812.748 2195.53 813 2198.58 813H2223.24C2235.2 813 2246.73 808.716 2255.52 801L2264.01 791.521C2266.33 788.925 2267.61 785.627 2267.61 782.218V780.807C2267.61 774.578 2272.36 769.271 2278.83 768.279C2282.1 767.778 2285.05 766.138 2287.12 763.679L2300.73 747.5L2317.56 723L2325.81 711.229C2330.07 705.15 2332.88 698.257 2334.04 691.034L2337.01 672.5L2339.92 649.942C2340.43 645.995 2340.44 642.004 2339.96 638.054L2338.21 623.834C2337.42 617.341 2335.29 611.06 2331.95 605.346L2330.57 602.971C2326.17 595.451 2319.81 589.136 2312.1 584.637L2300.73 578L2274.97 565.5L2239.71 548.736C2237.28 547.581 2234.76 546.606 2232.17 545.821L2199.78 536L2168.84 527.824C2164.25 526.614 2159.52 526 2154.76 526H2136.59C2129.37 526 2122.24 527.411 2115.62 530.147L2101.47 536L2078.86 547L2059.78 556.07C2057.08 557.354 2054.27 558.415 2051.38 559.24L2029.44 565.5L2007.88 574.5L1992.08 582.012C1986.54 584.65 1980.54 586.333 1974.38 586.985L1968.38 587.618C1959.8 588.525 1951.58 591.43 1944.45 596.076L1936.9 601L1930.37 605.623C1921.3 612.037 1910.3 615.5 1898.99 615.5H1551L1501.57 619L1458.54 624.519C1456.08 624.834 1453.74 625.758 1451.77 627.199C1449.29 629.015 1446.25 630 1443.12 630H1431.35C1427.36 630 1423.38 629.535 1419.51 628.614L1404.31 625L1371.18 619L1343.32 615.5H1325.9C1323.91 615.5 1322.29 613.961 1322.29 612.063C1322.29 610.317 1320.91 608.849 1319.09 608.649L1294.95 606L1231.86 601L1184.54 596.5L1143.93 593.497C1139.65 593.18 1135.7 591.19 1133.01 588C1126.78 578.952 1116.17 573.5 1104.8 573.5H1089.9L1071.45 575.84C1068.02 576.274 1064.54 575.96 1061.26 574.922L1055.75 573.175C1049.77 571.279 1045.74 565.956 1045.74 559.96C1045.74 557.688 1046.32 555.45 1047.44 553.442L1051.68 545.828C1054.02 541.632 1055.69 537.133 1056.66 532.475L1061.05 511.285C1061.71 508.103 1062.04 504.867 1062.04 501.623V432.69C1062.04 430.652 1063.77 429 1065.92 429C1066.13 429 1066.35 428.983 1066.57 428.948L1121.28 420.13C1125.93 419.38 1130.45 418.039 1134.72 416.142L1148.67 409.951C1150.82 408.997 1152.71 407.58 1154.18 405.812C1159.57 399.359 1158.24 389.948 1151.26 385.069L1148.71 383.287C1147.02 382.104 1145.13 381.207 1143.12 380.633L1125.13 375.5L1112.48 372.493C1108.31 371.501 1104.03 371 1099.73 371H1080.85C1071.9 371 1063.71 366.191 1059.71 358.577C1059.16 357.527 1058.52 356.52 1057.8 355.565L1050.19 345.431C1047.24 341.498 1043.7 337.993 1039.69 335.025L1027.18 325.773C1023.79 323.267 1020.09 321.165 1016.17 319.514L994.74 310.5L961.617 301L946.178 297.429C943.506 296.811 940.787 296.393 938.046 296.179L910.092 294H889.519C885.72 294 881.933 294.392 878.222 295.168L866.042 297.716C860.397 298.897 854.995 300.956 850.053 303.809L846.696 305.748C844.1 307.246 841.645 308.956 839.36 310.858L831.696 317.236C827.898 320.396 824.599 324.059 821.9 328.112L815.981 337L805.466 355.5L796.528 375.5L790.218 394L785.487 411.5L783.878 422.208C783.201 426.715 783.174 431.289 783.799 435.802L785.487 448L788.516 465.607C789.633 472.097 792.455 478.214 796.721 483.39L800.971 488.547C803.883 492.08 805.466 496.44 805.466 500.929C805.466 512.014 796.016 521 784.36 521H770.478C761.867 521 754.538 515.035 753.209 506.944C752.997 505.652 752.625 504.389 752.102 503.181L747.604 492.792C746.224 489.606 744.502 486.564 742.464 483.714L736.591 475.5L723.973 461.5L706.622 445L687.169 429C675.456 419.485 678.175 401.609 692.242 395.64L696.107 394L716.921 383.901C720.211 382.305 723.315 380.383 726.181 378.169L755.518 355.5L830.702 294L835.209 290.19C838.501 287.408 842.146 285.03 846.061 283.112L857.516 277.5L865.928 274L881.175 266L893.793 259L903.21 252.552C905.69 250.854 908.321 249.365 911.073 248.101L917.615 245.098C920.654 243.703 923.828 242.589 927.092 241.772L942.163 238L957.133 232.614C960.116 231.54 963.196 230.727 966.334 230.184L984.75 227L1010.51 222L1033.53 219.424C1036.06 219.142 1038.56 218.686 1041.01 218.059L1049.47 215.902C1055.69 214.314 1061.55 211.652 1066.77 208.047L1072.9 203.807C1075.12 202.272 1077.21 200.573 1079.15 198.726L1085.7 192.5L1096.74 179L1099.72 174.102C1101.58 171.043 1103.1 167.804 1104.24 164.441L1105.75 160.004C1107.44 155.032 1108.3 149.839 1108.3 144.613V138C1108.3 128.611 1101.35 120.697 1091.48 120.697L886.745 121C883.669 121 881.175 123.371 881.175 126.297C881.175 126.764 881.11 127.228 880.982 127.679L875.918 145.5L874.081 154.017C872.521 161.249 869.296 168.063 864.638 173.97L862.431 176.767C859.174 180.898 855.264 184.523 850.84 187.515L833.857 199L814.395 211.482C812.3 212.826 810.107 214.024 807.831 215.067L781.806 227L708.725 261L687.169 273L661.933 287.5L640.376 302.5L621.449 316.5L595.687 337L577.285 354L561.392 365.239C558.329 367.405 555.549 369.913 553.114 372.708C545.654 381.271 541.756 392.138 542.159 403.252L544.029 454.834C544.113 457.152 545.297 459.309 547.248 460.701C549.277 462.148 550.471 464.42 550.471 466.832V475.286C550.471 478.724 551.23 482.123 552.698 485.265L556.78 494L561.512 509.5L565.854 524.516C566.813 527.83 568.128 531.041 569.779 534.098L577.285 548L586.623 565.357C588.106 568.113 589.316 570.994 590.238 573.963L595.687 591.5L601.47 609.5L611.46 630.5L619.264 645.344C620.717 648.109 621.898 650.996 622.791 653.968L627.758 670.5L634.779 689.695C635.705 692.227 636.844 694.685 638.185 697.044L646.686 712L651.764 723.384C653.281 726.784 654.397 730.334 655.092 733.967L658.252 750.5L661.407 775L667.19 797.5L677.18 831.5L688.746 865.5L693.039 883.869C693.681 886.618 694.567 889.311 695.686 891.918L704.519 912.5L717.138 935.5L727.127 954L736.065 974L744.473 988.793C745.875 991.26 747.057 993.835 748.005 996.49L756.044 1019L763.296 1040.55C764.068 1042.85 764.673 1045.2 765.105 1047.58L768.026 1063.69C769.141 1069.84 771.459 1075.74 774.858 1081.08L778.939 1087.49C780.845 1090.49 783.077 1093.29 785.598 1095.84L795.55 1105.91C797.251 1107.64 799.088 1109.23 801.046 1110.68L808.466 1116.19C815.531 1121.43 819.661 1129.48 819.661 1138.01V1144.65C819.661 1146.5 820.309 1148.29 821.501 1149.75C822.694 1151.21 823.341 1153 823.341 1154.85V1200.48C823.341 1211.89 817.981 1222.71 808.726 1229.97C804.494 1233.29 801.022 1237.4 798.523 1242.04L790.744 1256.5L781.806 1273L769.714 1296L756.57 1318.5L747.106 1333.5L731.859 1353L715.56 1376L702.942 1397L690.85 1418.5L677.706 1444.5L667.716 1467.5L659.356 1488.17C657.937 1491.68 655.72 1494.85 652.865 1497.45L652.718 1497.59C647.521 1502.32 644.583 1508.87 644.583 1515.72C644.583 1518.55 644.078 1521.37 643.089 1524.04L637.748 1538.5L630.4 1557C629.343 1559.66 628.613 1562.42 628.223 1565.24L627.059 1573.65C626.496 1577.73 624.297 1581.43 620.923 1584L609.357 1591.5L597.165 1601.09C595.131 1602.7 593.226 1604.44 591.468 1606.31L580.965 1617.5L571.081 1630.17C569.611 1632.05 568.278 1634.04 567.092 1636.12L555.729 1656L542.585 1680L531.867 1696.07C529.904 1699.02 528.271 1702.15 526.993 1705.41L520.503 1722L511.039 1744L504.204 1765L495.792 1788.5L486.854 1809L476.865 1828L464.772 1850L452.68 1871L445.221 1881.79C442.151 1886.24 438.356 1890.18 433.979 1893.49L422.711 1902L405.361 1912.5L391.533 1921.03C387.798 1923.33 383.771 1925.18 379.547 1926.52L366.98 1930.5L347.002 1936L324.92 1942.5L310.751 1948.84C308.283 1949.95 305.909 1951.23 303.651 1952.69L290.745 1961L277.075 1970Z" fill="white"></path> </svg>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/BrandLogo.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro("https://lsrv.pe");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navbar;
  const strings = enStrings;
  const homeUrl = Astro2.currentLocale === "es" ? "/" : "";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"> <!-- Navigation container --> <nav class="relative mx-2 w-full rounded-[36px] border bg-bluemain border-yellow-100/40 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-bluemain dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"', ' aria-label="Brand"> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white transition duration-300 hover:bg-neutral-600 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <!-- <span class="inline-block md:hidden">\n        <ThemeIcon />\n      </span> --> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 py-2 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"> <!-- Navigation links and Authentication component --> ', ' <!-- <Authentication /> --> <!-- ThemeIcon component specifically for larger screens --> <!-- <span class="hidden md:inline-block">\n          <ThemeIcon />\n        </span> --> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = `*{transition: unset !important;}`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script> <!--Import the necessary Collapse and Overlay plugins--> <!--https://preline.co/plugins/html/collapse.html--> <!--https://preline.co/plugins/html/overlay.html--> <script src="/scripts/vendor/preline/collapse/index.js"><\/script> <script src="/scripts/vendor/preline/overlay/index.js"><\/script>'], ["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"> <!-- Navigation container --> <nav class="relative mx-2 w-full rounded-[36px] border bg-bluemain border-yellow-100/40 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-bluemain dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"', ' aria-label="Brand"> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white transition duration-300 hover:bg-neutral-600 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <!-- <span class="inline-block md:hidden">\n        <ThemeIcon />\n      </span> --> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 py-2 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"> <!-- Navigation links and Authentication component --> ', ' <!-- <Authentication /> --> <!-- ThemeIcon component specifically for larger screens --> <!-- <span class="hidden md:inline-block">\n          <ThemeIcon />\n        </span> --> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = \\`*{transition: unset !important;}\\`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script> <!--Import the necessary Collapse and Overlay plugins--> <!--https://preline.co/plugins/html/collapse.html--> <!--https://preline.co/plugins/html/overlay.html--> <script src="/scripts/vendor/preline/collapse/index.js"><\/script> <script src="/scripts/vendor/preline/overlay/index.js"><\/script>'])), maybeRenderHead(), addAttribute(homeUrl, "href"), renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-28 p-0 rounded-full" }), strings.navBarLinks.map((link) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "url": link.url, "name": link.name })}`));
}, "/Users/nrojasma/Documents/lsvr/src/components/sections/Navbar.astro", void 0);

const $$Astro$4 = createAstro("https://lsrv.pe");
const $$FooterSocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FooterSocialLink;
  const { url } = Astro2.props;
  const linkClass = "inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-none ring-zinc-500 hover:bg-neutral-500/10 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(linkClass, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/ui/links/FooterSocialLink.astro", void 0);

const $$Astro$3 = createAstro("https://lsrv.pe");
const $$EmailFooterInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EmailFooterInput;
  const {
    label = "Search",
    title = "Subscribirme",
    id = "footer-input"
  } = Astro2.props;
  const placeholder = "Tu email aqu\xED";
  return renderTemplate`${maybeRenderHead()}<div class="mt-4 flex flex-col items-center gap-2 rounded-lg bg-neutral-200 p-2 dark:bg-neutral-800 sm:flex-row sm:gap-3"> <div class="w-full"> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="text"${addAttribute(id, "id")} name="footer-input" class="block w-full rounded-lg border-transparent bg-neutral-100 px-4 py-3 text-sm text-neutral-600 focus:border-orange-400 focus:ring-orange-400 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-gray-300 dark:placeholder:text-neutral-300"${addAttribute(placeholder, "placeholder")}> </div> <a class="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-orange-400 p-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-orange-500 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none dark:focus:ring-1 sm:w-auto" href="#"> ${title} </a> </div>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/ui/forms/input/EmailFooterInput.astro", void 0);

const Icons = {
  groups: {
    paths: [
      {
        d: "m150-400 82-80-82-82-80 82 80 80Zm573-10 87-140 88 140H723Zm-243-70q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.351-180Q455-660 437.5-642.851t-17.5 42.5Q420-575 437.351-557.5t43 17.5Q506-540 523-557.351t17-43Q540-626 522.851-643t-42.5-17ZM480-600ZM0-240v-53q0-39.464 42-63.232T150.398-380q12.158 0 23.38.5T196-377.273q-8 17.273-12 34.842-4 17.57-4 37.431v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm570-140q67.5 0 108.75 23.768T960-293v53H780v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5Zm-330.2-10Q400-390 350-366q-50 24-50 61v5h360v-6q0-36-49.5-60t-130.7-24Zm.2 90Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  books: {
    paths: [
      {
        d: "M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  verified: {
    paths: [
      {
        d: "m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  frame: {
    paths: [
      {
        d: "M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.351-60Q505-540 522.5-557.149t17.5-42.5Q540-625 522.649-642.5t-43-17.5Q454-660 437-642.649t-17 43Q420-574 437.149-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.943-32.5 44.942-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.546 0-92.773 13T300-328v28h360v-28q-42-26-87.227-39-45.227-13-92.773-13Zm0-220Zm0 300h180-360 180ZM140-80q-24 0-42-18t-18-42v-172h60v172h172v60H140ZM80-648v-172q0-24 18-42t42-18h172v60H140v172H80ZM648-80v-60h172v-172h60v172q0 24-18 42t-42 18H648Zm172-568v-172H648v-60h172q24 0 42 18t18 42v172h-60Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  tools: {
    paths: [
      {
        d: "M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  dashboard: {
    paths: [
      {
        d: "M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  house: {
    paths: [
      {
        d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
      }
    ],
    class: "h-6 w-6 flex-shrink-0 text-neutral-700 hs-tab-active:text-orange-400 dark:text-neutral-300 dark:hs-tab-active:text-orange-300 md:h-7 md:w-7",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowUp: {
    paths: [
      {
        d: "m5 12 7-7 7 7"
      },
      {
        d: "M12 19V5"
      }
    ],
    class: "h-5 w-5 flex-shrink-0 text-orange-400 dark:text-orange-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  checkCircle: {
    paths: [
      {
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM13.707 8.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      }
    ],
    class: "h-5 w-5 shrink-0",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  bookmark: {
    paths: [
      {
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
        class: "fill-current text-neutral-500 transition duration-300 group-hover:text-red-400 group-hover:dark:text-red-400"
      }
    ],
    class: "h-6 w-6 fill-none transition duration-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  facebook: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  x: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  linkedIn: {
    paths: [
      {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  share: {
    paths: [
      {
        d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      }
    ],
    class: "h-4 w-4 group-hover:text-neutral-700",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  github: {
    paths: [
      {
        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      }
    ],
    class: "w-4.5 h-4.5 transition flex-shrink-0 text-neutral-700 duration-300 group-hover:-translate-y-1",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  arrowRightStatic: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "size-4 flex-shrink-0",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  openInNew: {
    paths: [
      {
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      }
    ],
    class: "ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionNotActive: {
    paths: [
      {
        d: "m6 9 6 6 6-6"
      }
    ],
    class: "block h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:hidden dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionActive: {
    paths: [
      {
        d: "m18 15-6-6-6 6"
      }
    ],
    class: "hidden h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:block dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  xFooter: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Twitter"
  },
  facebookFooter: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Facebook"
  },
  githubFooter: {
    paths: [
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "GitHub"
  },
  googleFooter: {
    paths: [
      {
        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Google"
  },
  slackFooter: {
    paths: [
      {
        d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Slack"
  },
  quotation: {
    paths: [
      {
        d: "M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
      }
    ],
    class: "absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-neutral-300 dark:text-neutral-700",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  question: {
    paths: [
      {
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chatBubble: {
    paths: [
      {
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  mapPin: {
    paths: [
      {
        d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  envelopeOpen: {
    paths: [
      {
        d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  earth: {
    paths: [
      {
        d: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
      }
    ],
    class: "w-4 h-4 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  }
};

const $$Astro$2 = createAstro("https://lsrv.pe");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name } = Astro2.props;
  let icon = Icons[name] || {};
  let paths = icon.paths || [];
  return renderTemplate`${icon ? renderTemplate`${maybeRenderHead()}<svg${addAttribute(icon.class, "class")}${addAttribute(icon.height, "height")}${addAttribute(icon.viewBox, "viewBox")}${addAttribute(icon.width, "width")}${addAttribute(icon.fill, "fill")}${addAttribute(icon.clipRule, "clip-rule")}${addAttribute(icon.fillRule, "fill-rule")}${addAttribute(icon.stroke, "stroke")}${addAttribute(icon.strokeWidth, "stroke-width")}${addAttribute(icon.strokeLinecap, "stroke-linecap")}${addAttribute(icon.strokeLinejoin, "stroke-linejoin")}><title>${icon.title}</title>${paths.map((path) => renderTemplate`<path${addAttribute(path.d, "d")}${addAttribute(path.class || "", "class")}></path>`)}</svg>` : "Icon not found"}`;
}, "/Users/nrojasma/Documents/lsvr/src/components/ui/icons/Icon.astro", void 0);

const $$Astro$1 = createAstro("https://lsrv.pe");
const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FooterSection;
  const strings = Astro2.currentLocale === "" ? enStrings : enStrings;
  const sectionThreeTitle = "Enterat\xE9 de lo \xFAltimo!";
  const sectionThreeContent = "Todas las semanas hay juegos y partidos calientes";
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-neutral-300 dark:bg-neutral-900"> <div class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-screen-2xl"> <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5"> <div class="col-span-full lg:col-span-1"> <!-- Brand Logo --> ${renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-32" })} </div> <!-- An array of links for Product and Company sections --> ${strings.footerLinks.map((section) => renderTemplate`<div class="col-span-1"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${section.section} </h3> <ul class="mt-3 grid space-y-3"> ${section.links.map((link, index) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="inline-flex gap-x-2 rounded-lg text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-none"> ${link.name} </a> ${section.section === "Company" && index === 2 ? renderTemplate`<span class="ms-1 inline rounded-lg bg-orange-500 px-2 py-1 text-xs font-bold text-neutral-50">
We're hiring!
</span>` : null} </li>`)} </ul> </div>`)} <div class="col-span-2"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${sectionThreeTitle} </h3> <form> ${renderComponent($$result, "EmailFooterInput", $$EmailFooterInput, {})} <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-400"> ${sectionThreeContent} </p> </form> </div> </div> <div class="mt-9 mb-2 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex items-center justify-between "> <p class="text-sm text-neutral-600 dark:text-neutral-400">
© <span id="current-year"></span> ${SITE.title} </p> </div> <!-- Social Brands --> <div> ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.facebook }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "facebookFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.instagram }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "xFooter" })}` })} </div> </div> <div class="text-center my-auto pt-3 border-t border-gray-400"> <p class="text-sm text-neutral-500 dark:text-neutral-400">
Creado por
<a href="https://www.linkedin.com/in/nayrojas/" target="blank"> @Nayrojas</a> </p> </div> ${renderScript($$result, "/Users/nrojasma/Documents/lsvr/src/components/sections/FooterSection.astro?astro&type=script&index=0&lang.ts")} </div> </footer>`;
}, "/Users/nrojasma/Documents/lsvr/src/components/sections/FooterSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://lsrv.pe");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = SITE.title, meta, structuredData, lang = "en" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<!--\nThis is the main structure for the page.\nWe set the language of the page to English and add classes for scrollbar and scroll behavior.\n--><html", ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16 astro-ouamjn2i"> <head><!-- Adding metadata to the HTML document -->', "<!-- Define the title of the page --><title>", '</title><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem("hs_theme") === "dark" ||\n        (!("hs_theme" in localStorage) &&\n          window.matchMedia("(prefers-color-scheme: dark)").matches)\n      ) {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script><script src="/scripts/vendor/lenis/lenis.js"><\/script><script>\n      // Script to handle Lenis library settings for smooth scrolling\n      const lenis = new Lenis();\n\n      function raf(time) {\n        lenis.raf(time);\n        requestAnimationFrame(raf);\n      }\n\n      requestAnimationFrame(raf);\n    <\/script>', '</head> <body class=" bg-white selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800  astro-ouamjn2i"> <!--\n    Setting up the main structure of the page.\n    The Navbar is placed at the top, with a slot for the main content and FooterSection at the bottom.\n    --> <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 astro-ouamjn2i"> ', ' <main class="astro-ouamjn2i"> ', " </main> </div> ", "  </body> </html>"])), addAttribute(lang, "lang"), renderComponent($$result, "Meta", $$Meta, { "meta": meta, "structuredData": structuredData, "class": "astro-ouamjn2i" }), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "class": "astro-ouamjn2i" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterSection", $$FooterSection, { "class": "astro-ouamjn2i" }));
}, "/Users/nrojasma/Documents/lsvr/src/layouts/MainLayout.astro", void 0);

export { $$Icon as $, SITE as S, $$MainLayout as a };
