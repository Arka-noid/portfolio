import { useEffect } from "react";
import { SITE_URL } from "../data/seo";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMeta(attr, key) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

// Sets the document title, meta description, canonical link and OG/Twitter
// tags for the mounted page. Each route's page component calls this once
// with its own copy from data/seo.js — the static tags in index.html stay
// as the pre-hydration fallback for the home page and for any crawler that
// doesn't run JS.
export function useSEO({ title, description, path, noindex = false }) {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    let canonicalEl = document.head.querySelector('link[rel="canonical"]');
    if (path) {
      const url = `${SITE_URL}${path}`;
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute("href", url);
      upsertMeta("property", "og:url", url);
    } else {
      canonicalEl?.remove();
    }

    if (noindex) {
      upsertMeta("name", "robots", "noindex, follow");
    } else {
      removeMeta("name", "robots");
    }
  }, [title, description, path, noindex]);
}
