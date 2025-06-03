import styled from "styled-components";
import { colors } from "@/styles/variables";

export const Component = styled.footer`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 20px;
  border-radius: 5px;
  font-weight: 600;

  p {
    color: ${colors.white};
  }

  &:hover,
  &:focus,
  &:focus-within {
    background-color: ${colors.secondary};
    transition: 0.2s;
  }
`;
