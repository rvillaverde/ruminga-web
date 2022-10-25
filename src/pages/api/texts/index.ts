import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

const API_URL = process.env.API_URL;
const PATH = "texts";

const URL = `${API_URL}/${PATH}`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "GET") {
    const response = await fetch(URL);
    const data = await response.json();

    res.status(200).json(data);
  }
};

export default handler;
