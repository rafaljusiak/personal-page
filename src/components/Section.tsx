import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  font-family: "Oswald", sans-serif;
`;

type Props = {
  children: React.ReactNode;
  textColor?: string;
};

export const Section = ({ children, textColor }: Props) => {
  if (!textColor) {
    textColor = "#F9ECDB";
  }

  return (
    <StyledDiv className="section" style={{ color: textColor }}>
      {children}
    </StyledDiv>
  );
};
