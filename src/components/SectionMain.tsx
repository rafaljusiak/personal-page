import React from "react";
import styled from "styled-components";
import { fullpageApi } from "@fullpage/react-fullpage";
import { Link } from "gatsby";

import {
  blinkCaretAnimation,
  CARET_COLOR,
  fadeIn,
  typingAnimation,
} from "./common/animations";
import { H1, H3 } from "./common/tags";
import { Section, SectionProps } from "./Section";
import { isPortrait } from "./common/mediaQueries";

const typeWrittenStyles = `
  opacity: 0;
  overflow: hidden;
  border-right: 0.15em solid ${CARET_COLOR};
  white-space: nowrap;
  margin: 0 auto;
  width: fit-content;
  max-width: fit-content;
`;

const TYPING_SPEED = 14;
const HEADLINE_TEXT = "Hi, my name is Rafał";
const SUBHEADLINE_TEXT = "I'm a backend engineer and co-owner of Moja Matura";
const TYPE1_DURATION: number = HEADLINE_TEXT.length / TYPING_SPEED;
const TYPE2_DURATION: number = SUBHEADLINE_TEXT.length / TYPING_SPEED;

const TypeWrittenH1 = styled(H1)`
  ${typeWrittenStyles}
  animation: ${typingAnimation} ${TYPE1_DURATION}s steps(${HEADLINE_TEXT.length}, end),
    ${blinkCaretAnimation} 0.5s step-end 2;
  animation-fill-mode: forwards;
`;

const TypeWrittenH3 = styled(H3)`
  ${typeWrittenStyles}
  animation: ${typingAnimation} ${TYPE2_DURATION}s steps(${SUBHEADLINE_TEXT.length}, end) ${TYPE1_DURATION}s,
    ${blinkCaretAnimation} 0.75s step-end 5;
  animation-fill-mode: forwards;

  ${isPortrait} {
    opacity: 0;
    animation: ${fadeIn} 4s linear 3.5s;
    animation-fill-mode: forwards;
    white-space: break-spaces;
  }
`;

const HeaderContainer = styled.div`
  max-width: 960px;
  margin: auto;
`;

const CVButton = styled(Link)`
  display: inline-block;
  margin-top: 40px;
  padding: 15px 40px;
  background: #60a5fa;
  color: #0d1117;
  border: 2px solid #60a5fa;
  text-decoration: none;
  font-size: 2.5vh;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 8px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in ${TYPE1_DURATION + TYPE2_DURATION - 1.5}s;
  animation-fill-mode: forwards;

  &:hover {
    background: #3b82f6;
    border-color: #3b82f6;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(96, 165, 250, 0.4);
  }

  ${isPortrait} {
    margin-top: 30px;
    padding: 12px 30px;
    font-size: 2vh;
  }
`;

const automaticallyMoveToNextSection = (fpApi: fullpageApi): Function => {
  const ms = (TYPE1_DURATION + TYPE2_DURATION) * 1000;
  const moveToNextSection = () => {
    const activeSection = fpApi.getActiveSection();
    if (activeSection.index === 0) {
      fpApi.moveSectionDown();
    }
  };
  const interval = setTimeout(moveToNextSection, ms);
  return () => clearTimeout(interval);
};

export default ({ fullpageApi, fullpageState }: SectionProps) => {
  React.useEffect(() => {
    if (fullpageState.initialized) {
      automaticallyMoveToNextSection(fullpageApi);
    }
  }, [fullpageState.initialized]);

  return (
    <Section>
      <HeaderContainer>
        <TypeWrittenH1>{HEADLINE_TEXT}</TypeWrittenH1>
      </HeaderContainer>
      <TypeWrittenH3>{SUBHEADLINE_TEXT}</TypeWrittenH3>
      <CVButton to="/cv">View CV</CVButton>
    </Section>
  );
};
