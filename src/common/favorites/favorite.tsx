import { NextPage } from "next";
import React from "react";
import { Story } from "../../api/story";

// import styles from "../../styles/Home.module.css";

interface PropTypes {
  onRemoveFavorite: () => void;
  story: Story;
}

const Favorite: NextPage<PropTypes> = (props: PropTypes) => {
  const { onRemoveFavorite, story } = props;

  return (
    <div className="favorite">
      <button onClick={onRemoveFavorite}>❤</button>
      <strong>{story.name}</strong>
    </div>
  );
};

export default Favorite;
