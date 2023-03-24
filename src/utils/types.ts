export type StandingsResponseData = {
  response: [
    {
      league: {
        standings: [Array<StandingsAPIData>];
      };
    }
  ];
};
export type StandingsAPIData = {
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

export type StandingsFormattedData = {
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
type FixtureTeamInfo = {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
};

type HomeAwayScore = {
  home: number | null;
  away: number | null;
};
export type FixtureAPIData = {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: FixtureTeamInfo;
    away: FixtureTeamInfo;
  };
  goals: HomeAwayScore;
  score: {
    halftime: HomeAwayScore;
    fulltime: HomeAwayScore;
    extratime: HomeAwayScore;
    penalty: HomeAwayScore;
  };
};

export type FixtureResponseData = {
  response: Array<FixtureAPIData>;
};
