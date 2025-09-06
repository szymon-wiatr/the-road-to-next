"use client";

import { useActionState } from "react";
import { createComment } from "../actions/create-comment";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/form/submit-button";
import { Form } from "@/components/form/form";
import { ActionState, EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { FieldError } from "@/components/form/field-error";
import { CommentWithMetadata } from "../types";

type CommentCreateFormProps = {
  ticketId: string;
  onCreateComment?: (comment: CommentWithMetadata | undefined) => void;
};

const CommentCreateForm = ({ ticketId, onCreateComment }: CommentCreateFormProps) => {
  const [actionState, action] = useActionState(
    createComment.bind(null, ticketId),
    EMPTY_ACTION_STATE
  );


  const handleSuccess = (actionState: ActionState<CommentWithMetadata | undefined>) => {
    onCreateComment?.(actionState.data);
  };

  return (
    <Form action={action} actionState={actionState} onSuccess={handleSuccess}>
      <Textarea name="content" placeholder="What's on your mind ..." />
      <FieldError name="content" actionState={actionState} />
      
      <SubmitButton label="Comment" />
    </Form>
  );
};

export { CommentCreateForm };
