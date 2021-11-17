import menu from "./menu";

export type Lang = "en" | "es";

export const defaultLocale: Lang = "en";

export const lang = (locale?: string): Lang =>
  (locale as Lang) || defaultLocale;

export const locales: Lang[] = ["en", "es"];

export { menu };
