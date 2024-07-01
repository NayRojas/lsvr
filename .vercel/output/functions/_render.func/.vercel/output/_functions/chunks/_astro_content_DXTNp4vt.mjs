import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, x as prependForwardSlash } from './astro/assets-service_Bxr6wzEG.mjs';
import { n as createComponent, z as renderUniqueStylesheet, B as renderScriptElement, C as createHeadAndContent, o as renderTemplate, s as renderComponent, v as unescapeHTML } from './astro/server_CAp2qBl3.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://lsrv.pe", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('./post-1_CxfBcfX3.mjs'),"/src/content/blog/en/post-2.md": () => import('./post-2_CV9TOe37.mjs'),"/src/content/blog/en/post-3.md": () => import('./post-3_D8ss9uQm.mjs'),"/src/content/blog/fr/post-1.md": () => import('./post-1_BoEckCny.mjs'),"/src/content/blog/fr/post-2.md": () => import('./post-2_CeTCByMA.mjs'),"/src/content/blog/fr/post-3.md": () => import('./post-3_CyyJBhjD.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_B4oi_Arw.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_Wx06vhD4.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_Clf1GSnm.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_XW-vcMZY.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_voPwV5JH.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BfAdMB7c.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_BT9oIon2.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_D-IBOR3p.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_C79za2R-.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DxwTL0oU.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_9zBEu1c_.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_Cae1ogDm.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_E-GjViM9.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Byzq2bD8.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_dpCdc16n.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_B-02z1M7.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_WTnqQmEL.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BLNOoNUr.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_ChUG3yzh.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_omdfJubc.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_LlofCCEO.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BIA8Qsmu.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_BliMu058.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_BScKpnWo.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_IGKouPCw.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_2-sW_Q9E.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_BkmSVcdR.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_DVzygESA.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_8M-jrl1_.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_D7_y3EZD.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_lVLZRtTe.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DuxbC1g5.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_CGwsH55g.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_Bea-aTCo.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_CgF0wpbK.mjs'),"/src/content/insights/insight-1.md": () => import('./insight-1_jX4m-qcE.mjs'),"/src/content/insights/insight-10.md": () => import('./insight-10_EBoJV-iD.mjs'),"/src/content/insights/insight-11.md": () => import('./insight-11_Lvc9MORq.mjs'),"/src/content/insights/insight-12.md": () => import('./insight-12_u7BhukwD.mjs'),"/src/content/insights/insight-13.md": () => import('./insight-13_BBMDnabx.mjs'),"/src/content/insights/insight-14.md": () => import('./insight-14_DBsZpX7S.mjs'),"/src/content/insights/insight-15.md": () => import('./insight-15_nGF8Qf8V.mjs'),"/src/content/insights/insight-16.md": () => import('./insight-16_BBV8lZvJ.mjs'),"/src/content/insights/insight-17.md": () => import('./insight-17_D8Ihjz8X.mjs'),"/src/content/insights/insight-18.md": () => import('./insight-18_CsjX4j7J.mjs'),"/src/content/insights/insight-19.md": () => import('./insight-19_B6xw120m.mjs'),"/src/content/insights/insight-2.md": () => import('./insight-2_CIGx1-1x.mjs'),"/src/content/insights/insight-20.md": () => import('./insight-20_Cvl-vIkU.mjs'),"/src/content/insights/insight-3.md": () => import('./insight-3_Db4CVPPK.mjs'),"/src/content/insights/insight-4.md": () => import('./insight-4_Do5PZm-7.mjs'),"/src/content/insights/insight-5.md": () => import('./insight-5_BSHZGo0Q.mjs'),"/src/content/insights/insight-6.md": () => import('./insight-6_DP1Djdt_.mjs'),"/src/content/insights/insight-7.md": () => import('./insight-7_BY-mFdwh.mjs'),"/src/content/insights/insight-8.md": () => import('./insight-8_DkjA6oi3.mjs'),"/src/content/insights/insight-9.md": () => import('./insight-9_DbdQ_Y2y.mjs'),"/src/content/products/a765.md": () => import('./a765_5sL88syl.mjs'),"/src/content/products/b203.md": () => import('./b203_MHiZDcTd.mjs'),"/src/content/products/f303.md": () => import('./f303_DX0yeUDL.mjs'),"/src/content/products/t845.md": () => import('./t845_6O5YaTSm.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx"}},"insights":{"type":"content","entries":{"insight-1":"/src/content/insights/insight-1.md","insight-10":"/src/content/insights/insight-10.md","insight-11":"/src/content/insights/insight-11.md","insight-12":"/src/content/insights/insight-12.md","insight-14":"/src/content/insights/insight-14.md","insight-13":"/src/content/insights/insight-13.md","insight-16":"/src/content/insights/insight-16.md","insight-15":"/src/content/insights/insight-15.md","insight-17":"/src/content/insights/insight-17.md","insight-18":"/src/content/insights/insight-18.md","insight-19":"/src/content/insights/insight-19.md","insight-2":"/src/content/insights/insight-2.md","insight-20":"/src/content/insights/insight-20.md","insight-3":"/src/content/insights/insight-3.md","insight-4":"/src/content/insights/insight-4.md","insight-5":"/src/content/insights/insight-5.md","insight-6":"/src/content/insights/insight-6.md","insight-7":"/src/content/insights/insight-7.md","insight-8":"/src/content/insights/insight-8.md","insight-9":"/src/content/insights/insight-9.md"}},"products":{"type":"content","entries":{"a765":"/src/content/products/a765.md","f303":"/src/content/products/f303.md","b203":"/src/content/products/b203.md","t845":"/src/content/products/t845.md"}},"blog":{"type":"content","entries":{"fr/post-1":"/src/content/blog/fr/post-1.md","fr/post-2":"/src/content/blog/fr/post-2.md","fr/post-3":"/src/content/blog/fr/post-3.md","en/post-1":"/src/content/blog/en/post-1.md","en/post-2":"/src/content/blog/en/post-2.md","en/post-3":"/src/content/blog/en/post-3.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('./post-1_BMs6WCj0.mjs'),"/src/content/blog/en/post-2.md": () => import('./post-2_CRooELGc.mjs'),"/src/content/blog/en/post-3.md": () => import('./post-3_DvqH9FaQ.mjs'),"/src/content/blog/fr/post-1.md": () => import('./post-1_CaX_Z6E7.mjs'),"/src/content/blog/fr/post-2.md": () => import('./post-2_DOhY7_-E.mjs'),"/src/content/blog/fr/post-3.md": () => import('./post-3_DLvLxexH.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_B2bcT3cH.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_CzY-VFO6.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_Cv462hDz.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_NBUgmTHW.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_BJAUBaYW.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_KZll53XT.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_j6o2F6iz.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_C3KIt3JX.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_D9J3ZV95.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CFXYjZcG.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_CESm1gcq.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_BTrRox5l.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_hDXSXqIw.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BvkhqkMO.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_DF1wXRt6.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_C1KseYBv.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_BXwhM9LD.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_-zcc-zkK.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_BilVC9X7.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_DZRalOJs.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_C0QvMFy7.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BjmEtv_D.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_Can5occ4.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_DKgdS3ib.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D5gSo9mx.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_Bq4Rlm8X.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_BT7DJO30.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_DFy985n7.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_BjxcNAnI.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_CoApeOgz.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_DdCAG8Zj.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_04LLlD0d.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_jx0Yb6Oa.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_DENUB8Ge.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_BQkG9X3a.mjs'),"/src/content/insights/insight-1.md": () => import('./insight-1_Bp0ZiE5X.mjs'),"/src/content/insights/insight-10.md": () => import('./insight-10_CN5fS6uI.mjs'),"/src/content/insights/insight-11.md": () => import('./insight-11_BBB0Zq9Q.mjs'),"/src/content/insights/insight-12.md": () => import('./insight-12_4BhdlLao.mjs'),"/src/content/insights/insight-13.md": () => import('./insight-13_De_44Vk_.mjs'),"/src/content/insights/insight-14.md": () => import('./insight-14_CXGB_FJK.mjs'),"/src/content/insights/insight-15.md": () => import('./insight-15_BDy4-ws1.mjs'),"/src/content/insights/insight-16.md": () => import('./insight-16_49V3sY5F.mjs'),"/src/content/insights/insight-17.md": () => import('./insight-17_hjd-Pucx.mjs'),"/src/content/insights/insight-18.md": () => import('./insight-18_B9OsDRjE.mjs'),"/src/content/insights/insight-19.md": () => import('./insight-19_DfBON9uU.mjs'),"/src/content/insights/insight-2.md": () => import('./insight-2_CCua9Gj8.mjs'),"/src/content/insights/insight-20.md": () => import('./insight-20_CEHlve3r.mjs'),"/src/content/insights/insight-3.md": () => import('./insight-3_dakNufuT.mjs'),"/src/content/insights/insight-4.md": () => import('./insight-4_xGGNVbSB.mjs'),"/src/content/insights/insight-5.md": () => import('./insight-5_CKXEx4dh.mjs'),"/src/content/insights/insight-6.md": () => import('./insight-6_CjA7Xw8s.mjs'),"/src/content/insights/insight-7.md": () => import('./insight-7_Bcsp2qEJ.mjs'),"/src/content/insights/insight-8.md": () => import('./insight-8_ZsI_CkfD.mjs'),"/src/content/insights/insight-9.md": () => import('./insight-9_DabXpIDA.mjs'),"/src/content/products/a765.md": () => import('./a765_BD_EhtmL.mjs'),"/src/content/products/b203.md": () => import('./b203_37jeh0fV.mjs'),"/src/content/products/f303.md": () => import('./f303_DINcEQ-M.mjs'),"/src/content/products/t845.md": () => import('./t845_BlTmkQNl.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };