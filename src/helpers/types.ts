export type Name = "about" | "favorites" | "home" | "login";

export interface Section {
  id: Name;
  title:
    | string
    | {
        [key: string]: string;
      };
}
