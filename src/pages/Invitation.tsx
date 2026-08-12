import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { invitationHtml } from "./invitationHtml";
import "./invitation.css";

/**
 * The formal invitation. The markup and styling come straight from the
 * standalone HTML invitation, so it stays pixel-identical to the version
 * that was designed and proofed offline.
 *
 * Two things make that safe to drop into the app:
 *   1. Every rule in invitation.css is prefixed with `.invite-page`, so the
 *      invitation's resets (including its `*` margin/padding reset) can't
 *      leak into the rest of the site.
 *   2. Its images live in /public/invite/ and are referenced by absolute
 *      path, so Vite doesn't need to resolve them at build time.
 */
const Invitation = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  // The invitation's own "RSVP Now" / "Give a Gift" buttons are plain anchors.
  // Catch same-site clicks so they route through React Router instead of
  // forcing a full page reload.
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (e.target as HTMLElement).closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href?.startsWith("/")) return; // external, mailto:, data: — leave alone
    if (anchor.hasAttribute("download") || anchor.target === "_blank") return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    e.preventDefault();
    navigate(href);
  };

  return (
    <main className="invite-page">
      <div
        ref={ref}
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: invitationHtml }}
      />
    </main>
  );
};

export default Invitation;