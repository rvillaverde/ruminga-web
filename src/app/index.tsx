import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { Story } from "../api/story";
import { Texts } from "../api/texts";
import Head from "../components/head";
import Loading from "../components/loading";
import Menu from "../components/menu";
import { Section } from "../helpers/types";
import { activeTitle } from "../helpers";
import { Lang, lang } from "../i18n";
import About from "./about";
import Favorites from "./favorites";
import Home from "./home";
import Login from "./login";

import styles from "./app.module.sass";

type Page = Section["id"];

interface PropTypes {
  index?: number;
  loading: boolean;
  page: Page;
  stories?: Story[];
  story?: Story;
  texts?: Texts;
}

const App: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
  const { story, stories, index, page, loading, texts } = props;

  const { locale } = useRouter();
  // const { locale, locales, defaultLocale } = useRouter();
  const [cookie, setCookie] = useCookies(["favorites", "lang"]);
  // @TODO: Not so nice? review or refactor
  const { favorites = [] } = cookie;

  const title = activeTitle(page, lang(locale));
  const isHome = page === "home";

  // @TODO: favorites should be an array of storyId and photo
  const handleFavoritesChange = (favorites: Story["id"][]) => {
    // console.log("handle favorites change", favorites);
    return setCookie("favorites", favorites);
  };

  return (
    <div className={classNames(styles.container, { [styles.home]: isHome })}>
      <Head index={index} lang={lang(locale)} story={story} title={title} />

      <main className={styles.main}>
        {loading ? (
          <Loading lang={lang(locale)} />
        ) : (
          <React.Fragment>
            {isHome ? (
              <Home
                index={index || 0}
                favorites={favorites}
                lang={lang(locale)}
                stories={stories}
                onFavoritesChange={handleFavoritesChange}
                story={story}
              />
            ) : (
              <React.Fragment>
                <div className="page">
                  {page === "about" && texts && (
                    <About
                      lang={lang(locale)}
                      title={title}
                      text={texts["about"]}
                    />
                  )}
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
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </main>

      <Menu active={page} locale={locale as Lang} />
    </div>
  );
};

export default App;
