import clsx from "clsx";
import React from "react";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { isError?: boolean };

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", isError, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          isError
            ? "border-red-500 focus:border-red-500"
            : "focus:border-primary",
          "p-2 block w-full border-2 focus:border-primary focus:outline-none placeholder:text-gray-300",
          className
        )}
        {...props}
      />
    );
  }
);
