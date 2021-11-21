import React from "react";
import { NextPage } from "next";
import { Story } from "../api/story";
import { getTexts, Texts } from "../api/text";
import App from "../app";

interface PropTypes {
  loading: boolean;
  stories?: Story[];
  texts: Texts;
}

const About: NextPage<PropTypes> = (props: PropTypes) => {
  const { loading, stories, texts } = props;

  return (
    <App loading={loading} page={"about"} stories={stories} texts={texts} />
  );
};

About.getInitialProps = async (): Promise<PropTypes> => {
  const texts = await getTexts();

  return { loading: false, texts };
};

export default About;
