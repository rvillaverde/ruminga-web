import React from "react";
import { NextPage } from "next";
import { Story } from "../api/story";
import App from "../app";

import styles from "../../styles/Home.module.css";

interface PropTypes {
  stories?: Story[];
  loading: boolean;
}

const Favorites: NextPage<PropTypes> = (props: PropTypes) => {
  const { loading, stories } = props;

  return <App page={"favorites"} loading={loading} stories={stories} />;
};

export default Favorites;
