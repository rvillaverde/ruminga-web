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
  thumbnail: {
    height: number;
    url: string;
    width: number;
  };
  year: number;
}
