import { NextPage } from "next";
import React from "react";

import styles from "../../../styles/Home.module.css";

interface PropTypes {
  lang: string;
}

const Login: React.FunctionComponent<PropTypes> = ({ lang }: PropTypes) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <p>lang: {lang}</p>
    </div>
  );
};

export default Login;
