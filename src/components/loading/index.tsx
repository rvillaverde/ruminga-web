import React from "react";
import { Lang } from "../../i18n";
import LoadingIcon from "../../icons/loading";

import styles from "./loading.module.sass";

interface PropTypes {
  lang?: Lang;
}

const Loading: React.FunctionComponent<PropTypes> = () => (
  <div className={styles.loading}>
    <div className={styles.container}>
      <div className={styles.spinner}>
        <LoadingIcon />
      </div>
    </div>
  </div>
);

export default Loading;
