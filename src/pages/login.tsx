import React from "react";
import { NextPage } from "next";
import { Story } from "../api/story";
import App from "../app";

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
      page={"login"}
      stories={stories}
      story={story}
    />
  );
};

export default Index;
