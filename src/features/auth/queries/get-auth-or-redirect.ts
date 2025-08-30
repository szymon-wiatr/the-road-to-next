import { redirect } from "next/navigation";
import { getAuth } from "./get-auth";
import { signInPath } from "@/paths";

export const getAuthOrRedirect = async () => {
  const auth = await getAuth();

  if (!auth.user) {
    redirect(signInPath());
  }

  return auth;
};
