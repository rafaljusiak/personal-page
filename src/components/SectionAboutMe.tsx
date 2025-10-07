import React from "react";
import styled from "styled-components";

import { Section, SectionProps } from "./Section";
import { H2, OnlyHorizontalP, P, Strong } from "./common/tags";
import { ArrowIcon } from "./common/icons";

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 1000;
  font-size: 2.8vh;

  &:hover {
    text-decoration: underline;
  }
`;

export default ({ fullpageApi }: SectionProps) => {
  return (
    <Section>
      <H2>About me</H2>
      <P>
        <Strong>I have been using Python</Strong> programming language in my
        daily work <Strong>since 2016</Strong> and I am constantly eager to
        develop and explore the secrets of new solutions in this field.
      </P>
      <P>
        I am a <Strong>co-founder and backend developer of <StyledLink href="https://mojamatura.edu.pl" target="_blank" rel="noopener">Moja Matura</StyledLink></Strong>.
        I specialize in <Strong>backend development</Strong> using the{" "}
        <Strong>Django</Strong> framework, but I also have basic knowledge of
        modern <Strong>frontend solutions (TypeScript and React.js)</Strong>. I
        am also interested in issues related to{" "}
        <Strong>cloud computing (AWS)</Strong>. I have a{" "}
        <Strong>Master of Engineering degree in Computer Science</Strong> after
        my studies at Warsaw University of Life Sciences.
      </P>
      <P>
        I have experience with both{" "}
        <Strong>big, high-traffic systems and MVPs</Strong>, working{" "}
        <Strong>solo and in teams</Strong>. I am also a{" "}
        <Strong>freelancer</Strong> and have made several applications for
        individual customers "after hours". I have a{" "}
        <Strong>business-oriented mindset</Strong>, combining technical expertise
        with understanding of business needs.
      </P>
      <ArrowIcon
        onClick={() => {
          fullpageApi.moveSectionDown();
        }}
      />
    </Section>
  );
};
