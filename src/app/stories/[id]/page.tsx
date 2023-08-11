import { fetchStories, fetchStory } from "@/api/story";
import Layout from "@/components/layout";
import Story from "@/components/story/index";
import { Metadata } from "next";

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
    description: `${story.es.country}, ${story.year}.`,
    openGraph: {
      images: story.photos[0].image.url,
    },
    title: `Ruminga - ${story.es.name}`,
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
