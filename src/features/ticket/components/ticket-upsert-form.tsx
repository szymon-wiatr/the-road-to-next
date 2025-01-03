"use client";

import { useActionState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@prisma/client";
import { upsertTicket } from "../actions/upsert-ticket";
import { SubmitButton } from "@/components/form/submit-button";
import { FieldError } from "@/components/form/field-error";
import {
  ActionState,
  EMPTY_ACTION_STATE,
} from "@/components/form/utils/to-action-state";
import { Form } from "@/components/form/form";
import { fromCent } from "@/utils/currency";
import { DatePicker } from "@/components/date-picker";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  return (
    <Form action={action} actionState={actionState}>
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={
          ((actionState as ActionState).payload?.get("title") as string) ??
          ticket?.title
        }
      />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          ((actionState as ActionState).payload?.get("content") as string) ??
          ticket?.content
        }
      />
      <FieldError actionState={actionState} name="content" />

      <div className="flex gap-x-2 mb-1">
        <div className="w-1/2">
          <Label htmlFor="deadline">Deadline</Label>
          {/* <Input
            type="date"
            id="deadline"
            name="deadline"
            defaultValue={
              ((actionState as ActionState).payload?.get(
                "deadline"
              ) as string) ?? ticket?.deadline
            }
          /> */}
          <DatePicker
            id="deadline"
            name="deadline"
            defaultValue={
              ((actionState as ActionState).payload?.get(
                "deadline"
              ) as string) ?? ticket?.deadline
            }
          />
          <FieldError actionState={actionState} name="deadline" />
        </div>

        <div className="w-1/2">
          <Label htmlFor="bounty">Bounty ($)</Label>
          <Input
            type="number"
            id="bounty"
            name="bounty"
            step=".01"
            defaultValue={
              ((actionState as ActionState).payload?.get("bounty") as string) ??
              (ticket?.bounty ? fromCent(ticket?.bounty) : "")
            }
          />
          <FieldError actionState={actionState} name="bounty" />
        </div>
      </div>

      <SubmitButton label={ticket ? "Edit" : "Create"} />

      {actionState.message}
    </Form>
  );
};

export { TicketUpsertForm };
