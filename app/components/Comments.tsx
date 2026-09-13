"use client";

import { useEffect, useRef } from "react";

// Free comment section powered by Giscus (GitHub Discussions).
// Visitors sign in with GitHub to comment — keeps spam out, no ads.
export default function Comments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", "haroun26-dev/brandnewsite");
    script.setAttribute("data-repo-id", "R_kgDOSlTR9A");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOSlTR9M4DFe3J");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");
    container.appendChild(script);
  }, []);

  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "48px auto 0",
        padding: "32px 24px 0",
        borderTop: "1px solid #e2e8f0",
      }}
    >
      <h2 style={{ fontSize: "1.4rem", fontWeight: 800, margin: "0 0 8px" }}>
        Comments
      </h2>
      <p style={{ color: "#64748b", fontSize: "0.9rem", margin: "0 0 20px" }}>
        Won something? Spot an expired listing? Let everyone know — sign in with
        GitHub to comment.
      </p>
      <div ref={containerRef} />
    </section>
  );
}
