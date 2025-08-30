import { getTickets } from "@/features/ticket/queries/get-tickets";
import { TicketItem } from "./ticket-item";

type TicketListProps = {
  userId?: string;
};

const TicketList = async ({ userId }: TicketListProps) => {
  const tickets = await getTickets(userId);

  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      {tickets.map((ticket) => {
        return <TicketItem key={ticket.id} ticket={ticket} />;
      })}
    </div>
  );
};

export { TicketList };
