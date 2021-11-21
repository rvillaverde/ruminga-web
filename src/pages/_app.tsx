import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import storyAPI, { Story } from "../api/story";

import "../../styles/globals.sass";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    setLoading(true);
    storyAPI.list().then((stories) => {
      setStories(stories);
      setLoading(false);
    });
  };

  return (
    <CookiesProvider>
      <Component {...pageProps} loading={loading} stories={stories} />
    </CookiesProvider>
  );
};

export default MyApp;
