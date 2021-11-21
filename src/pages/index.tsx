import React from "react";
import { NextPage } from "next";
import storyAPI, { Story } from "../api/story";
import App from "../app";

interface PropTypes {
  index?: number;
  loading: boolean;
  stories?: Story[];
  story?: Story;
  storyId?: Story["id"];
}

const Index: NextPage<PropTypes> = (props: PropTypes) => {
  const { index, loading, story, storyId, stories } = props;

  const current = story
    ? story
    : storyId
    ? stories?.find(({ id }) => id === storyId)
    : undefined;

  return (
    <App
      index={index}
      loading={loading}
      page={"home"}
      stories={stories}
      story={current}
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
  } else {
    const { storyId } = ctx.query;

    return {
      loading: false,
      storyId: storyId as string,
    };
  }

  return { loading: false };
};

export default Index;
