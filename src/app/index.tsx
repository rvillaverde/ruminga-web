import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { Story } from "../api/story";
import Head from "../components/head";
import Menu from "../components/menu";
import { Section } from "../helpers/types";
import { activeTitle } from "../helpers";
import { Lang, lang } from "../i18n";
import About from "./about";
import Favorites from "./favorites";
import Home from "./home";
import Login from "./login";

import styles from "../../styles/Home.module.css";

type Page = Section["id"];

interface PropTypes {
  index?: number;
  loading: boolean;
  page: Page;
  stories?: Story[];
  story?: Story;
}

const loadingText = {
  en: "Loading...",
  es: "Cargando...",
};

const App: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
  const { story, stories, index, page, loading } = props;

  const { locale } = useRouter();
  // const { locale, locales, defaultLocale } = useRouter();
  const [cookie, setCookie] = useCookies(["favorites", "lang"]);
  // @TODO: Not so nice? review or refactor
  const { favorites = [] } = cookie;

  const title = activeTitle(page, lang(locale));

  // @TODO: favorites should be an array of storyId and photo
  const handleFavoritesChange = (favorites: Story["id"][]) => {
    // console.log("handle favorites change", favorites);
    return setCookie("favorites", JSON.stringify(favorites));
  };

  return (
    <div className={styles.container}>
      <Head index={index} lang={lang(locale)} story={story} title={title} />

      <main className={styles.main}>
        {loading ? (
          <div>{loadingText[lang(locale)]}</div>
        ) : (
          <React.Fragment>
            {page === "home" && (
              <Home
                index={index || 0}
                favorites={favorites}
                lang={lang(locale)}
                stories={stories}
                onFavoritesChange={handleFavoritesChange}
                story={story}
              />
            )}
            {page === "about" && <About lang={lang(locale)} title={title} />}
            {page === "login" && <Login lang={lang(locale)} />}
            {page === "favorites" && (
              <Favorites
                favorites={favorites}
                lang={lang(locale)}
                onFavoritesChange={handleFavoritesChange}
                stories={stories || []}
                title={title}
              />
            )}
          </React.Fragment>
        )}
      </main>

      <Menu active={page} locale={locale as Lang} />
    </div>
  );
};

export default App;
