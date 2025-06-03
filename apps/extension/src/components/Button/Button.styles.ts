import styled from "styled-components";
import { colors } from "@/styles/variables";

export const Component = styled.button`
  color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 20px;
  border-radius: 5px;
  font-weight: 600;

  span {
    color: ${colors.white};
  }

  &.primary {
    background-color: ${colors.primary};
  }

  &.tertiary {
  }
`;
