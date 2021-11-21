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

  console.log("story", story?.id);
  console.log("storyId", storyId);

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
        // storyId: storyId as string,
      };
    } catch (e) {
      console.log("Error getting story", storyId, e);
    }
  } else {
    const { index: idx, storyId } = ctx.query;
    console.log("oda!", storyId);
    if (!storyId) return { loading: false };

    try {
      // const story = await storyAPI.get(storyId as Story["id"]);

      return {
        loading: false,
        storyId: storyId as string,
        // storyId: storyId as string,
      };
    } catch (e) {
      console.log("Error getting story", storyId, e);
    }
  }

  return { loading: false };
};

export default Index;
