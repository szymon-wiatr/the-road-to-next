import EmailVerification from "@/emails/auth/email-verification";
import { resend } from "@/lib/resend";

export const sendEmailVerification = async (
  username: string,
  email: string,
  verificationCode: string
) => {
  return await resend.emails.send({
    from: "no-reply@app.emusic.tools",
    to: email,
    subject: "Email Verification",
    react: <EmailVerification toName={username} code={verificationCode} />,
  });
};