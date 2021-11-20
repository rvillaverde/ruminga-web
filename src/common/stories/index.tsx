import React from "react";
import { NextPage } from "next";
import { Story as StoryType } from "../../api/story";
import { Lang } from "../../i18n";
import Story from "./story";

// import styles from "../../styles/Home.module.css";

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

const Stories: NextPage<PropTypes> = (props: PropTypes) => {
  const {
    current,
    favorites,
    index,
    lang,
    onAddFavorite,
    onRemoveFavorite,
    stories,
  } = props;

  const handleToggleFavorite = ({ id }: StoryType) => (favorite: boolean) => {
    return favorite ? onRemoveFavorite(id) : onAddFavorite(id);
  };

  return (
    <div className="stories">
      {stories.map((story) => (
        <Story
          index={index || 0}
          isCurrent={!!current && current.id === story.id}
          isFavorite={favorites.some((f) => f === story.id)}
          lang={lang}
          key={story.id}
          onToggleFavorite={handleToggleFavorite(story)}
          story={story}
        />
      ))}
    </div>
  );
};

export default Stories;
