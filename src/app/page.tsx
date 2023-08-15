import { fetchStories, fetchStoryPhotos } from "@/api/story";
import Layout from "@/components/layout";
import Story from "@/components/story/index";
import { Story as StoryType } from "@/types/story";

// const wait = async (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000))

const Home = async () => {
  const stories: StoryType[] = await fetchStories();
  const story = stories[0];
  const photos = await fetchStoryPhotos(story.id);

  return (
    <Layout stories={stories}>
      <Story photos={photos} story={story} />
    </Layout>
  );
};

export default Home;
