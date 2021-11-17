import { NextPage } from "next";
import React from "react";
import { Story as StoryType } from "../../api/story";

// import styles from "../../styles/Home.module.css";

interface PropTypes {
  index: number;
  isCurrent: boolean;
  isFavorite: boolean;
  onToggleFavorite: (isFavorite: boolean) => void;
  story: StoryType;
}

const Story: NextPage<PropTypes> = (props: PropTypes) => {
  const { index, isCurrent, isFavorite, onToggleFavorite, story } = props;

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
          <strong>{story.name}</strong>
          {" | "}
          {index}
        </React.Fragment>
      ) : (
        <span>{story.name}</span>
      )}
    </div>
  );
};

export default Story;
