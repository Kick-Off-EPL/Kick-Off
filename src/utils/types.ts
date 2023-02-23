export type ResponseData = {
  response: [
    {
      league: {
        standings: [Array<APIData>];
      };
    }
  ];
};
export type APIData = {
  team: {
    name: string;
    logo: string;
  };
  rank: number;
  all: {
    goals: {
      for: number;
    };
  };
  goalsDiff: number;
  form: string;
  points: number;
};

export type FormattedData = {
  teamName: string;
  rank: number;
  logo: string;
  goals: number;
  plusMinus: number;
  form: string;
  points: number;
};
