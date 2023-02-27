import type { NextApiRequest, NextApiResponse } from "next";
import getSeason from "../../../utils/getSeason";
import type { FixtureResponseData } from "../../../utils/types";

interface ResponseFuncs {
  GET?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
  POST?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
  PUT?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
  DELETE?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}

const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?`;
const key = process.env.RAPIDAPI_KEY as string;
const host = process.env.RAPIDAPI_HOST as string;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  const dateString = req.query.dateString as string;
  const date = new Date(dateString);

  const season = getSeason(date);
  const parsedDate = date.toISOString().slice(0, 10);
  const params = {
    season,
    league: "39",
    date: parsedDate,
  };

  const catcher = (error: Error) => res.status(400).json({ error });

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const searchUrl = url + new URLSearchParams(params).toString();
      const data = await fetch(searchUrl, options);
      const jsonData = (await data.json()) as FixtureResponseData;
      res.status(200).json(jsonData.response);
    },
  };

  const response = handleCase[method];
  if (response) {
    response(req, res).catch(catcher);
  } else res.status(400).json({ error: "No Response for This Request" });
}
