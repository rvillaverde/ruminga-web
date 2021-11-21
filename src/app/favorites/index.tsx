import React from "react";
import { Story } from "../../api/story";
import Favorites from "../../components/favorites";
import { Lang } from "../../i18n";

interface PropTypes {
  favorites?: Story["id"][];
  lang: Lang;
  onFavoritesChange: (favorites: Story["id"][]) => void;
  stories: Story[];
  title: string;
}

class Page extends React.Component<PropTypes> {
  handleRemoveFavorite = (id: Story["id"]) => {
    const { favorites, onFavoritesChange } = this.props;

    if (!favorites) return;

    onFavoritesChange([...favorites.filter((f) => f !== id)]);
  };

  get favorites(): Story[] {
    const { favorites, stories } = this.props;
    return favorites
      ? stories.filter((story) => favorites.indexOf(story.id) > -1)
      : [];
  }

  render() {
    const { favorites, lang } = this.props;

    return (
      <React.Fragment>
        {favorites && favorites.length ? (
          // @TODO: warning in console on SSR in this line
          <Favorites
            favorites={this.favorites}
            lang={lang}
            onRemoveFavorite={this.handleRemoveFavorite}
          />
        ) : (
          <p>No hay favoritos.</p>
        )}
      </React.Fragment>
    );
  }
}

export default Page;
