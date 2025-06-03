import { FC } from "react";
import { Component, Action, ReturnButton } from "./Heading.styles";
import { ArrowLeft } from "@phosphor-icons/react";

interface HeadingProps {
  title: string;
  showButton: boolean;
  action: VoidFunction;
}

const Heading: FC<HeadingProps> = ({ title, showButton, action }) => {
  return (
    <Component>
      <Action>
        {showButton ? (
          <ReturnButton onClick={action} type={`button`} title={`Return`}>
            <ArrowLeft size={20} />
          </ReturnButton>
        ) : null}
        <h2>{title}</h2>
      </Action>
    </Component>
  );
};

export default Heading;
