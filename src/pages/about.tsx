import React from "react";
import { NextPage } from "next";
import { Story } from "../api/story";
import App from "../app";

interface PropTypes {
  loading: boolean;
  stories?: Story[];
}

const About: NextPage<PropTypes> = (props: PropTypes) => {
  const { loading, stories } = props;

  return <App loading={loading} page={"about"} stories={stories} />;
};

export default About;
