export type TableResponseData = {
  response: [
    {
      league: {
        standings: [Array<TableAPIData>];
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

export type StatisticAPIData = {
  player: {
    name: string;
    age: number;
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
  };
  statistics: [
    {
      team: {
        id: number;
        name: string;
        logo: string;
      };
      games: {
        appearances: number;
        minutes: number;
        position: string;
      };
      shots: {
        total: number;
        on: number;
      };
      goals: {
        total: number;
        assists: number;
      };
      fouls: {
        committed: string;
      };
      cards: {
        yellow: number;
        yellowred: number;
        red: number;
      };
      penalty: {
        scored: number;
      };
    }
  ];
};

export type StatisticResponseData = {
  response: Array<StatisticAPIData>;
};
