import React from "react";
import { NextPage } from "next";
import { Story } from "../api/story";
import App from "../app";

interface PropTypes {
  stories?: Story[];
  loading: boolean;
}

const Favorites: NextPage<PropTypes> = (props: PropTypes) => {
  const { loading, stories } = props;

  return <App page={"favorites"} loading={loading} stories={stories} />;
};

export default Favorites;
