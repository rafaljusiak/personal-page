import { keyframes } from "styled-components";

export const CARET_COLOR: string = "#60a5fa";

export const typingAnimation = keyframes`
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
`;

export const blinkCaretAnimation = keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${CARET_COLOR}; }
`;

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
