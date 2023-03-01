export default function getCurrentWeek() {
  const curr = new Date();
  const week = [];

  for (let i = 1; i <= 7; i++) {
    const first = curr.getDate() - curr.getDay() + i;
    const day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
  }
  return week;
}
