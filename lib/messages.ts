import en from "@/messages/en.json";
import es from "@/messages/es.json";

export type Locale = "en" | "es";
export type Messages = typeof en;

const messages: Record<Locale, Messages> = {
  en,
  es,
};

export const getMessages = (locale: Locale): Messages => messages[locale];
