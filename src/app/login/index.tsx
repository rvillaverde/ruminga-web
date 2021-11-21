import React from "react";

interface PropTypes {
  lang: string;
}

const Login: React.FunctionComponent<PropTypes> = ({ lang }: PropTypes) => {
  return (
    <div>
      <h1 className="header">Login</h1>
      <p>lang: {lang}</p>
    </div>
  );
};

export default Login;
