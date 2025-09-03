"use client";

import { Button } from "@/components/ui/button";
import { LucideTrash } from "lucide-react";
import { deleteComment } from "../actions/delete-comment";
import { useConfirmDialog } from "@/components/confirm-dialog";

type CommentDeleteButtonProps = {
  id: string;
};

const CommentDeleteButton = ({ id }: CommentDeleteButtonProps) => {
  const [deleteButton, deleteDialog] = useConfirmDialog({
    title: "Delete Comment",
    description: "Are you sure you want to delete this comment?",
    action: deleteComment.bind(null, id),
    trigger: (
      <Button variant="outline" size="icon">
        <LucideTrash className="h-4 w-4" />
      </Button>
    ),
  });
  return (
    <>
      {deleteDialog}
      {deleteButton}
    </>
  );
};

export { CommentDeleteButton };
