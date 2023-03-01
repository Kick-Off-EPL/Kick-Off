import type { FixtureAPIData } from "../../utils/types";
import Image from "next/image";
import HeaderTime from "./HeaderTime";

type Props = { fixture: FixtureAPIData };

export default function FixtureCard({ fixture }: Props) {
  return (
    <div className="m-3 flex  h-32 w-52 flex-col rounded-2xl border border-solid p-4 shadow hover:shadow-lg">
      <div className="mb-1 self-center text-sm font-semibold uppercase">
        <HeaderTime fixture={fixture} />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="mr-3">
            <Image
              src={fixture.teams.away.logo}
              width={16}
              height={16}
              alt="team logo"
            />
          </span>
          <p className="text-sm">{fixture.teams.away.name}</p>
        </div>
        {fixture.goals.away !== null && <p>{fixture.goals.away}</p>}
      </div>
      <p className="my-1 pl-8 text-xs font-semibold uppercase">at</p>
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="mr-3">
            <Image
              src={fixture.teams.home.logo}
              width={16}
              height={16}
              alt="team logo"
            />
          </span>
          <p className="text-sm">{fixture.teams.home.name}</p>
        </div>
        {fixture.goals.home !== null && <p>{fixture.goals.home}</p>}
      </div>
    </div>
  );
}
