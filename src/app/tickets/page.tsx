import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LucideFileText, LucidePencil, LucideCircleCheck } from "lucide-react";

const TICKET_ICONS = {
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
  DONE: <LucideCircleCheck />,
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
        <p className="text-sm text-muted-foreground">
          All your tickets at one place
        </p>
      </div>

      <Separator />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => {
          return (
            <Card key={ticket.id} className="w-full max-w-[420px]">
              <CardHeader>
                <CardTitle className="flex gap-x-2">
                  <div>{TICKET_ICONS[ticket.status]}</div>
                  <span className="truncate">{ticket.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="line-clamp-3 whitespace-break-spaces">
                  {ticket.content}
                </span>
              </CardContent>
              <CardFooter>
                <Link
                  href={ticketPath(ticket.id)}
                  className="text-sm underline"
                >
                  View
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default TicketsPage;
