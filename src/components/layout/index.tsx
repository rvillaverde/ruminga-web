import { Story } from "@/types/story";
import Nav from "../nav";

import styles from "./layout.module.sass";

interface PropTypes {
  children: React.ReactNode;
  stories: Story[];
}

const Layout = ({ children, stories }: PropTypes) => {
  return (
    <>
      <Nav stories={stories} />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
