import styled from "styled-components";
import { colors } from "@/styles/variables";

export const Component = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  margin-bottom: 20px;

  h2 {
    color: ${colors.secondary};
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const ReturnButton = styled.button`
  background-color: transparent;
  color: ${colors.primary};
  font-size: 16px;
  height: 25px;
  padding: 0;
  margin-top: 5px;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
