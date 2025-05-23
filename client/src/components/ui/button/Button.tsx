import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  extraClass?: string;
  children: ReactNode;
  onClick?: () => void;
  width?: string;
}

export const Button = ({
  extraClass,
  children,
  onClick,
  width,
}: ButtonProps) => {
  return (
    <button className={`btn ${extraClass}`} style={{ width }} onClick={onClick}>
      {children}
    </button>
  );
};
