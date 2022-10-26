import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const PATH = "stories";

const URL = `${API_URL}/${PATH}/`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { id } = req.query;

  if (req.method === "GET") {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();

    res.status(200).json(data);
  }
};

export default handler;
