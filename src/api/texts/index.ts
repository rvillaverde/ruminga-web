import { API, handleError } from "..";

const PATH = "texts";
const BASE_URL = process.env.BASE_URL;
const URL = `${BASE_URL}/api/${PATH}`;

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

// @TODO: fix baseUrl
export const getTexts = async (): Promise<Texts> => {
  const response = await fetch(`${URL}`);
  const data = await response.json();

  if (data.error) {
    return handleError(data.error);
  }

  const texts = mapTexts(data);

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
    console.log("list texts", URL);
    const response = await fetch(URL);
    const data = await response.json();

    if (data.error) {
      return handleError(data.error);
    }

    return Promise.resolve(mapTexts(data));
  },
};

export default api;
