import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import Link from "next/link";

const TICKET_ICONS = {
  OPEN: "O",
  IN_PROGRESS: ">",
  DONE: "X"
}

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => {
        return (
          <div key={ticket.id}>
            <div>{TICKET_ICONS[ticket.status]}</div>
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
