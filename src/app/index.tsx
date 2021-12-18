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
import { getLang, Lang } from "../i18n";
import About from "./about";
import Favorites from "./favorites";
import Home from "./home";
import Login from "./login";

import styles from "./app.module.sass";

type Page = Section["id"];

type MenuType = "fixed" | "floating";

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
  // const { lang: selectedLang } = cookie;

  // const lang = getLang({ locale, selectedLang });
  const lang = getLang({ locale });

  const title = activeTitle(page, lang);
  const isHome = page === "home";

  const handleFavoritesChange = (favorites: Story["id"][]) =>
    setCookie("favorites", favorites);

  const handleLanguageChange = (lang: Lang) => setCookie("lang", lang);

  const menuTypes: MenuType[] = ["fixed", "floating"];

  return (
    <div className={classNames(styles.container, { [styles.home]: isHome })}>
      <Head index={index} lang={lang} story={story} title={title} />

      <main className={styles.main} id="main">
        {loading ? (
          <Loading lang={lang} />
        ) : (
          <React.Fragment>
            {isHome ? (
              <Home
                index={index || 0}
                favorites={favorites}
                lang={lang}
                stories={stories}
                onFavoritesChange={handleFavoritesChange}
                onLangChange={handleLanguageChange}
                story={story}
              />
            ) : (
              <React.Fragment>
                <div className="page">
                  {page === "about" && texts && (
                    <About lang={lang} text={texts["about"]} title={title} />
                  )}
                  {page === "login" && <Login lang={lang} />}
                  {page === "favorites" && (
                    <Favorites
                      favorites={favorites}
                      lang={lang}
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

      {menuTypes.map((type) => (
        <Menu
          active={page}
          key={type}
          locale={locale as Lang}
          onLangChange={handleLanguageChange}
          type={type}
        />
      ))}
    </div>
  );
};

export default App;
