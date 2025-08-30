"use server";

import {
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import prisma from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateTicketStatus = async (id: string, status: TicketStatus) => {
  const { user } = await getAuthOrRedirect();

  try {
    await prisma.ticket.update({
      where: { id, userId: user.id },
      data: { status },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }

  revalidatePath(ticketsPath());

  return toActionState("SUCCESS", "Status updated");
};
