"use client";
import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { signUp } from "../actions/sign-up";
import { useActionState } from "react";
import { ActionState, EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Form } from "@/components/form/form";
import { FieldError } from "@/components/form/field-error";

const SignUpForm = () => {
  const [actionState, action] = useActionState(signUp, EMPTY_ACTION_STATE);

  return (
    <Form action={action} actionState={actionState}>
      <Input
        name="username"
        placeholder="Username"
        defaultValue={
          (actionState as ActionState).payload?.get("username") as string
        }
      />
      <FieldError name="username" actionState={actionState} />

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

      <Input
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        defaultValue={
          (actionState as ActionState).payload?.get("confirmPassword") as string
        }
      />
      <FieldError name="confirmPassword" actionState={actionState} />

      <SubmitButton label="Sign Up" />
    </Form>
  );
};

export { SignUpForm };
