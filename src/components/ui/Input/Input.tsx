import { InputHTMLAttributes } from "react";
import "./Input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "search";
}

export const Input = ({
  variant = "default",
  className = "",
  ...props
}: InputProps) => {
  return (
    <input className={`input input--${variant} ${className}`} {...props} />
  );
};
