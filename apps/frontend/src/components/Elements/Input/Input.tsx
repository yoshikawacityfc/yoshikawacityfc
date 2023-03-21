import clsx from "clsx";
import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return <input ref={ref} className={clsx("p-2", className)} {...props} />;
  }
);
