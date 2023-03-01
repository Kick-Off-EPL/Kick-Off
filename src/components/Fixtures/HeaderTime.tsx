import { format } from "date-fns";
import type { FixtureAPIData } from "../../utils/types";

type Props = { fixture: FixtureAPIData };

export default function HeaderTime({ fixture }: Props) {
  switch (fixture.fixture.status.short) {
    case "TBD":
      return <p>TBD</p>;
      break;
    case "NS":
      return <p>{format(new Date(fixture.fixture.date), "HH:mm")}</p>;
      break;
    case "SUSP":
      return <p>Suspended</p>;
      break;
    case "PST":
      return <p>Postponed</p>;
      break;
    case "INT":
      return <p>Interrupted</p>;
      break;
    case "CANC":
      return <p>Cancelled</p>;
      break;
    case "FT":
    case "AET":
    case "PEN":
      return <p>FT</p>;
      break;
    case "1H":
    case "HT":
    case "2H":
    case "ET":
    case "P":
    case "LIVE":
      return (
        <p className="flex items-center">
          {fixture.fixture.status.elapsed}
          <span className="relative ml-2 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </span>
        </p>
      );
    default:
      return null;
  }
}
