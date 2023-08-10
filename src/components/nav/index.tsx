import { Story as StoryType } from "@/types/story";
import Link from "next/link";
// import { useState } from "react";
import Logo from "../icons/logo";
import SocialMedia from "../social-media";
import styles from "./nav.module.sass";

interface PropTypes {
  stories: StoryType[];
}

const Nav = ({ stories }: PropTypes) => {
  return (
    <nav className={styles.nav}>
      <input
        className={styles["nav-toggle"]}
        id="menu-toggle"
        type="checkbox"
      />

      <label htmlFor="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className={styles["nav-inner"]}>
        <Logo />

        <menu>
          <li>
            <Link href="/">Home</Link>
          </li>

          <details>
            <summary>Portfolio</summary>
            <ul>
              {stories.map(({ id, es: { name } }) => (
                <li key={id}>
                  <Link href={`/stories/${id}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </details>

          {/* <li>
            <Link href="/about">About</Link>
          </li> */}
        </menu>

        <SocialMedia />
      </div>
    </nav>
  );
};

export default Nav;
