import { initialTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if(!ticket) {
    return <div>Ticket not found</div>
  }

  return (
    <div>
      <h2 className="text-lg">{ticket?.title}</h2>
      <h2 className="text-lg">{ticket?.content}</h2>
    </div>
  );
};

export default TicketPage;
