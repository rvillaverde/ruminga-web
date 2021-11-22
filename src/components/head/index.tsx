import type { NextPage, NextPageContext } from "next";
import React from "react";
import NextHead from "next/head";
import { Story } from "../../api/story";
import { Lang } from "../../i18n";

const BASE_URL = process.env.BASE_URL;

interface PropTypes {
  index?: number;
  lang: Lang;
  story?: Story;
  title?: string;
}

interface OgMetadata {
  description?: string;
  image?: string;
  title: string;
  type?: string;
  url: string;
}

class Head extends React.Component<PropTypes> {
  get title(): string {
    const { lang, story, title } = this.props;
    const name = story && story[lang].name;

    return `${story ? name + " - " : title ? title + " - " : ""}Ruminga`;
  }

  get url(): string {
    const { story, index } = this.props;

    return `${BASE_URL}${story ? "/stories/" + story.id : ""}${
      index ? "/" + index : ""
    }`;
  }

  get og(): OgMetadata {
    const { title, url } = this;

    return {
      url,
      title,
    };
  }

  render() {
    const { og, title } = this;

    return (
      <NextHead>
        <title>{title}</title>
        <meta name="description" content="Ruminga" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={og.url} />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={og.title} />
        {/* <meta property="og:description" content="Ruminga" /> */}
        {/* <meta property="og:image" content="ruminga.com/logo.png" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&family=Quicksand:wght@300&display=swap"
          rel="stylesheet"
          key="fonts"
        ></link>
      </NextHead>
    );
  }
}

export default Head;
