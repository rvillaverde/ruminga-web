import type { NextPage, NextPageContext } from "next";
import NextHead from "next/head";
import React from "react";

// @TODO: get from env
const BASE_URL = "https://www.ruminga.com";

interface PropTypes {
  index?: number;
  story?: Story;
  title?: string;
}

// @TODO: move to global types dir
interface Story {
  id: string;
  name: string;
}

interface OgMetadata {
  url: string;
  title: string;
  image?: string;
  type?: string;
  description?: string;
}

class Head extends React.Component<PropTypes> {
  get title(): string {
    const { story, title } = this.props;

    return `${story ? story.name + " - " : title ? title + " - " : ""}Ruminga`;
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
        {/* <meta property="og:type" content="article" /> */}
        <meta property="og:title" content={og.title} />
        {/* <meta property="og:description" content="Ruminga" /> */}
        {/* <meta property="og:image" content="ruminga.com/logo.png" /> */}
      </NextHead>
    );
  }
}

// const Head2: NextPage<PropTypes> = (props: PropTypes) => {
//   const { story, index } = props;

//   const url = `${BASE_URL}${story ? "/stories/" + story.id : ""}${
//     index ? "/" + index : ""
//   }`;

//   const title = `${story ? story.name + " - " : ""}Ruminga`;

//   const og: OgMetadata = {
//     url,
//     title,
//   };

//   return (
//     <NextHead>
//       <title>Ruminga</title>
//       <meta name="description" content="Ruminga" />
//       <link rel="icon" href="/favicon.ico" />
//       <meta property="og:url" content={og.url} />
//       {/* <meta property="og:type" content="article" /> */}
//       <meta property="og:title" content={og.title} />
//       {/* <meta property="og:description" content="Ruminga" /> */}
//       {/* <meta property="og:image" content="ruminga.com/logo.png" /> */}
//     </NextHead>
//   );
// };

export default Head;
