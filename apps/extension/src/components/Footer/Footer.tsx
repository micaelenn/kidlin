// external modules
import { FC } from "react";
import { Component, Button } from "./Footer.styles";
import { Copy } from "@phosphor-icons/react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <Component>
      <Button type={`button`} title={`Copy`}>
        <Copy />
        {`Copy`}
      </Button>
    </Component>
  );
};

export default Footer;
