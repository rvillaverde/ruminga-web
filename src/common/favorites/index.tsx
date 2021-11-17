import React from "react";
import { NextPage } from "next";
import { Story } from "../../api/story";
import Favorite from "./favorite";

// import styles from "../../styles/Home.module.css";

interface PropTypes {
  favorites: Story[];
  onRemoveFavorite: (story: Story) => void;
}

const Favorites: NextPage<PropTypes> = (props: PropTypes) => {
  const { favorites, onRemoveFavorite } = props;

  const handleRemoveFavorote = (story: Story) => () => {
    return onRemoveFavorite(story);
  };

  return (
    <div className="favorites">
      {favorites.map((favorite) => (
        <Favorite
          key={favorite.id}
          onRemoveFavorite={handleRemoveFavorote(favorite)}
          story={favorite}
        />
      ))}
    </div>
  );
};

export default Favorites;
