import React from "react";
import { Lang } from "../../i18n";

interface PropTypes {
  lang: Lang;
  title: string;
}

const text = {
  en: "Here goes about me text.",
  es: "Acá va el texto sobre mí.",
};

const About: React.FunctionComponent<PropTypes> = ({
  lang,
  title,
}: PropTypes) => {
  return (
    <div>
      <h1 className="header">{title}.</h1>
      <p>{text[lang]}</p>
    </div>
  );
};

export default About;
