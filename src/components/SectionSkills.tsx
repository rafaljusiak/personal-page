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
  const backendSkills = [
    "Python",
    "Django",
    "django-rest-framework",
    "graphene-django",
    "Flask",
    "PostgreSQL",
    "mySQL",
    "Linux",
    "Celery",
    "Redis",
    "AWS (EC2, RDS, S3, Lambda, etc.)",
    "nginX",
    "docker",
    "docker-compose",
    "pytest",
    "flake8",
    "black",
    "invoke",
  ];
  const frontendSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "jQuery",
    "HTML5",
    "jest",
    "Cypress",
    "yarn",
    "webpack",
  ];
  const otherSkills = [
    "Git",
    "Github",
    "Gitlab",
    "Slack",
    "Github Actions",
    "Jira",
    "Pivotal Tracker",
    "SCRUM",
    "Agile Development",
  ];

  const mapSkills = (skills: Array<string>): Array<React.ReactElement> => {
    return skills.map((skill) => <Skill>{skill}</Skill>);
  };

  return (
    <Section>
      <H2>Skills and tools</H2>
      <SkillContainer>
        <SkillHeader>Backend and system administration</SkillHeader>
        {mapSkills(backendSkills)}
      </SkillContainer>
      <SkillContainer>
        <SkillHeader>Frontend</SkillHeader>
        {mapSkills(frontendSkills)}
      </SkillContainer>
      <SkillContainer>
        <SkillHeader>Others</SkillHeader>
        {mapSkills(otherSkills)}
      </SkillContainer>
      <ArrowIcon onClick={() => fullpageApi.moveSectionDown()} />
    </Section>
  );
};
