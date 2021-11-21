import React from "react";
import { Story } from "../../api/story";
import { Lang } from "../../i18n";
import Favorite from "./favorite";

import styles from "./favorite.module.sass";

interface PropTypes {
  favorites: Story[];
  lang: Lang;
  onRemoveFavorite: (story: Story["id"]) => void;
}

const Favorites: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
  const { favorites, lang, onRemoveFavorite } = props;

  const handleRemoveFavorote = (id: Story["id"]) => () => {
    return onRemoveFavorite(id);
  };

  return (
    <div className={styles.favorites}>
      {favorites.map((favorite) => (
        <Favorite
          key={favorite.id}
          lang={lang}
          onRemoveFavorite={handleRemoveFavorote(favorite.id)}
          story={favorite}
        />
      ))}
    </div>
  );
};

export default Favorites;
