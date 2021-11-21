import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { Story as StoryType } from "../../api/story";
import { Lang } from "../../i18n";

import styles from "./story.module.sass";
import { useRouter } from "next/router";

interface PropTypes {
  index: number;
  isCurrent: boolean;
  isFavorite: boolean;
  lang: Lang;
  onToggleFavorite: (isFavorite: boolean) => void;
  story: StoryType;
}

const Story: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
  const { isCurrent, isFavorite, lang, onToggleFavorite, story } = props;

  const { description, name } = story[lang];

  const handleToggleFavorite = () => {
    // console.log("handleToggleFavorite", !!isFavorite);
    return onToggleFavorite(!!isFavorite);
  };

  return (
    <div
      className={classnames(styles.story, {
        [styles.current]: isCurrent,
        [styles.favorite]: isFavorite,
      })}
      id={story.id}
    >
      <div className={styles.card}>
        <div className={styles.title}>
          <Link href={`/?storyId=${story.id}`}>
            <a>
              <h4>{name}</h4>
            </a>
          </Link>
          <button
            onClick={handleToggleFavorite}
            // style={{ color: isFavorite ? "red" : "black" }}
          >
            ❤
          </button>
        </div>
        {description && (
          <div className={styles.description}>
            <div className={styles["description-scroll"]}>
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.photos}>
        {story.photos.map((photo) => (
          <div className={styles.photo} key={photo.id}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${photo.image.url})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;