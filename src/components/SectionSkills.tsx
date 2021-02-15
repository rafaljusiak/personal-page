import React from "react";
import styled from "styled-components";
import { H2 } from "./common/tags";
import { Section, SectionProps } from "./Section";
import { ArrowIcon } from "./common/icons";
import { isHorizontalMobile, isPortrait } from "./common/mediaQueries";

const SkillContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const SkillHeader = styled.h4`
  font-size: 3vh;

  ${isPortrait} {
    margin: 12px;
  }
  ${isHorizontalMobile} {
    font-size: 4vh;
    margin: 4px;
  }
`;

const Skill = styled.span`
  margin: 12px;
  font-size: 2.5vh;
  display: inline-block;

  ${isPortrait} {
    margin: 4px;
    font-size: 2vh;
  }
  ${isHorizontalMobile} {
    margin: 4px;
    font-size: 3vh;
  }
`;

export default ({ fullpageApi }: SectionProps) => {
  return (
    <Section>
      <H2>Skills and tools</H2>
      <SkillContainer>
        <SkillHeader>Backend and system administration</SkillHeader>
        <Skill>Python</Skill>
        <Skill>Django</Skill>
        <Skill>django-rest-framework</Skill>
        <Skill>graphene-django</Skill>
        <Skill>Flask</Skill>
        <Skill>PostgreSQL</Skill>
        <Skill>mySQL</Skill>
        <Skill>Linux</Skill>
        <Skill>Celery</Skill>
        <Skill>Redis</Skill>
        <Skill>AWS (EC2, RDS, S3, Lambda, etc.)</Skill>
        <Skill>nginX</Skill>
        <Skill>docker</Skill>
        <Skill>docker-compose</Skill>
        <Skill>pytest</Skill>
        <Skill>flake8</Skill>
        <Skill>black</Skill>
        <Skill>invoke</Skill>
      </SkillContainer>
      <SkillContainer>
        <SkillHeader>Frontend</SkillHeader>
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>React</Skill>
        <Skill>jQuery</Skill>
        <Skill>HTML5</Skill>
        <Skill>jest</Skill>
        <Skill>Cypress</Skill>
        <Skill>yarn</Skill>
        <Skill>webpack</Skill>
      </SkillContainer>
      <SkillContainer>
        <SkillHeader>Others</SkillHeader>
        <Skill>Git</Skill>
        <Skill>Github</Skill>
        <Skill>Gitlab</Skill>
        <Skill>Slack</Skill>
        <Skill>Github Actions</Skill>
        <Skill>Jira</Skill>
        <Skill>Pivotal Tracker</Skill>
        <Skill>SCRUM</Skill>
        <Skill>Agile Development</Skill>
      </SkillContainer>
      <ArrowIcon onClick={fullpageApi.moveSectionDown} />
    </Section>
  );
};
