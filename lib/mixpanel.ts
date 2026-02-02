import mixpanel from "mixpanel-browser";

export const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "";
export const MIXPANEL_API_HOST =
  process.env.NEXT_PUBLIC_MIXPANEL_API_HOST || "";

// Track if Mixpanel has been initialized
let isMixpanelInitialized = false;

export const initMixpanel = (): boolean => {
  if (typeof window === "undefined") return false;
  if (!MIXPANEL_TOKEN) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[mixpanel] NEXT_PUBLIC_MIXPANEL_TOKEN is missing; tracking disabled.",
      );
    }
    return false;
  }
  if (isMixpanelInitialized) return true;

  try {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV === "development",
      persistence: "localStorage",
      ...(MIXPANEL_API_HOST ? { api_host: MIXPANEL_API_HOST } : {}),
      loaded: () => {
        isMixpanelInitialized = true;
      },
    });

    // mixpanel.init's loaded() callback should fire quickly, but mark ready
    // here too so we don't silently drop early events.
    isMixpanelInitialized = true;
    return true;
  } catch (error) {
    console.warn("[mixpanel] Failed to initialize:", error);
    return false;
  }
};

export const trackEvent = (name: string, properties?: Record<string, any>) => {
  // Always check for the most basic conditions first
  if (typeof window === "undefined") {
    return;
  }

  // Ensure initialization so early events aren't dropped.
  if (!isMixpanelInitialized) {
    initMixpanel();
  }

  // Check if mixpanel is available and has the track method
  if (!mixpanel || typeof mixpanel.track !== 'function') {
    return;
  }

  // Only track if we've initialized mixpanel
  if (!isMixpanelInitialized) {
    return;
  }

  try {
    mixpanel.track(name, properties);
  } catch (error) {
    console.warn('Failed to track Mixpanel event:', error);
  }
};
