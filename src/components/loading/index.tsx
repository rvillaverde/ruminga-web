import React from "react";
import { Lang } from "../../i18n";

import styles from "./loading.module.sass";

interface PropTypes {
  lang: Lang;
}

const loadingText = {
  en: "Loading...",
  es: "Cargando...",
};

const Loading: React.FunctionComponent<PropTypes> = ({ lang }: PropTypes) => (
  <div className={styles.loading}>{loadingText[lang]}</div>
);

export default Loading;
