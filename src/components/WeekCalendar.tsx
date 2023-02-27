import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  addWeeks,
  subWeeks,
} from "date-fns";

type Props = {
  selectedDate: Date;
  handleChangeSelectedDate: (date: Date) => void;
};
export default function Calendar({
  selectedDate,
  handleChangeSelectedDate,
}: Props) {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  // const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });

  const daysInWeekArr = [0, 1, 2, 3, 4, 5, 6];

  const monthYearFormat = "MMM yyyy";
  const dayOfWeekFormat = "EEE";
  const dayNumberFormat = "d";

  function changeMonthHandle(btnType: "prev" | "next") {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  }
  function changeWeekHandle(btnType: "prev" | "next") {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
    }
  }

  return (
    <>
      <div className="flex w-64 justify-around p-2 ">
        <button
          className="items-center rounded-full border border-transparent bg-green-600 p-2 text-white shadow-sm hover:bg-green-700 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2"
          onClick={() => changeMonthHandle("prev")}
        >
          {"<<"}
        </button>
        <div>
          <span>{format(currentMonth, monthYearFormat)}</span>
        </div>
        <button
          className="items-center rounded-full border border-transparent bg-green-600 p-2 text-white shadow-sm hover:bg-green-700 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2"
          onClick={() => changeMonthHandle("next")}
        >
          {">>"}
        </button>
      </div>
      <div className="flex w-72 justify-around">
        {daysInWeekArr.map((number) => {
          const currentDay = addDays(startDate, number);
          const formattedDate = format(currentDay, dayNumberFormat);

          return (
            <div
              key={number}
              className={`cursor-pointer ${
                isSameDay(currentDay, selectedDate)
                  ? "bg-green-400"
                  : isSameDay(currentDay, new Date())
                  ? "bg-blue-200"
                  : ""
              }`}
              onClick={() => {
                handleChangeSelectedDate(currentDay);
              }}
            >
              <div>{format(currentDay, dayOfWeekFormat)}</div>
              <div>{formattedDate}</div>
            </div>
          );
        })}
      </div>
      <div className="flex w-64 justify-around p-2 ">
        <button
          className="items-center rounded-full border border-transparent bg-green-600 p-2 text-white shadow-sm hover:bg-green-700 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2"
          onClick={() => changeWeekHandle("prev")}
        >
          {"<"}
        </button>
        <button onClick={() => setCurrentMonth(new Date())}>Today</button>
        <button
          className="items-center rounded-full border border-transparent bg-green-600 p-2 text-white shadow-sm hover:bg-green-700 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2"
          onClick={() => changeWeekHandle("next")}
        >
          {">"}
        </button>
      </div>
    </>
  );
}
