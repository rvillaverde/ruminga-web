import React from "react";
import { NextPage } from "next";
import styles from "../../../styles/Home.module.css";
import { Story } from "../../api/story";
import Favorites from "../../common/favorites";

interface PropTypes {
  favorites?: Story[];
  onFavoritesChange: (favorites: Story[]) => void;
  title: string;
}

const Page: NextPage<PropTypes> = (props: PropTypes) => {
  const { favorites, onFavoritesChange, title } = props;

  const handleRemoveFavorite = (story: Story) => {
    if (!favorites) return;

    return onFavoritesChange([...favorites.filter((f) => f.id !== story.id)]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}.</h1>

      {favorites && favorites.length ? (
        // @TODO: warning in console on SSR in this line
        <Favorites
          favorites={favorites}
          onRemoveFavorite={handleRemoveFavorite}
        />
      ) : (
        <p>No hay favoritos.</p>
      )}
    </div>
  );
};

export default Page;
