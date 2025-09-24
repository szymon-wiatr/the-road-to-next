import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest";
import { passwordResetEvent } from "@/features/password/events/event-password-reset";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [passwordResetEvent],
});