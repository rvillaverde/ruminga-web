import { API, handleError } from "..";

const API_URL = "http://localhost:3000";
const PATH = "texts";

const URL = `${API_URL}/${PATH}`;

export interface Texts {
  about: Text;
}

interface Text {
  en: string;
  es: string;
  id: string;
}

const mapText = (data: any): Text => ({
  id: data.id,
  en: data.en,
  es: data.es,
});

const mapTexts = (data: any[]): Text[] => data.map(mapText);

export const getTexts = async (): Promise<Texts> => {
  const texts = await api.list();

  return {
    about: texts.find((t) => t.id === "about") as Text,
  };
};

const api: API<Text> = {
  get: async (id: Text["id"]) => {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();

    if (data.error) {
      return handleError(data.error);
    }

    return Promise.resolve(mapText(data));
  },
  list: async () => {
    const response = await fetch(URL);
    const data = await response.json();

    console.log("data", data);

    if (data.error) {
      return handleError(data.error);
    }

    return Promise.resolve(mapTexts(data));
  },
};

export default api;
