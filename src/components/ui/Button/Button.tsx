import { ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  isLoading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
};
