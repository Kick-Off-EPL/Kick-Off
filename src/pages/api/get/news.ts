import type { AxiosResponse } from "axios";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const response: AxiosResponse = await axios.get(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      `https://newsapi.org/v2/?q=premier league&apiKey=${process.env
        .NEWS_SECRET_KEY!}`
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}
