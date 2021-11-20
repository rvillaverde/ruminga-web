import React from "react";
import { Story } from "../../api/story";
import Stories from "../../common/stories";
import { Lang } from "../../i18n";

import styles from "../../../styles/Home.module.css";

interface PropTypes {
  favorites: Story["id"][];
  index: number;
  lang: Lang;
  onFavoritesChange: (favorites: Story["id"][]) => void;
  stories?: Story[];
  story?: Story;
}

const title = {
  en: "Hello world.",
  es: "Hola mundo.",
};

class Home extends React.Component<PropTypes> {
  handleAddFavorite = (id: Story["id"]) => {
    const { favorites, onFavoritesChange } = this.props;
    onFavoritesChange([...favorites, id]);
  };

  handleRemoveFavorite = (id: Story["id"]) => {
    const { favorites, onFavoritesChange } = this.props;
    onFavoritesChange([...favorites.filter((f) => f !== id)]);
  };

  render() {
    const { stories, favorites, story, index, lang } = this.props;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{title[lang]}</h1>

        {stories ? (
          <Stories
            current={story}
            favorites={favorites}
            index={index}
            lang={lang}
            onAddFavorite={this.handleAddFavorite}
            onRemoveFavorite={this.handleRemoveFavorite}
            stories={stories}
          />
        ) : (
          <div>Hubo un problema al cargar</div>
        )}
      </div>
    );
  }
}

export default Home;
