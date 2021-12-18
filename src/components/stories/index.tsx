import React from "react";
import { Story as StoryType } from "../../api/story";
import { Lang } from "../../i18n";
import Story from "./story";

// import styles from "./story.module.sass";

interface PropTypes {
  current?: StoryType;
  // @TODO: Change to map
  favorites: StoryType["id"][];
  lang: Lang;
  index?: number;
  onAddFavorite: (story: StoryType["id"]) => void;
  onRemoveFavorite: (story: StoryType["id"]) => void;
  stories: StoryType[];
}

class Stories extends React.Component<PropTypes> {
  componentDidMount = () => this.scrollToCurrent();

  get addressBarHeight(): number {
    const windowHeight = window.innerHeight;
    const main = document.getElementById("main");

    if (!main) return 0;

    const mainHeight = main.clientHeight;

    return mainHeight - windowHeight;
  }

  componentDidUpdate = (prevProps: PropTypes) =>
    this.props.current?.id !== prevProps.current?.id && this.scrollToCurrent();

  scrollToCurrent = () => {
    const { current } = this.props;

    current &&
      document &&
      document.getElementById(current.id)?.scrollIntoView();
  };

  handleToggleFavorite = ({ id }: StoryType) => (isFavorite: boolean) =>
    isFavorite ? this.props.onRemoveFavorite(id) : this.props.onAddFavorite(id);

  render() {
    const { current, favorites, index, lang, stories } = this.props;

    return (
      // <div className={styles.stories}>
      <React.Fragment>
        {stories.map((story) => (
          <Story
            index={index || 0}
            isCurrent={!!current && current.id === story.id}
            isFavorite={favorites.some((f) => f === story.id)}
            lang={lang}
            key={story.id}
            onToggleFavorite={this.handleToggleFavorite(story)}
            story={story}
            // style={
            //   this.addressBarHeight
            //     ? { paddingBottom: `${this.addressBarHeight}px` }
            //     : {}
            // }
          />
        ))}
      </React.Fragment>
      // </div>
    );
  }
}

export default Stories;
