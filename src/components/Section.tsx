import React from "react";
import styled from "styled-components";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";

const StyledDiv = styled.div`
  text-align: center;
  font-family: "Oswald", sans-serif;
`;

type Props = {
  children: React.ReactNode;
  textColor?: string;
};

export type SectionProps = {
  fullpageApi: fullpageApi;
  fullpageState?: any;
};

export const Section = ({ children, textColor }: Props) => (
  <StyledDiv className="section" style={{ color: textColor }}>
    {children}
  </StyledDiv>
);

Section.defaultProps = {
  textColor = "#F9ECDB";
}
