import React from "react";
import { Lang } from "../../i18n";
import { title } from "../../i18n/footer";
import Items from "../menu/items";
import Locales from "../menu/locales";
import SocialMedia from "../menu/social-media";

import styles from "./footer.module.sass";

interface PropTypes {
  locale: Lang;
  onLangChange: (lang: Lang) => void;
}

const Footer: React.FunctionComponent<PropTypes> = ({
  locale,
  onLangChange,
}: PropTypes) => {
  return (
    <div className={styles["footer-placeholder"]}>
      <div className={styles.footer}>
        <div className={styles["footer-content"]}>
          {/* <div className={styles.menu}>
            <Items
              active={"home"}
              className={styles["menu-list"]}
              locale={locale}
            />
            <Locales
              className={styles["locales-list"]}
              locale={locale}
              onLangChange={onLangChange}
            />
          </div> */}
          <div className={styles["social-media"]}>
            <SocialMedia />
          </div>
          {/* <div className={styles.newsletter}>
            <h4>{title[locale]}</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
