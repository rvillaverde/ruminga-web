import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const PATH = "stories";

const URL = `${API_URL}/${PATH}`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "GET") {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      res.status(200).json(data);
    } catch (e: any) {
      console.log("error", e);

      res.status(500).json({
        apiURL: process.env.NEXT_PUBLIC_API_URL,
        code: "NEXT_API_ERROR",
        message: e.message,
        path: PATH,
        url: `${URL}`,
      });
    }
  }
};

export default handler;
