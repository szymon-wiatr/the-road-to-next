"use client";

import { useActionState } from "react";
import { createComment } from "../actions/create-comment";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/form/submit-button";
import { Form } from "@/components/form/form";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { FieldError } from "@/components/form/field-error";

type CommentCreateFormProps = {
  ticketId: string;
};

const CommentCreateForm = ({ ticketId }: CommentCreateFormProps) => {
  const [actionState, action] = useActionState(
    createComment.bind(null, ticketId),
    EMPTY_ACTION_STATE
  );
  return (
    <Form action={action} actionState={actionState}>
      <Textarea name="content" placeholder="What's on your mind ..." />
      <FieldError name="content" actionState={actionState} />
      
      <SubmitButton label="Comment" />
    </Form>
  );
};

export { CommentCreateForm };
