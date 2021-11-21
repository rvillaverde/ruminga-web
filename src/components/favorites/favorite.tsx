import React from "react";
import { Story } from "../../api/story";
import { Lang } from "../../i18n";

interface PropTypes {
  lang: Lang;
  onRemoveFavorite: () => void;
  story: Story;
}

const Favorite: React.FunctionComponent<PropTypes> = (props: PropTypes) => {
  const { lang, onRemoveFavorite, story } = props;

  const { name } = story[lang];

  return (
    <div className="favorite">
      <button onClick={onRemoveFavorite}>❤</button>
      <strong>{name}</strong>
    </div>
  );
};

export default Favorite;
