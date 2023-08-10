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
  background: string;
  id: string;
  image: Image;
  order: number;
}

export interface Image {
  height: number;
  orientation: "horizontal" | "square" | "vertical";
  thumbnails: {
    full: string;
    large: string;
    small: string;
  };
  url: string;
  width: number;
}
