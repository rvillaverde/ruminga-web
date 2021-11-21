import React from "react";
import { NextPage } from "next";
import { Story as StoryType } from "../../api/story";
import { Lang } from "../../i18n";
import Story from "./story";

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
  componentDidMount = () => {
    this.scrollToCurrent();
  };

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
      <div className="stories">
        {stories.map((story) => (
          <Story
            index={index || 0}
            isCurrent={!!current && current.id === story.id}
            isFavorite={favorites.some((f) => f === story.id)}
            lang={lang}
            key={story.id}
            onToggleFavorite={this.handleToggleFavorite(story)}
            story={story}
          />
        ))}
      </div>
    );
  }
}

export default Stories;
