import styled from "styled-components";
import { colors, fontFamilies } from "@/styles/variables";

export const Component = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  height: 520px;
  padding: 15px 10px;
  width: 400px;

  * {
    box-sizing: border-box;
    font-family: ${fontFamilies.primary}, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 16px;
    text-transform: uppercase;
  }

  ul,
  ol {
    padding-left: 30px;
  }

  p {
    line-height: 1.5;
    margin: 0;
  }

  button {
    border: none;
    cursor: pointer;
    height: 35px;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.scrollbar};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.primary};
    border-radius: 40px;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.secondary};
  }
`;

export const Area = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Chat = styled.div`
  height: 465px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
