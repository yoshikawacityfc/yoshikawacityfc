import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";

const COLORS = {
  primary: "text-primary",
  accent: "text-accent",
  tertiary: "text-tertiary",
  white: "text-white",
  text: "text-black",
  warning: "text-yellow-400",
} as const;

const SIZES = {
  xsmall: "text-xs",
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
  xlarge: "text-xl",
  "2xlarge": "text-2xl",
  "3xlarge": "text-3xl",
  "4xlarge": "text-4xl",
} as const;

export type IconColor = keyof typeof COLORS;
type IconSize = keyof typeof SIZES;

interface IconProps {
  icon: IconProp;
  className?: string;
  color?: IconColor;
  disabled?: boolean;
  size?: IconSize;
  onClick?: () => void;
}

export const Icon = ({
  icon,
  className = "",
  color = "primary",
  disabled = false,
  size = "medium",
  onClick,
}: IconProps): JSX.Element => {
  const colorValue = () => {
    return disabled ? "bg-gray-400" : COLORS[color];
  };

  return (
    <FontAwesomeIcon
      className={clsx(colorValue(), SIZES[size], className)}
      icon={icon}
      onClick={onClick}
    />
  );
};
