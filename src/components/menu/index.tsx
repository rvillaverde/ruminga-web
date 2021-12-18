import React, { useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Section } from "../../helpers/types";
import { Lang } from "../../i18n";
import Logo from "../../icons/logo";
import Items from "./items";
import Locales from "./locales";
import SocialMedia from "./social-media";

import styles from "./menu.module.sass";

interface PropTypes {
  active: Section["id"];
  locale: Lang;
  onLangChange: (lang: Lang) => void;
  type: "fixed" | "floating";
}

const Menu: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
  const { active, locale, onLangChange, type } = props;
  const { asPath } = useRouter();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuAnimating, setMenuAnimating] = useState<boolean>(false);

  const isHome = active === "home";
  const isFloating = type === "floating";

  const menuStyle =
    isFloating && !menuAnimating && !menuOpen ? { display: "none" } : {};

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    setMenuAnimating(!menuAnimating);
  };

  const handleMenuAnimationEnd = () => {
    setMenuAnimating(!menuAnimating);
  };

  const handleLangChange = (lang: Lang) => () => {
    toggleMenuOpen();
    onLangChange(lang);
  };

  return (
    <div
      className={classnames(styles["menu-wrapper"], styles[type], {
        // [styles.open]: menuOpen,
        [styles.home]: isHome,
      })}
    >
      <div
        className={classnames(styles.menu, {
          [styles["animate-in"]]: menuAnimating && menuOpen,
          [styles["animate-out"]]: menuAnimating && !menuOpen,
        })}
        style={menuStyle}
        onAnimationEnd={handleMenuAnimationEnd}
      >
        <Link href={"/"}>
          <a>
            <Logo className={styles["menu-logo"]} />
          </a>
        </Link>
        <Items
          active={active}
          className={styles["menu-list"]}
          locale={locale}
        />
        <Locales
          className={styles["locales-list"]}
          locale={locale}
          onLangChange={handleLangChange}
        />
        <SocialMedia />
      </div>
      <button className={styles["menu-toggle"]}>
        <input type="checkbox" onChange={toggleMenuOpen} checked={!!menuOpen} />
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Menu;
