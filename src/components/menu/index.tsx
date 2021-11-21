import React, { useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Section } from "../../helpers/types";
import { Lang, locales, menu } from "../../i18n";
import MenuIcon from "../../icons/menu";

import styles from "./menu.module.sass";
import CloseIcon from "../../icons/close";

interface PropTypes {
  active: Section["id"];
  locale: Lang;
  type: "fixed" | "floating";
}

const About: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
  const { active, locale, type } = props;
  const { asPath } = useRouter();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const items = menu[locale];

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const isHome = active === "home";

  return (
    <div
      className={classnames(styles["menu-wrapper"], styles[type], {
        [styles.open]: menuOpen,
        [styles.home]: isHome,
      })}
    >
      <button className={styles["menu-toggle"]} onClick={toggleMenuOpen}>
        {menuOpen ? (
          <CloseIcon />
        ) : (
          <MenuIcon className={styles["menu-icon"]} />
        )}
      </button>
      <div
        className={classnames(styles.menu, {
          [styles["animate-in"]]: menuOpen,
          [styles["animate-out"]]: !menuOpen,
        })}
      >
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
      </div>
    </div>
  );
};

export default About;
