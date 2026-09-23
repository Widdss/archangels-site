"use client";

import { useEffect } from "react";

// After every new deployment, Next.js generates freshly-hashed JS chunk files.
// A visitor whose browser already has an older version of the site loaded will
// have page/link references pointing at the OLD chunk hashes. If they click a
// link after a new deploy has gone out, the browser tries to fetch a chunk that
// no longer exists and throws a ChunkLoadError — which, left unhandled, just
// silently fails: the click appears to do nothing, and the visitor is stuck on
// the old page until they manually refresh.
//
// This component listens for that specific failure (on both plain script
// errors and unhandled promise rejections, since webpack/Next surface it
// either way depending on the code path) and automatically forces a full
// reload the moment it happens, so a visitor never has to guess to refresh —
// it happens for them within a fraction of a second of clicking.
export default function ChunkErrorReload() {
  useEffect(() => {
    const isChunkError = (message: string) =>
      /Loading chunk [\d\w]+ failed/i.test(message) ||
      /ChunkLoadError/i.test(message) ||
      /Failed to fetch dynamically imported module/i.test(message) ||
      /Importing a module script failed/i.test(message);

    function handleError(event: ErrorEvent) {
      if (isChunkError(event?.message || "")) {
        window.location.reload();
      }
    }

    function handleRejection(event: PromiseRejectionEvent) {
      const reason = event?.reason;
      const message =
        typeof reason === "string" ? reason : reason?.message || reason?.name || "";
      if (isChunkError(String(message))) {
        window.location.reload();
      }
    }

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);
    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}
