import Calendar from "./WeekCalendar";
import { useState, useEffect } from "react";
import { compareAsc, format } from "date-fns";
import type { FixtureAPIData } from "../../utils/types";
import FixtureCard from "./FixtureCard";

export default function FixturesCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [fixtures, setFixtures] = useState<FixtureAPIData[] | null>(
    sampleData.sort((a, b) =>
      compareAsc(new Date(a.fixture.date), new Date(b.fixture.date))
    )
  );
  const [isLoading, setLoading] = useState(false);
  const fullDateFormat = "MMMM do, yyyy";

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`/api/fixtures/${selectedDate.toISOString()}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const unsortedFixtures = data as FixtureAPIData[];
  //       setFixtures(
  //         unsortedFixtures.sort((a, b) =>
  //           compareAsc(new Date(a.fixture.date), new Date(b.fixture.date))
  //         )
  //       );
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, [selectedDate]);

  function handleChangeSelectedDate(date: Date) {
    setSelectedDate(date);
  }

  function renderSpinner() {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-1/2 flex-col items-center justify-center px-5">
      <Calendar
        selectedDate={selectedDate}
        handleChangeSelectedDate={handleChangeSelectedDate}
      />
      <div className="w-80 text-center">
        <p className="">{format(selectedDate, fullDateFormat)}</p>
      </div>
      <div className="flex flex-wrap p-6 ">
        {isLoading ? (
          renderSpinner()
        ) : fixtures !== null && fixtures.length > 0 ? (
          fixtures.map((fixture) => {
            return (
              <div key={fixture.fixture.id}>
                <FixtureCard fixture={fixture} />
              </div>
            );
          })
        ) : (
          <div>No Fixtures Scheduled</div>
        )}
      </div>
    </div>
  );
}

const sampleData: FixtureAPIData[] = [
  {
    fixture: {
      id: 868186,
      referee: "Paul Tierney, England",
      timezone: "UTC",
      date: "2023-02-25T17:30:00+00:00",
      timestamp: 1677346200,
      periods: {
        first: 1677346200,
        second: 1677349800,
      },
      venue: {
        id: 504,
        name: "Vitality Stadium",
        city: "Bournemouth, Dorset",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2022,
      round: "Regular Season - 25",
    },
    teams: {
      home: {
        id: 35,
        name: "Bournemouth",
        logo: "https://media.api-sports.io/football/teams/35.png",
        winner: false,
      },
      away: {
        id: 50,
        name: "Manchester City",
        logo: "https://media.api-sports.io/football/teams/50.png",
        winner: true,
      },
    },
    goals: {
      home: 1,
      away: 4,
    },
    score: {
      halftime: {
        home: 0,
        away: 3,
      },
      fulltime: {
        home: 1,
        away: 4,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 868187,
      referee: "England Darren, England",
      timezone: "UTC",
      date: "2023-02-25T19:45:00+00:00",
      timestamp: 1677354300,
      periods: {
        first: 1677354300,
        second: 1677357900,
      },
      venue: {
        id: 525,
        name: "Selhurst Park",
        city: "London",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2022,
      round: "Regular Season - 25",
    },
    teams: {
      home: {
        id: 52,
        name: "Crystal Palace",
        logo: "https://media.api-sports.io/football/teams/52.png",
        winner: null,
      },
      away: {
        id: 40,
        name: "Liverpool",
        logo: "https://media.api-sports.io/football/teams/40.png",
        winner: null,
      },
    },
    goals: {
      home: 0,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 0,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 868188,
      referee: "Anthony Taylor, England",
      timezone: "UTC",
      date: "2023-02-25T15:00:00+00:00",
      timestamp: 1677337200,
      periods: {
        first: 1677337200,
        second: 1677340800,
      },
      venue: {
        id: 8560,
        name: "Goodison Park",
        city: "Liverpool",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2022,
      round: "Regular Season - 25",
    },
    teams: {
      home: {
        id: 45,
        name: "Everton",
        logo: "https://media.api-sports.io/football/teams/45.png",
        winner: false,
      },
      away: {
        id: 66,
        name: "Aston Villa",
        logo: "https://media.api-sports.io/football/teams/66.png",
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 2,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 2,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 868190,
      referee: "Peter Bankes, England",
      timezone: "UTC",
      date: "2023-02-25T15:00:00+00:00",
      timestamp: 1677337200,
      periods: {
        first: 1677337200,
        second: 1677340800,
      },
      venue: {
        id: 546,
        name: "Elland Road",
        city: "Leeds, West Yorkshire",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2022,
      round: "Regular Season - 25",
    },
    teams: {
      home: {
        id: 63,
        name: "Leeds",
        logo: "https://media.api-sports.io/football/teams/63.png",
        winner: true,
      },
      away: {
        id: 41,
        name: "Southampton",
        logo: "https://media.api-sports.io/football/teams/41.png",
        winner: false,
      },
    },
    goals: {
      home: 1,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 1,
        away: 0,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 868191,
      referee: "Craig Pawson, England",
      timezone: "UTC",
      date: "2023-02-25T15:00:00+00:00",
      timestamp: 1677337200,
      periods: {
        first: 1677337200,
        second: 1677340800,
      },
      venue: {
        id: 547,
        name: "King Power Stadium",
        city: "Leicester, Leicestershire",
      },
      status: {
        long: "Match Finished",
        short: "LIVE",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2022,
      round: "Regular Season - 25",
    },
    teams: {
      home: {
        id: 46,
        name: "Leicester",
        logo: "https://media.api-sports.io/football/teams/46.png",
        winner: false,
      },
      away: {
        id: 42,
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/42.png",
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 1,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 868193,
      referee: null,
      timezone: "UTC",
      date: "2023-02-25T12:30:00+00:00",
      timestamp: 1677328200,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 562,
        name: "St. James' Park",
        city: "Newcastle upon Tyne",
      },
      status: {
        long: "Match Postponed",
        short: "PST",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2022,
      round: "Regular Season - 25",
    },
    teams: {
      home: {
        id: 34,
        name: "Newcastle",
        logo: "https://media.api-sports.io/football/teams/34.png",
        winner: null,
      },
      away: {
        id: 51,
        name: "Brighton",
        logo: "https://media.api-sports.io/football/teams/51.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 868195,
      referee: "Jarred Gillett, Australia",
      timezone: "UTC",
      date: "2023-02-25T15:00:00+00:00",
      timestamp: 1677337200,
      periods: {
        first: 1677337200,
        second: 1677340800,
      },
      venue: {
        id: 598,
        name: "London Stadium",
        city: "London",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2022,
      round: "Regular Season - 25",
    },
    teams: {
      home: {
        id: 48,
        name: "West Ham",
        logo: "https://media.api-sports.io/football/teams/48.png",
        winner: true,
      },
      away: {
        id: 65,
        name: "Nottingham Forest",
        logo: "https://media.api-sports.io/football/teams/65.png",
        winner: false,
      },
    },
    goals: {
      home: 4,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 4,
        away: 0,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
];
