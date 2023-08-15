import { Photo } from "@/types/photo";
import { Story } from "@/types/story";

const URL = `${process.env.API_URL}/stories`;

export const fetchStory = async (id: Story["id"]): Promise<Story> =>
  await fetch(`${URL}/${id}`, {
    next: { tags: ["stories"] },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }

      return res.json();
    })
    .catch((e) => {
      console.error(`Error fetching story ${id}`, e);
    });

export const fetchStoryPhotos = async (id: Story["id"]): Promise<Photo[]> =>
  await fetch(`${URL}/${id}/photos`, { next: { revalidate: 0 } })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }

      return res.json();
    })
    .catch((e) => {
      console.error(`Error fetching photos for story ${id}`, e);
    });

export const fetchStories = async (): Promise<Story[]> =>
  fetch(URL, {
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
