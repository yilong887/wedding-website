import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Every route change starts at the top of the page.
 *
 * Two separate things were leaving guests mid-page:
 *
 *  1. React Router swaps the page content without touching the scroll
 *     position, so navigating from a long page (the invitation) to a short
 *     one left the window scrolled past the whole document.
 *  2. Browsers restore the previous scroll offset on reload. When the page
 *     restores before images have loaded, the document is short, so the
 *     restored offset lands at or near the bottom — which is why a plain
 *     refresh could also open partway down. Disabling automatic restoration
 *     is what fixes that half.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // An in-page anchor (#rsvp) is a deliberate request to jump somewhere —
    // don't fight it.
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }

    // "instant" rather than smooth: a new page should already be at the top,
    // not visibly race there. The invitation sets `scroll-behavior: smooth`,
    // which would otherwise animate this.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;