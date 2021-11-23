import React, { useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Section } from "../../helpers/types";
import { Lang, locales, menu } from "../../i18n";
import CloseIcon from "../../icons/close";
import Logo from "../../icons/logo";
import MenuIcon from "../../icons/menu";
import SocialMedia from "./social-media";

import styles from "./menu.module.sass";

interface PropTypes {
  active: Section["id"];
  locale: Lang;
  type: "fixed" | "floating";
}

const About: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
  const { active, locale, type } = props;
  const { asPath } = useRouter();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuAnimating, setMenuAnimating] = useState<boolean>(false);

  const items = menu[locale];
  const isHome = active === "home";
  const isFloating = type === "floating";

  const menuStyle =
    isFloating && !menuAnimating && !menuOpen ? { display: "none" } : {};

  const toggleMenuOpen = () => setMenuOpen(!menuOpen);

  const handleMenuAnimation = () => setMenuAnimating(!menuAnimating);

  const handleMenuAnimationEnd = () => {
    handleMenuAnimation();
    toggleMenuOpen();
  };

  return (
    <div
      className={classnames(styles["menu-wrapper"], styles[type], {
        [styles.open]: !menuAnimating && menuOpen,
        [styles.home]: isHome,
      })}
    >
      <button className={styles["menu-toggle"]} onClick={handleMenuAnimation}>
        {menuOpen ? (
          <CloseIcon />
        ) : (
          <MenuIcon className={styles["menu-icon"]} />
        )}
      </button>
      <div
        className={classnames(styles.menu, {
          [styles["animate-in"]]: menuAnimating && !menuOpen,
          [styles["animate-out"]]: menuAnimating && menuOpen,
        })}
        style={menuStyle}
        onAnimationEnd={handleMenuAnimationEnd}
      >
        <Logo className={styles["menu-logo"]} />
        <ul className={styles["menu-list"]}>
          {items.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>
                {active === item.id ? (
                  <strong>{item.label}</strong>
                ) : (
                  <a>{item.label}</a>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles["locales-list"]}>
          {locales.map((l, i) => (
            <li key={l}>
              <React.Fragment>
                {i > 0 && "|"}
                <span className={styles.locale}>
                  {l === locale ? (
                    <strong>{l}</strong>
                  ) : (
                    <Link href={asPath} locale={l}>
                      <a onClick={toggleMenuOpen}>{l}</a>
                    </Link>
                  )}
                </span>
              </React.Fragment>
            </li>
          ))}
        </ul>
        <SocialMedia />
      </div>
    </div>
  );
};

export default About;
