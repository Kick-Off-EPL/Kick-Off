export default function getSeason(date: Date): string {
  const MAY = 5;
  const currentDate = date.toISOString().slice(0, 10).split("-") as [
    year: string,
    month: string,
    day: string
  ];
  const currentMonth = Number(currentDate[1]);
  const currentYear = currentDate[0];
  if (currentMonth <= MAY) {
    return String(Number(currentYear) - 1);
  }
  return currentYear;
}
