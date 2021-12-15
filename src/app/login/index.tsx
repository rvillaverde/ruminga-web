import React from "react";

interface PropTypes {
  lang: string;
}

const Login: React.FunctionComponent<PropTypes> = ({ lang }: PropTypes) => {
  return (
    <React.Fragment>
      <div>
        <h2 className="header">Login</h2>
        <p>lang: {lang}</p>
      </div>
    </React.Fragment>
  );
};

export default Login;
