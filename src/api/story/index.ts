import { API, handleError } from "..";

const API_URL = "http://localhost:3000";
const PATH = "stories";

const URL = `${API_URL}/${PATH}`;

interface StoryInfo {
  description: string;
  name: string;
}

export interface Story {
  en: StoryInfo;
  es: StoryInfo;
  id: string;
  order: number;
  photos: Photo[];
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
    id: data.id,
    en: {
      description: data.en.description,
      name: data.en.name,
    },
    es: {
      description: data.es.description,
      name: data.es.name,
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
    const response = await fetch(URL);
    const data = await response.json();

    if (data.error) {
      return handleError(data.error);
    }

    return Promise.resolve(mapStories(data));
  },
};

export default api;
