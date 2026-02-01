import mixpanel from "mixpanel-browser";

export const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "";

export const initMixpanel = () => {
  if (MIXPANEL_TOKEN && typeof window !== 'undefined') {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV === "development",
      persistence: "localStorage",
    });
  }
};

export const trackEvent = (name: string, properties?: Record<string, any>) => {
  if (MIXPANEL_TOKEN) {
    mixpanel.track(name, properties);
  }
};
