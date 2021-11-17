import { Section } from "../helpers/types";
import { Lang } from ".";

// @TO-DO: key should be of type Section['id']
interface Menu {
  [key: string]: MenuItem[];
}

export interface MenuItem {
  id: Section["id"];
  label: string;
  href: string;
}

interface RawItem extends Omit<MenuItem, "label"> {
  labels:
    | MenuItem["label"]
    | {
        [key: string]: string;
      };
}

const rawItems: RawItem[] = [
  {
    id: "home",
    labels: "Home",
    href: "/",
  },
  {
    id: "about",
    labels: { en: "About me", es: "Sobre mí" },
    href: "/about",
  },
  {
    id: "favorites",
    labels: { en: "Favorites", es: "Favoritos" },
    href: "/favorites",
  },
  {
    id: "login",
    labels: "Login",
    href: "/login",
  },
];

const items = (lang: Lang): MenuItem[] =>
  rawItems.map(({ id, href, labels }: RawItem) => ({
    id,
    label: typeof labels === "string" ? labels : labels[lang],
    href,
  }));

const menu: Menu = {
  en: items("en"),
  es: items("es"),
};

export default menu;
