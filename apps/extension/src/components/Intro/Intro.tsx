// external modules
import { FC } from "react";
import { MagicWand } from "@phosphor-icons/react";

// internal modules
import { Component, Text, Description } from "./Intro.styles";

interface IntroProps {
  className?: string;
  title: string;
  description?: string;
}

const Intro: FC<IntroProps> = ({ className, title, description }) => {
  return (
    <Component className={`${className}`}>
      <Text>
        <MagicWand size={22} />
        <h2>{title}</h2>
      </Text>

      <Description>{description}</Description>
    </Component>
  );
};

export default Intro;
