import Image from "next/image";
import type { StandingsAPIData, StandingsFormattedData } from "../utils/types";

export default function Standings({
  apiStandings,
}: {
  apiStandings: StandingsAPIData[];
}) {
  const formattedData = apiStandings.map((team): StandingsFormattedData => {
    return {
      teamName: team.team.name,
      rank: team.rank,
      logo: team.team.logo,
      goals: team.all.goals.for,
      plusMinus: team.goalsDiff,
      form: team.form,
      points: team.points,
    };
  });

  return (
    <div className="max-h-96 min-w-fit overflow-y-scroll">
      <table className="min-w-fit divide-y divide-gray-300 overflow-y-scroll">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
            >
              Pos
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Team
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              G
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              +/-
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Form
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              PTS
            </th>
          </tr>
        </thead>
        <tbody>
          {formattedData.map((team, teamIdx) => {
            return (
              <tr
                key={team.teamName}
                className={teamIdx % 2 === 0 ? "bg-green-100" : "bg-green-200"}
              >
                <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  {team.rank}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <Image
                    src={team.logo}
                    alt="team logo"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  {" " + team.teamName}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {team.goals}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">
                  {team.plusMinus}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {team.form}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {team.points}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
