"use client";

import { useEffect, Suspense, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initMixpanel, trackEvent } from "@/lib/mixpanel";

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMixpanelReady, setIsMixpanelReady] = useState(false);

  useEffect(() => {
    const ok = initMixpanel();
    // Small delay to ensure Mixpanel is properly initialized
    setTimeout(() => setIsMixpanelReady(ok), 100);
  }, []);

  // Scroll depth tracking
  useEffect(() => {
    if (!isMixpanelReady) return;

    const scrollDepths = [25, 50, 75, 100];
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      scrollDepths.forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          trackEvent("Scroll Depth Reached", {
            depth: depth,
            path: pathname,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, isMixpanelReady]);

  useEffect(() => {
    if (pathname && isMixpanelReady) {
      const url = window.location.origin + pathname + (searchParams?.toString() ? "?" + searchParams.toString() : "");
      trackEvent("Page View", {
        $current_url: url,
        path: pathname,
      });
    }
  }, [pathname, searchParams, isMixpanelReady]);

  // Manual test event for Mixpanel "Verify connection" step.
  // Visit any page with `?mp_test=1` (or `&mp_test=1`) to send it.
  useEffect(() => {
    if (!isMixpanelReady) return;
    if (searchParams?.get("mp_test") !== "1") return;

    trackEvent("Mixpanel Test Event", {
      path: pathname,
      $current_url:
        window.location.origin +
        pathname +
        (searchParams?.toString() ? "?" + searchParams.toString() : ""),
      triggered_by: "mp_test_query_param",
      ts: new Date().toISOString(),
    });
  }, [pathname, searchParams, isMixpanelReady]);

  return null;
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
}
