import { API, handleError } from "..";

const API_URL = "http://localhost:3000";
const PATH = "stories";

const URL = `${API_URL}/${PATH}`;

export interface Story {
  id: string;
  name: string;
}

const mapStory = (data: any): Story => ({
  id: data.id,
  name: data.name,
});

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
