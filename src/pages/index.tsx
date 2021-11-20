import React from "react";
import { NextPage } from "next";
import storyAPI, { Story } from "../api/story";
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

Index.getInitialProps = async (ctx): Promise<PropTypes> => {
  const isServer = !!ctx.req;

  if (isServer) {
    const { index: idx, storyId } = ctx.query;

    if (!storyId) return { loading: false };

    try {
      const story = await storyAPI.get(storyId as Story["id"]);

      return {
        index: idx ? Number(idx) : 0,
        loading: false,
        story,
      };
    } catch (e) {
      console.log("Error getting story", storyId, e);
    }
  }

  return { loading: false };
};

export default Index;
