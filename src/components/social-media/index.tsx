import React from "react";
import FiveHundredPX from "../icons/500px";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";

import styles from "./social-media.module.sass";

interface SocialMedia {
  name: string;
  url: string;
  icon: JSX.Element;
}

const items: SocialMedia[] = [
  {
    icon: <Facebook />,
    name: "facebook",
    url: "https://www.facebook.com/ruminga",
  },
  {
    icon: <Instagram />,
    name: "instagram",
    url: "https://www.instagram.com/ruminga",
  },
  {
    icon: <FiveHundredPX />,
    name: "500px",
    url: "https://www.500px.com/ruminga",
  },
];

const SocialMedia: React.FunctionComponent = () => (
  <ul className={styles["social-media-list"]}>
    {items.map((item) => (
      <li className={styles["social-media-item"]} key={item.name}>
        <a href={item.url} rel="noreferrer" target="_blank">
          {item.icon}
        </a>
      </li>
    ))}
  </ul>
);

export default SocialMedia;
