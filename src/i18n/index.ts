import menu from "./menu";

export type Lang = "en" | "es";

export const defaultLocale: Lang = "es";

export const getLang = ({
  locale,
  selectedLang,
}: {
  locale?: string;
  selectedLang?: Lang;
}): Lang => selectedLang || (locale as Lang) || defaultLocale;

export const locales: Lang[] = ["en", "es"];

export { menu };
