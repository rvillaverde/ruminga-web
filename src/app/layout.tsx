import classNames from "classnames";
import type { Metadata } from "next";
import { Arapey, Quicksand } from "next/font/google";

import styles from "./page.module.sass";

import "../../styles/globals.sass";

const arapey = Arapey({ subsets: ["latin"], weight: ["400"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Diario fotográfico.",
  openGraph: {
    images: [
      {
        url: "/logo-horizontal.svg",
        height: 630,
        width: 1200,
      },
    ],
  },
  title: "Ruminga",
};

interface PropTypes {
  children: React.ReactNode;
}

const RootLayout = ({ children }: PropTypes) => (
  <html lang="en">
    <body
      className={classNames(
        styles.layout,
        arapey.className,
        quicksand.className
      )}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
