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
    description: "Diario fotográfico.",
    images: [
      {
        url: "logo.png",
        height: 630,
        type: "png",
        width: 1200,
      },
    ],
    siteName: "Ruminga",
    title: "Ruminga",
    type: "website",
    url: "https://www.ruminga.com",
  },
  metadataBase: new URL("https://www.ruminga.com"),
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
