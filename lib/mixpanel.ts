import mixpanel from "mixpanel-browser";

export const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "";

// Track if Mixpanel has been initialized
let isMixpanelInitialized = false;

export const initMixpanel = () => {
  if (MIXPANEL_TOKEN && typeof window !== 'undefined' && !isMixpanelInitialized) {
    try {
      mixpanel.init(MIXPANEL_TOKEN, {
        debug: process.env.NODE_ENV === "development",
        persistence: "localStorage",
      });
      isMixpanelInitialized = true;
    } catch (error) {
      console.warn('Failed to initialize Mixpanel:', error);
    }
  }
};

export const trackEvent = (name: string, properties?: Record<string, any>) => {
  // Always check for the most basic conditions first
  if (!MIXPANEL_TOKEN || typeof window === 'undefined') {
    return;
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
