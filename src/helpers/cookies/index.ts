import cookie from "cookie";
import { NextPageContext } from "next";

export interface Cookies {
  [key: string]: string;
}

export const parseCookies = (req: NextPageContext["req"]): Cookies =>
  cookie.parse(req ? req.headers.cookie || "" : document.cookie);
