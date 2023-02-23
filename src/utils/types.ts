export type TableResponseData = {
  response: [
    {
      league: {
        standings: [Array<APIData>];
      };
    }
  ];
};
export type TableAPIData = {
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

export type TableFormattedData = {
  teamName: string;
  rank: number;
  logo: string;
  goals: number;
  plusMinus: number;
  form: string;
  points: number;
};
