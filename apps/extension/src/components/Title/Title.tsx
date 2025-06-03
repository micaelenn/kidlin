// external modules
import { FC } from "react";

// internal modules
import { Component } from "./Title.styles";

interface TitleProps {
  className?: string;
}

const Title: FC<TitleProps> = ({ className }) => {
  return <Component className={`${className}`}></Component>;
};

export default Title;
