import { ZodError } from "zod";

export type ActionState = { message: string; payload?: FormData };

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof ZodError) {
    return {
      message: error.errors[0].message,
      payload: formData,
    };
  } else if (error instanceof Error) {
    return { message: error.message, payload: formData };
  } else {
    return { message: "An unknown error occured", payload: formData };
  }
};
