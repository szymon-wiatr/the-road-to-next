"use client";

import { Button } from "@/components/ui/button";
import { LucideLoaderCircle, LucideTrash } from "lucide-react";
import { deleteComment } from "../actions/delete-comment";
import { useConfirmDialog } from "@/components/confirm-dialog";

type CommentDeleteButtonProps = {
  id: string;
  onDeleteComment: (id: string) => void;
};

const CommentDeleteButton = ({
  id,
  onDeleteComment,
}: CommentDeleteButtonProps) => {
  const [deleteButton, deleteDialog] = useConfirmDialog({
    title: "Delete Comment",
    description: "Are you sure you want to delete this comment?",
    action: deleteComment.bind(null, id),
    trigger: (isPending) => (
      <Button variant="outline" size="icon">
        {isPending ? (
          <LucideLoaderCircle className="h-4 w-4 animate-spin" />
        ) : (
          <LucideTrash className="h-4 w-4" />
        )}
      </Button>
    ),
    onSuccess: () => onDeleteComment(id),
  });
  return (
    <>
      {deleteDialog}
      {deleteButton}
    </>
  );
};

export { CommentDeleteButton };
