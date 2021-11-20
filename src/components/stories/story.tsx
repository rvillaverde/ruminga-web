import React from "react";
import { NextPage } from "next";
import { Story as StoryType } from "../../api/story";
import { Lang } from "../../i18n";

// import styles from "../../styles/Home.module.css";

interface PropTypes {
  index: number;
  isCurrent: boolean;
  isFavorite: boolean;
  lang: Lang;
  onToggleFavorite: (isFavorite: boolean) => void;
  story: StoryType;
}

const Story: NextPage<PropTypes> = (props: PropTypes) => {
  const { index, isCurrent, isFavorite, lang, onToggleFavorite, story } = props;

  const { description, name } = story[lang];

  const handleClick = () => {
    return onToggleFavorite(!!isFavorite);
  };

  return (
    <div className="story">
      <button
        onClick={handleClick}
        style={{ color: isFavorite ? "red" : "black" }}
      >
        ❤
      </button>
      {isCurrent ? (
        <React.Fragment>
          <strong>{name}</strong>
          {" | "}
          {index}
        </React.Fragment>
      ) : (
        <span>{name}</span>
      )}
      <p>{description}</p>
    </div>
  );
};

export default Story;
