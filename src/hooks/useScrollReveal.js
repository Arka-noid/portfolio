import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = (root) => {
      if (root.nodeType !== 1) return;
      if (root.classList.contains("reveal") && !root.classList.contains("visible")) {
        io.observe(root);
      }
      root.querySelectorAll(".reveal:not(.visible)").forEach((el) => io.observe(el));
    };

    observe(document.body);

    // Anything rendered after mount — a filtered list, an expanded panel —
    // needs observing too, or it is stuck at opacity 0 for good.
    const mo = new MutationObserver((records) => {
      records.forEach((r) => r.addedNodes.forEach(observe));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
}
