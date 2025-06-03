import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "@/styles/variables";

export const Component = styled(motion.div)`
  text-align: center;

  p {
    color: ${colors.text};
    font-size: 14px;
    margin: 0;
  }
`;

export const Text = styled(motion.div)`
  color: ${colors.secondary};
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;

  h2 {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const Description = styled(motion.p)``;
