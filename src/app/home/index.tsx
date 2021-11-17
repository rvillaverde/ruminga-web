import { NextPage } from "next";
import React from "react";
import { Story } from "../../api/story";

import styles from "../../../styles/Home.module.css";
import Stories from "../../common/stories";

interface PropTypes {
  favorites: Story[];
  index: number;
  onFavoritesChange: (favorites: Story[]) => void;
  stories?: Story[];
  story?: Story;
}

const Home: NextPage<PropTypes> = (props: PropTypes) => {
  const { stories, favorites, story, index, onFavoritesChange } = props;

  const handleAddFavorite = (story: Story) => {
    console.log("handle add favorite", [...favorites, story]);
    return onFavoritesChange([...favorites, story]);
  };

  const handleRemoveFavorite = (story: Story) => {
    console.log("handle remove favorite");
    return onFavoritesChange([...favorites.filter((f) => f.id !== story.id)]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hola mundo.</h1>

      {stories ? (
        <Stories
          current={story}
          favorites={favorites}
          index={index}
          onAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
          stories={stories}
        />
      ) : (
        <div>Hubo un problema al cargar</div>
      )}
    </div>
  );
};

export default Home;
