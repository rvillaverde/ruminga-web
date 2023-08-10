import { fetchStories, fetchStory } from "@/api/story";
import Layout from "@/components/layout";
import Story from "@/components/story/index";
import { Metadata } from "next";
import styles from "./story.module.sass";

interface PropTypes {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: PropTypes): Promise<Metadata> {
  const story = await fetchStory(id);

  return {
    title: `${story.es.name} - Ruminga`,
    openGraph: {
      images: story.photos.map(({ image }) => image.url),
    },
  };
}

const Page = async ({ params: { id } }: PropTypes) => {
  const stories = await fetchStories();
  const story = stories.find((story) => story.id === id);

  if (!story) {
    return null;
  }

  return (
    <Layout stories={stories}>
      <Story key={story.id} story={story} />
    </Layout>
  );
};

export default Page;
