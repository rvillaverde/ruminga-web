import React from "react";
import { NextPage } from "next";
import { Story as StoryType } from "../../api/story";
import Story from "./story";

// import styles from "../../styles/Home.module.css";

interface PropTypes {
  current?: StoryType;
  // @TODO: Change to map
  favorites: StoryType[];
  index?: number;
  onAddFavorite: (story: StoryType) => void;
  onRemoveFavorite: (story: StoryType) => void;
  stories: StoryType[];
}

const Stories: NextPage<PropTypes> = (props: PropTypes) => {
  const {
    current,
    favorites,
    index,
    onAddFavorite,
    onRemoveFavorite,
    stories,
  } = props;

  const handleToggleFavorite = (story: StoryType) => (favorite: boolean) => {
    return favorite ? onRemoveFavorite(story) : onAddFavorite(story);
  };

  return (
    <div className="stories">
      {stories.map((story) => (
        <Story
          index={index || 0}
          isCurrent={!!current && current.id === story.id}
          isFavorite={favorites.some((f) => f.id === story.id)}
          key={story.id}
          onToggleFavorite={handleToggleFavorite(story)}
          story={story}
        />
      ))}
    </div>
  );
};

export default Stories;
