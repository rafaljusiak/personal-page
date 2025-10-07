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
  const pythonSkills = [
    "Python",
    "Django",
    "django-rest-framework",
    "graphene-django",
    "Celery",
    "Redis",
    "asyncio",
    "GraphQL",
    "REST API",
    "pytest",
  ];
  const infrastructureSkills = [
    "PostgreSQL",
    "ElasticSearch",
    "OpenSearch",
    "DynamoDB",
    "AWS (EC2, RDS, S3, Lambda, etc.)",
    "Linux",
    "nginX",
    "docker",
    "Gitlab CI",
    "Github Workflows",
    "Terraform",
    "n8n",
  ];
  const otherSkills = [
    "TypeScript",
    "React",
    "Git",
    "Github",
    "Gitlab",
    "Github Actions",
    "Jira",
    "SCRUM",
    "Agile Development",
    "Claude",
  ];

  const mapSkills = (skills: Array<string>): Array<React.ReactElement> => {
    return skills.map((skill) => <Skill>{skill}</Skill>);
  };

  return (
    <Section>
      <H2>Skills and tools</H2>
      <SkillContainer>
        <SkillHeader>Python and backend</SkillHeader>
        {mapSkills(pythonSkills)}
      </SkillContainer>
      <SkillContainer>
        <SkillHeader>Infrastructure and DevOps</SkillHeader>
        {mapSkills(infrastructureSkills)}
      </SkillContainer>
      <SkillContainer>
        <SkillHeader>Others</SkillHeader>
        {mapSkills(otherSkills)}
      </SkillContainer>
      <ArrowIcon onClick={() => fullpageApi.moveSectionDown()} />
    </Section>
  );
};
