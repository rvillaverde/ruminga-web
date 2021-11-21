import { NextApiRequest, NextApiResponse } from "next";

const API_URL = process.env.API_URL;
const PATH = "stories";

const URL = `${API_URL}/${PATH}`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const response = await fetch(URL);
    const data = await response.json();

    res.status(200).json(data);
  }
};

export default handler;
