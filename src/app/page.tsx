import { ticketsPath } from "@/paths";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-lg">Home Page</h2>
      <Link href={ticketsPath()} className="underline">Go to tickets</Link>
    </div>
  );
};
export default HomePage;
