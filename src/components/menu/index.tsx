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
}

const About: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
  const { active, locale } = props;
  const { asPath } = useRouter();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const items = menu[locale];

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const isHome = active === "home";

  const mountedStyle = {
    animation: `${styles.inAnimation} 250ms ease-in`,
    // animationFillMode: "forwards",
  };
  const unmountedStyle = {
    animation: `${styles.outAnimation} 270ms ease-out`,
    animationFillMode: "forwards",
  };

  return (
    <div
      className={classnames(styles["menu-wrapper"], {
        [styles.open]: menuOpen,
        [styles.home]: isHome,
      })}
    >
      {isHome && (
        <button className={styles["menu-toggle"]} onClick={toggleMenuOpen}>
          {menuOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon className={styles["menu-icon"]} />
          )}
        </button>
      )}
      <div
        className={styles.menu}
        style={isHome ? (menuOpen ? mountedStyle : unmountedStyle) : {}}
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
                      {l}
                    </Link>
                  )}
                </span>
              </React.Fragment>
            </li>
          ))}
        </ul>
      </div>
      {/* {menuOpen && (
        <React.Fragment>
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
                        {l}
                      </Link>
                    )}
                  </span>
                </React.Fragment>
              </li>
            ))}
          </ul>
        </React.Fragment>
      )} */}
    </div>
  );
};

export default About;
