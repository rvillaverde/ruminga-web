import { Story } from "@/types/story";

const URL = `${process.env.API_URL}/stories`;

export const fetchStory = async (id: Story["id"]): Promise<Story> =>
  await fetch(`${URL}/${id}`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }

      return res.json();
    })
    .catch((e) => {
      console.error(`Error fetching story ${id}`, e);
    });

export const fetchStories = async (): Promise<Story[]> => {
  return fetch(URL, {
    next: { tags: ["stories"] },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }

      return res.json();
    })
    .catch((e) => {
      console.error("Error fetching stories", e);
    });
};
