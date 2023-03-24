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
    <div className="flex w-96 flex-col items-center">
      <div className="my-4 flex w-80 justify-around ">
        <button
          className="items-center rounded-full border border-transparent bg-green-600 p-2 text-white shadow-sm hover:bg-green-700 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2"
          onClick={() => changeMonthHandle("prev")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="flex items-center text-lg font-bold uppercase">
          <span>{format(currentMonth, monthYearFormat)}</span>
        </div>
        <button
          className="items-center rounded-full border border-transparent bg-green-600 p-2 text-white shadow-sm hover:bg-green-700 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2"
          onClick={() => changeMonthHandle("next")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="my-4 flex w-96 justify-around">
        {daysInWeekArr.map((number) => {
          const currentDay = addDays(startDate, number);
          const formattedDate = format(currentDay, dayNumberFormat);

          return (
            <div
              key={number}
              className={`flex w-12 cursor-pointer flex-col rounded-full p-2 transition ${
                isSameDay(currentDay, selectedDate)
                  ? "bg-green-600"
                  : isSameDay(currentDay, new Date())
                  ? "bg-green-300"
                  : ""
              }`}
              onClick={() => {
                handleChangeSelectedDate(currentDay);
              }}
            >
              <div className="text-center">
                {format(currentDay, dayOfWeekFormat)}
              </div>
              <div className="text-center">{formattedDate}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 mb-6 flex w-80 justify-around ">
        <button
          className="items-center rounded-full border border-transparent bg-green-600 p-2 text-white shadow-sm hover:bg-green-700 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2"
          onClick={() => changeWeekHandle("prev")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 active:bg-green-500"
          onClick={() => setCurrentMonth(new Date())}
        >
          TODAY
        </button>
        <button
          className="items-center rounded-full border border-transparent bg-green-600 p-2 text-white shadow-sm hover:bg-green-700 active:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2"
          onClick={() => changeWeekHandle("next")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
