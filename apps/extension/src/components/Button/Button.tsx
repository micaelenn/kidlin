// external modules
import { FC } from "react";

// internal modules
import { Component } from "./Button.styles";

interface ButtonProps {
  className?: string;
  text: string;
  icon: string;
  color: string;
}

const Button: FC<ButtonProps> = ({ className, text, icon, color }) => {
  return (
    <Component className={`${className} ${color}`}>
      {icon}
      <span>{text}</span>
    </Component>
  );
};

export default Button;
