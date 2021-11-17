import React from "react";
import { NextPage } from "next";
import { Story } from "../api/story";
import App from "../app";

import styles from "../../styles/Home.module.css";

interface PropTypes {
  index?: number;
  loading: boolean;
  stories?: Story[];
  story?: Story;
}

const Index: NextPage<PropTypes> = (props: PropTypes) => {
  const { index, loading, story, stories } = props;

  return (
    <App
      index={index}
      loading={loading}
      page={"home"}
      stories={stories}
      story={story}
    />
  );
};

export default Index;
