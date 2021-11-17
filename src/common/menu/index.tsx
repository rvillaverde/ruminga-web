import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Section } from "../../helpers/types";
import { Lang, locales, menu } from "../../i18n";

import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";

interface PropTypes {
  active: Section["id"];
  locale: Lang;
}

const About: NextPage<PropTypes> = (props: PropTypes) => {
  const { active, locale } = props;
  const { asPath } = useRouter();

  const items = menu[locale];

  return (
    <div className="menu">
      <ul className="menu-list">
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
      <ul className="locales-list">
        {locales.map((l, i) => (
          <li key={l}>
            <React.Fragment>
              {i > 0 && " | "}
              {l === locale ? (
                <strong>{l}</strong>
              ) : (
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              )}
            </React.Fragment>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
