import { useState, useEffect } from "react";
import { X, Zap } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem("announcementDismissed") !== "true";
    } catch {
      return true;
    }
  });

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem("announcementDismissed", "true");
    } catch {}

    try {
      window.dispatchEvent(new CustomEvent("dq:announcementDismissed"));
    } catch {
      // best-effort only
    }
  };

  return null;
}
// Legacy AnnouncementBar component has been replaced by TopAnnouncementBar.
// This file is kept only to avoid broken imports during refactors and can be
// safely removed once all usages are confirmed gone.

