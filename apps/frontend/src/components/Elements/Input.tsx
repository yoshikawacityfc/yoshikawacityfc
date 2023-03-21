import clsx from "clsx";
import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "p-2 block w-full border-b-2 focus:border-b-primary focus:outline-none placeholder:text-gray-300",
          className
        )}
        {...props}
      />
    );
  }
);
