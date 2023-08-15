export interface Photo {
  background: string;
  id: string;
  image: Image;
  order: number;
}

export interface Image {
  height: number;
  orientation: "horizontal" | "square" | "vertical";
  url: string;
  width: number;
}
