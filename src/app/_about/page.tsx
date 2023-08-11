import { fetchStories } from "@/api/story";
import Layout from "@/components/layout";

const About = async () => {
  const stories = await fetchStories();

  return (
    <Layout stories={stories}>
      <h2>About</h2>
    </Layout>
  );
};

export default About;
