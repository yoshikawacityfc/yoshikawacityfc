import React from "react";
import clsx from "clsx";

const BUTTON_COLORS = {
  primary: "text-primary border border-2 border-primary",
  secondary: "text-secondary",
};

const BUTTON_SIZE = {
  small: "",
  medium: "",
  large: "",
};

type ButtonColor = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  label?: string;
  color?: ButtonColor;
  disabled?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      color = "primary",
      disabled = false,
      size = "medium",
      fullWidth = false,
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
        onClick={onClick}
        className={clsx(styles, "font-medium", "p-2", "rounded")}
      >
        {label}
      </button>
    );
  }
);
