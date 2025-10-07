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

// Animation duration in seconds
const TYPE1_DURATION: number = 2.5;
const TYPE2_DURATION: number = 3.5;

const TypeWrittenH1 = styled(H1)`
  ${typeWrittenStyles}
  animation: ${typingAnimation} ${TYPE1_DURATION}s steps(40, end),
    ${blinkCaretAnimation} 0.5s step-end 4;
  animation-fill-mode: forwards;
`;

const TypeWrittenH3 = styled(H3)`
  ${typeWrittenStyles}
  animation: ${typingAnimation} ${TYPE2_DURATION}s steps(60, end) ${TYPE1_DURATION}s,
    ${blinkCaretAnimation} 0.5s step-end 12;
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
  background: transparent;
  color: #F9ECDB;
  border: 2px solid #F9ECDB;
  text-decoration: none;
  font-size: 2.5vh;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in ${TYPE1_DURATION + TYPE2_DURATION + 0.5}s;
  animation-fill-mode: forwards;

  &:hover {
    background: #F9ECDB;
    color: #24112f;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(249, 236, 219, 0.3);
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
        <TypeWrittenH1>Hi, my name is Rafał</TypeWrittenH1>
      </HeaderContainer>
      <TypeWrittenH3>
        I'm a web developer and software engineer living in Warsaw, Poland
      </TypeWrittenH3>
      <CVButton to="/cv">View CV</CVButton>
    </Section>
  );
};
