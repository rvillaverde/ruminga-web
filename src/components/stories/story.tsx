import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { Story as StoryType, Photo as StoryPhotoType } from "../../api/story";
import ChevronRight from "../../icons/chevronRight";
import HeartIcon from "../../icons/heart";
import { Lang } from "../../i18n";
import Carousel from "./carousel";

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
  activePhoto?: StoryPhotoType;
  collapsed: boolean;
}

class Story extends React.Component<PropTypes, StateTypes> {
  state: StateTypes = {
    collapsed: false,
  };

  handleCollaspe = () => this.setState({ collapsed: !this.state.collapsed });

  handleToggleFavorite = () =>
    this.props.onToggleFavorite(!!this.props.isFavorite);

  handleEnterCarousel = (photo: StoryPhotoType) => {
    window.addEventListener("keyup", this.handleKeyUp);

    this.setState({
      activePhoto: photo,
    });
  };

  handleExitCarousel = () => {
    window.removeEventListener("keyup", this.handleKeyUp);

    return this.setState({
      activePhoto: undefined,
    });
  };

  handleKeyUp = (e: KeyboardEvent) => {
    const { story } = this.props;
    const { activePhoto } = this.state;
    const { key } = e;

    const index = story.photos.findIndex(
      (photo) => photo.id === activePhoto?.id
    );

    if (key === "ArrowLeft" && index > 0) {
      this.setState({ activePhoto: story.photos[index - 1] });
    }

    if (key === "ArrowRight" && index < story.photos.length - 1) {
      this.setState({ activePhoto: story.photos[index + 1] });
    }
  };

  render() {
    const { isCurrent, isFavorite, lang, story } = this.props;
    const { activePhoto, collapsed } = this.state;

    const { country, description, name } = story[lang];

    return (
      <div
        className={classnames(styles.story, {
          [styles.current]: isCurrent,
          [styles.favorite]: isFavorite,
        })}
        id={story.id}
      >
        <div
          className={classnames(styles.card, styles[story.cardPosition], {
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
          <div className={styles.location}>
            <span className={styles.country}>{country}</span>,{" "}
            <span className={styles.year}>{story.year}</span>
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
        <Carousel
          activePhoto={activePhoto}
          lang={lang}
          onEnterFullScreen={this.handleEnterCarousel}
          onExitFullScreen={this.handleExitCarousel}
          story={story}
        />
      </div>
    );
  }
}

export default Story;
