import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/constants";
import { ticketPath } from "@/paths";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Ticket } from "@prisma/client";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div className={clsx("w-full flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
    })}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <div>{TICKET_ICONS[ticket.status]}</div>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className={clsx(" whitespace-break-spaces", {
                "line-clamp-3": !isDetail,
          })}>
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
};

export { TicketItem };
