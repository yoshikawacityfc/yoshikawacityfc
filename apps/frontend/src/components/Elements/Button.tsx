import React from "react";
import clsx from "clsx";

const BUTTON_COLORS = {
  primary:
    "text-primary border-2 border-primary hover:text-secondary hover:bg-primary",
  secondary:
    "text-secondary border-2 border-secondary hover:text-primary hover:bg-secondary",
};

type ButtonColor = "primary" | "secondary";

interface ButtonProps {
  label?: string;
  color?: ButtonColor;
  disabled?: boolean;
  fullWidth?: boolean;
  tabIndex?: number;
  onClick?: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      color = "primary",
      disabled = false,
      fullWidth = false,
      tabIndex,
      onClick,
    },
    ref
  ) => {
    const styles: string[] = [];

    if (fullWidth) {
      styles.push("w-full");
    }

    styles.push(BUTTON_COLORS[color]);

    return (
      <button
        ref={ref}
        disabled={disabled}
        tabIndex={tabIndex}
        onClick={onClick}
        className={clsx(styles, "font-medium", "p-2", "rounded", "transition")}
      >
        {label}
      </button>
    );
  }
);
