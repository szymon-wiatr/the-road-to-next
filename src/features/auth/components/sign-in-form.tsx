"use client";
import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";

import { useActionState } from "react";
import {
  ActionState,
  EMPTY_ACTION_STATE,
} from "@/components/form/utils/to-action-state";
import { Form } from "@/components/form/form";
import { FieldError } from "@/components/form/field-error";
import { signIn } from "../actions/sign-in";

const SignInForm = () => {
  const [actionState, action] = useActionState(signIn, EMPTY_ACTION_STATE);

  return (
    <Form action={action} actionState={actionState}>
      <Input
        name="email"
        placeholder="Email"
        defaultValue={
          (actionState as ActionState).payload?.get("email") as string
        }
      />
      <FieldError name="email" actionState={actionState} />

      <Input
        name="password"
        placeholder="Password"
        type="password"
        defaultValue={
          (actionState as ActionState).payload?.get("password") as string
        }
      />
      <FieldError name="password" actionState={actionState} />

      <SubmitButton label="Sign In" />
    </Form>
  );
};

export { SignInForm };
