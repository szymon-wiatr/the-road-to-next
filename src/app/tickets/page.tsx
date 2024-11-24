import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import Link from "next/link";

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => {
        return (
          <div key={ticket.id}>
            <h2 className="text-lg">{ticket.title}</h2>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              View
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default TicketsPage;
