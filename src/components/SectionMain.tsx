import React from "react";
import styled from "styled-components";
import { fullpageApi } from "@fullpage/react-fullpage";

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

const TYPE1_LENGTH: number = 2.5;
const TYPE2_LENGTH: number = 3.5;

const TypeWrittenH1 = styled(H1)`
  ${typeWrittenStyles}
  animation: ${typingAnimation} ${TYPE1_LENGTH}s steps(40, end),
    ${blinkCaretAnimation} 0.5s step-end 4;
  animation-fill-mode: forwards;
`;

const TypeWrittenH3 = styled(H3)`
  ${typeWrittenStyles}
  animation: ${typingAnimation} ${TYPE2_LENGTH}s steps(60, end) ${TYPE1_LENGTH}s,
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

const automaticallyMoveToNextSection = (fpApi: fullpageApi): Function => {
  const ms = (TYPE1_LENGTH + TYPE2_LENGTH) * 1000;
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
    </Section>
  );
};
