import LoadingIcon from "@/components/icons/loading";

import styles from "./page.module.sass";

const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.container}>
      <div className={styles.spinner}>
        <LoadingIcon />
      </div>
    </div>
  </div>
);

export default Loading;
