import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { Story as StoryType } from "../../api/story";
import ChevronRight from "../../icons/chevronRight";
import HeartIcon from "../../icons/heart";
import { Lang } from "../../i18n";

import styles from "./story.module.sass";

interface PropTypes {
  index: number;
  isCurrent: boolean;
  isFavorite: boolean;
  lang: Lang;
  onToggleFavorite: (isFavorite: boolean) => void;
  story: StoryType;
}

interface StateTypes {
  collapsed: boolean;
}

class Story extends React.Component<PropTypes, StateTypes> {
  state = {
    collapsed: false,
  };

  handleCollaspe = () => this.setState({ collapsed: !this.state.collapsed });

  handleToggleFavorite = () =>
    this.props.onToggleFavorite(!!this.props.isFavorite);

  render() {
    const { isCurrent, isFavorite, lang, onToggleFavorite, story } = this.props;
    const { collapsed } = this.state;

    const { description, name } = story[lang];

    return (
      <div
        className={classnames(styles.story, {
          [styles.current]: isCurrent,
          [styles.favorite]: isFavorite,
        })}
        id={story.id}
      >
        <div
          className={classnames(styles.card, {
            [styles.collapsed]: collapsed,
          })}
        >
          <div className={styles.title}>
            <Link href={`/?storyId=${story.id}`}>
              <a>
                <h4>{name}</h4>
              </a>
            </Link>
            <button onClick={this.handleToggleFavorite}>
              <HeartIcon isFavorite={isFavorite} />
            </button>
          </div>
          {description && (
            <div className={styles.description}>
              <div className={styles["description-scroll"]}>
                <p>{description}</p>
              </div>
            </div>
          )}
          <div className={styles.collapse} onClick={this.handleCollaspe}>
            <ChevronRight />
          </div>
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
  }
}

export default Story;
