import React from "react";
import { NextPage } from "next";
import { Lang } from "../../i18n";

import styles from "../../../styles/Home.module.css";

interface PropTypes {
  lang: Lang;
  title: string;
}

const text = {
  en: "Here goes about me text.",
  es: "Acá va el texto sobre mí.",
};

const About: NextPage<PropTypes> = ({ lang, title }: PropTypes) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}.</h1>
      <p>{text[lang]}</p>
    </div>
  );
};

export default About;
