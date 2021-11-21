import React from "react";
import { Texts } from "../../api/texts";
import { Lang } from "../../i18n";

interface PropTypes {
  lang: Lang;
  title: string;
  text: Texts["about"];
}

const About: React.FunctionComponent<PropTypes> = ({
  lang,
  text,
  title,
}: PropTypes) => {
  return (
    <div>
      <h2 className="header">{title}.</h2>
      <p>{text[lang]}</p>
    </div>
  );
};

export default About;
