import { fetchStories, fetchStory, fetchStoryPhotos } from "@/api/story";
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

  const { height, url, width } = story.thumbnail;

  return {
    description: `${story.es.country}, ${story.year}.`,
    openGraph: {
      description: `${story.es.country}, ${story.year}.`,
      images: [
        {
          height,
          url,
          type: "jpg",
          width,
        },
      ],
      siteName: `Ruminga - ${story.es.name}`,
      title: `Ruminga - ${story.es.name}`,
      type: "website",
      url: `https://www.ruminga.com/stories/${story.id}`,
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

  const photos = await fetchStoryPhotos(story.id);

  return (
    <Layout stories={stories}>
      <Story key={story.id} photos={photos} story={story} />
    </Layout>
  );
};

export default Page;
