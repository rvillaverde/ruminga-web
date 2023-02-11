import { API, handleError } from "..";

const PATH = "stories";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const URL = `${BASE_URL}/api/${PATH}`;

interface StoryInfo {
  country: string;
  description: string;
  name: string;
  place: string;
}

export interface Story {
  background: "white" | "black";
  cardPosition: "left" | "right";
  en: StoryInfo;
  es: StoryInfo;
  id: string;
  order: number;
  photos: Photo[];
  year: number;
}

export interface Photo {
  id: string;
  image: Image;
  order: number;
}

export interface Image {
  orientation: "horizontal" | "square" | "vertical";
  thumbnails: {
    full: string;
    large: string;
    small: string;
  };
  url: string;
}

const mapStory = (data: any): Story => {
  const story: Story = {
    background: data.background || "white",
    cardPosition: data.cardPosition,
    id: data.id,
    en: {
      country: data.en.country,
      description: data.en.description,
      name: data.en.name,
      place: data.en.place,
    },
    es: {
      country: data.es.country,
      description: data.es.description,
      name: data.es.name,
      place: data.es.place,
    },
    order: data.order,
    photos: data.photos.map((photo: any) => ({
      id: photo.id,
      image: {
        orientation: photo.image.orientation,
        thumbnails: {
          full: photo.image.thumbnails.full,
          large: photo.image.thumbnails.large,
          small: photo.image.thumbnails.small,
        },
        url: photo.image.url,
      },
      order: photo.order,
    })),
    year: data.year,
  };

  return story;
};

const mapStories = (data: any[]): Story[] => data.map((d) => mapStory(d));

const api: API<Story> = {
  get: async (id: Story["id"]) => {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();

    if (data.error) {
      return handleError(data.error);
    }

    return Promise.resolve(mapStory(data));
  },
  list: async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${PATH}`
      );
      // const response = await fetch(URL);
      const data = await response.json();

      if (data.error) {
        return handleError(data.error);
      }

      return Promise.resolve(mapStories(data));
    } catch (e: any) {
      const message = `API_ERROR - base url: ${process.env.NEXT_PUBLIC_BASE_URL}`;
      Promise.reject(new Error(message));
    }
  },
};

export default api;
