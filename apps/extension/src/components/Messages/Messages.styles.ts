import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "@/styles/variables";

export const Component = styled.div`
  overflow: auto;
  padding: 0 10px 10px 10px;

  .user {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;

    p {
      border: 1px dashed rgba(72, 71, 67, 0.3);
      font-size: 13px;
      font-style: italic;
      width: fit-content;
      padding: 10px;
      border-radius: 15px 0 15px 15px;
      margin-bottom: 20px;
    }
  }

  .assistant {
    background-color: ${colors.scrollbar};
    color: ${colors.text};
    border-radius: 10px 20px 20px 20px;
    padding: 15px 15px 5px 15px;

    p {
      margin-bottom: 20px;
    }
  }

  .error {
    border: 1px solid ${colors.errorBorder};
    border-radius: 8px;
    background-color: ${colors.error};
    font-size: 14px;
    padding: 30px;
    text-align: center;

    svg {
      color: ${colors.alert};
      margin-bottom: 10px;
    }
  }
`;

export const Message = styled(motion.div)``;
