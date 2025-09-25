import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest";
import { passwordResetEvent } from "@/features/password/events/event-password-reset";
import { emailVerificationEvent } from "@/features/auth/events/event-email-verification";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [passwordResetEvent, emailVerificationEvent],
});