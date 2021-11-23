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

interface Og {
  description: string;
  image: string;
  title: string;
  type?: string;
  url: string;
}

const description = {
  en: "Photo diary",
  es: "Diario fotográfico",
};

class Head extends React.Component<PropTypes> {
  get description(): Og["description"] {
    const { lang } = this.props;

    return description[lang];
  }

  get image(): Og["image"] {
    const { story } = this.props;

    return `${story ? story.photos[0].image.thumbnails.large : ""}`;
  }

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

  get og(): Og {
    const { description, image, title, url } = this;

    return {
      description,
      image,
      title,
      url,
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
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />
        <link
          href="https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          key="fonts"
        ></link>
      </NextHead>
    );
  }
}

export default Head;
