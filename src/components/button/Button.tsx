import { ButtonHTMLAttributes } from "react";
import "./button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
}

export const Button = ({
  size = "medium",
  variant = "primary",
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button ${size} ${variant}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
