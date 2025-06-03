import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "@/styles/variables";

export const Component = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;

  button {
    padding: 0;
  }
`;

export const Toast = styled(motion.div)`
  background-color: ${colors.secondary};
  border-radius: 40px;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 600;
  font-size: 14px;
  position: fixed;
  top: 70%;
  padding: 10px 20px;
  text-align: center;
  width: fit-content;
`;
