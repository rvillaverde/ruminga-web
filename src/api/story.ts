import { Story } from "@/types/story";

const URL = "https://api.ruminga.com/stories";

export const fetchStory = async (id: Story["id"]): Promise<Story> =>
  await fetch(`${URL}/${id}`).then((res) => res.json());

export const fetchStories = async (): Promise<Story[]> => {
  const stories: Story[] = await fetch(URL, {
    next: { tags: ["stories"] },
  }).then((res) => res.json());

  // stories.map(({ es: { name }, photos }) =>
  //   photos.map(({ background, image }) => {
  //     console.log("story", name);
  //     console.log("photo background", background);
  //     console.log("image", image);
  //   })
  // );

  return stories;
};
