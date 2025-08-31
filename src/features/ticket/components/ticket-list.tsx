import { getTickets } from "@/features/ticket/queries/get-tickets";
import { TicketItem } from "./ticket-item";
import { SearchInput } from "@/components/search-input";
import { SearchParams } from "@/features/ticket/search-params";

type TicketListProps = {
  userId?: string;
  searchParams: SearchParams;
};

const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const tickets = await getTickets(userId, await searchParams);

  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      <div className="w-full max-w-[420px]">
        <SearchInput placeholder="Search tickets ..." />
      </div>

      {tickets.map((ticket) => {
        return <TicketItem key={ticket.id} ticket={ticket} />;
      })}
    </div>
  );
};

export { TicketList };
