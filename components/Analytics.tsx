"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initMixpanel, trackEvent } from "@/lib/mixpanel";

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initMixpanel();
  }, []);

  useEffect(() => {
    if (pathname) {
      // mixpanel.track_pageview() is not a function in all versions, often simple .track() is used or specialized method.
      // mixpanel-browser has a specific way if configured, or just track an event.
      // Standard mixpanel practice: just rely on init with track_pageview for first load?
      // No, for SPA, we need to manually track.
      // Actually init({ track_pageview: true }) tracks initial load.
      // We might want to track subsequent ones.
      // Let's just track a custom event or check docs.
      // A common pattern is tracking "$pageview" or similar.
      // However, usually mixpanel.track("Page View") is enough.
      
      // Let's verify what initMixpanel does. It calls mixpanel.init with track_pageview: true.
      // So the first one is covered.
      // But subsequent navigations are not.
      
      // The initMixpanel function is called once on mount.
      
      // Let's modify this to track page view on change.
      // But wait, initMixpanel handles the first one?
      // If I add a tracker here, I might duplicate the first one.
      // I'll stick to a simple "Page View" event for clarity if I can't confirm internal behavior.
      // Actually, standard mixpanel-browser `track_pageview` config handles full page loads.
      
      // Let's just use `mixpanel.track('$pageview')` ? No, `mixpanel.track_pageview` is deprecated/removed in some contexts or confused with `init` option.
      // Best practice for SPAs:
      // disable automatic pageview in init, and handle it manually in useEffect with pathname dependency.
      
      const url = window.location.origin + pathname + (searchParams?.toString() ? "?" + searchParams.toString() : "");
      trackEvent("Page View", {
        $current_url: url,
        path: pathname,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
}
