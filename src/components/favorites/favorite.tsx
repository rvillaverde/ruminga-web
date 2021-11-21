import React from "react";
import { Story } from "../../api/story";
import { Lang } from "../../i18n";

import styles from "./favorite.module.sass";

interface PropTypes {
  lang: Lang;
  onRemoveFavorite: () => void;
  story: Story;
}

const Favorite: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
  const { lang, onRemoveFavorite, story } = props;

  const { name } = story[lang];

  return (
    <div className={styles.favorite}>
      <div className={styles.title}>
        <h4>{name}</h4>
        <button onClick={onRemoveFavorite}>❤</button>
      </div>
      <div className={styles.photos}>
        {story.photos.map((photo) => (
          <div className={styles.photo} key={photo.id}>
            <div
              className={styles.inner}
              style={{
                backgroundImage: `url(${photo.image.thumbnails.large})`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
