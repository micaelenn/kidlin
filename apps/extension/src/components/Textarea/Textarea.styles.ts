import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "@/styles/variables";

export const Component = styled(motion.div)`
  form {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
  }

  textarea {
    border: 2px solid ${colors.grey};
    color: ${colors.black};
    border-radius: 5px;
    font-size: 16px;
    line-height: 1.5;
    outline: none;
    padding: 10px;
    resize: none;
    height: 200px;
    width: 100%;

    &::placeholder {
      font-size: 12px;
    }
  }

  p {
    color: ${colors.alert};
    font-size: 12px;
    font-weight: 500;
    width: 100%;
  }

  button {
    background-color: ${colors.primary};
    border-radius: 5px;
    color: ${colors.white};
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 20px;

    p {
      color: ${colors.white};
      font-size: 14px;
    }

    &:hover,
    &:focus,
    &:focus-within {
      background-color: ${colors.secondary};
      transition: 0.2s;
    }
  }
`;
