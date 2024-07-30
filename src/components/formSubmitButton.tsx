"use client";

import { ComponentProps } from "react";
import { useFormState, useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
    {...props}
      className={"btn w-full btn-primary ${className} "}
      type="submit"
      disabled={pending}
    >
      {pending && (
        <span className="loading loading-spinner text-warning"></span>
      )}
      {children}
      
    </button>
  );
}
