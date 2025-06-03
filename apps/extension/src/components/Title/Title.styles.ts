import styled from "styled-components";
import { colors } from "@/styles/variables";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Text = styled.div`
  text-align: center;

  h2 {
    color: ${colors.secondary};
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    color: ${colors.text};
    font-size: 14px;
    margin: 0;
  }
`;
