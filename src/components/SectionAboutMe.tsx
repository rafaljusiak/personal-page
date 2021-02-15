import React from "react";

import { Section, SectionProps } from "./Section";
import { H2, OnlyHorizontalP, P, Strong } from "./common/tags";
import { ArrowIcon } from "./common/icons";

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
        I mainly deal with <Strong>backend development</Strong> for web
        applications in the <Strong>Django</Strong> framework, but I also have
        basic knowledge of modern{" "}
        <Strong>frontend solutions (TypeScript and React.js)</Strong>. I am also
        interested in issues related to <Strong>cloud computing (AWS)</Strong>.
        I have a{" "}
        <Strong>Master of Engineering degree in Computer Science</Strong> after
        my studies at Warsaw University of Life Sciences.
      </P>
      <OnlyHorizontalP>
        When I do not deal with computer technologies, I like to spend my time
        outside, sightseeing and driving my car. When at home, I enjoy watching
        classic movies, discovering new music and playing board games.
      </OnlyHorizontalP>
      <ArrowIcon onClick={fullpageApi.moveSectionDown}} />
    </Section>
  );
};
