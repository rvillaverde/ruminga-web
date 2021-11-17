import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import storyAPI, { Story } from "../api/story";
import Head from "../common/head";
import Menu from "../common/menu";
import Home from "./home";
import About from "./about";
import Favorites from "./favorites";
import Login from "./login";

import styles from "../../styles/Home.module.css";

import { defaultLocale, Lang, menu, lang } from "../i18n";
import { Section } from "../helpers/types";
import { MenuItem } from "../i18n/menu";
import { activeTitle, sections } from "../helpers";

type Page = Section["id"];

interface PropTypes {
  index?: number;
  story?: Story;
  stories?: Story[];
  page: Page;
  loading: boolean;
}

const App: NextPage<PropTypes> = (props: PropTypes) => {
  const { story, stories, index, page, loading } = props;

  const { locale } = useRouter();
  // const { locale, locales, defaultLocale } = useRouter();
  const [cookie, setCookie] = useCookies(["favorites", "lang"]);
  // @TODO: Not so nice? review or refactor
  const { favorites = [] } = cookie;

  const title = activeTitle(page, lang(locale));

  // @TODO: favorites should be an array of storyId and photo
  const handleFavoritesChange = (favorites: Story[]) => {
    return setCookie("favorites", JSON.stringify(favorites));
  };

  return (
    <div className={styles.container}>
      <Head index={index} story={story} title={title} />

      <main className={styles.main}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <React.Fragment>
            {page === "home" && (
              <Home
                index={index || 0}
                favorites={favorites}
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
                onFavoritesChange={handleFavoritesChange}
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

// @TODO: FETCH COOKIES
App.getInitialProps = async (ctx): Promise<PropTypes> => {
  const isServer = !!ctx.req;

  if (isServer) {
    const { index: idx, storyId } = ctx.query;

    if (!storyId) return { loading: false, page: "home" };

    try {
      const story = await storyAPI.get(storyId as Story["id"]);

      return {
        index: idx ? Number(idx) : 0,
        loading: false,
        page: "home",
        story,
      };
    } catch (e) {
      console.log("Error getting story", storyId, e);
    }
  }

  return { loading: false, page: "home" };
};

export default App;
