import { Lang } from "../i18n";
import { Section } from "./types";

// @TO-DO: key should be of type Section['id']
interface Sections {
  [key: string]: Section;
}

export const sections: Sections = {
  home: {
    id: "home",
    title: "Home",
  },
  about: {
    id: "about",
    title: { en: "About me", es: "Sobre mí" },
  },
  favorites: {
    id: "favorites",
    title: { en: "Favorites", es: "Favoritos" },
  },
  login: {
    id: "login",
    title: "Login",
  },
};

export const activeTitle = (section: Section["id"], lang: Lang): string => {
  const active = sections[section];

  return typeof active.title === "string" ? active.title : active.title[lang];
};
