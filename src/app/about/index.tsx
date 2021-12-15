import React from "react";
import { Texts } from "../../api/texts";
import { Lang } from "../../i18n";

import styles from "./about.module.sass";

interface PropTypes {
  lang: Lang;
  title: string;
  text: Texts["about"];
}

const About: React.FunctionComponent<PropTypes> = ({
  lang,
  text,
  title,
}: PropTypes) => {
  return (
    <div className={styles.about}>
      <h2 className="header">{title}.</h2>
      <div className={styles.wrapper}>
        <div className={styles.photo}></div>
        <div className={styles.paragraph}>
          <p className={styles.text}>{text[lang]}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
