import clsx from "clsx";
import React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          "p-2 block w-full border-2 focus:border-primary focus:outline-none placeholder:text-gray-300",
          className
        )}
        {...props}
      />
    );
  }
);
