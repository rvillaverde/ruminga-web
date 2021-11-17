// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface Story {
  id: string;
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Story>
) {
  res.status(200).json({ id: "fake-story", name: "Fake story" });
}
