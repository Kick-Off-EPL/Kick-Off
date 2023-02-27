import Calendar from "./WeekCalendar";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import type { FixtureAPIData } from "../utils/types";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [fixtures, setFixtures] = useState<FixtureAPIData[] | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/fixtures/${selectedDate.toISOString()}`)
      .then((res) => res.json())
      .then((data) => {
        setFixtures(data as FixtureAPIData[]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [selectedDate]);
  const fullDateFormat = "MMM do yyyy";

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
    <div className="flex w-80 flex-col justify-center">
      <Calendar
        selectedDate={selectedDate}
        handleChangeSelectedDate={handleChangeSelectedDate}
      />
      <div className="w-64 text-center">
        <p>{format(selectedDate, fullDateFormat)}</p>
      </div>
      <div className="p-4">
        {isLoading ? (
          renderSpinner()
        ) : fixtures !== null && fixtures.length > 0 ? (
          fixtures.map((fixture) => {
            return (
              <div key={fixture.fixture.id}>
                {fixture.teams.away.name} at {fixture.teams.home.name}
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
