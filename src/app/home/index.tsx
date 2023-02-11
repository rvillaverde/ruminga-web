import React from "react";
import { Story } from "../../api/story";
import Footer from "../../components/footer";
import Stories from "../../components/stories";
import { Lang } from "../../i18n";

import styles from "./home.module.sass";

interface PropTypes {
  favorites: Story["id"][];
  index: number;
  lang: Lang;
  onFavoritesChange: (favorites: Story["id"][]) => void;
  onLangChange: (lang: Lang) => void;
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
    const { stories, favorites, story, index, lang, onLangChange } = this.props;

    return (
      <div className={styles.container}>
        {/* <div className={styles.welcome}>
            <h1>{title[lang]}</h1>
          </div> */}

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
        <Footer locale={lang} onLangChange={onLangChange} />
      </div>
    );
  }
}

export default Home;
