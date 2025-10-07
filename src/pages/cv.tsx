import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const CVContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Oswald', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #ffffff;
  color: #333;
  line-height: 1.6;

  @media print {
    padding: 0;
    max-width: 100%;
    margin: 0;
    font-size: 11pt;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 3px solid #24112f;

  @media print {
    border-bottom: 2px solid #000;
    margin-bottom: 15px;
    padding-bottom: 10px;
  }
`;

const Name = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 15px 0;
  color: #24112f;
  letter-spacing: 2px;

  @media print {
    font-size: 22pt;
    color: #000;
    margin: 0 0 8px 0;
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: #555;

  @media print {
    font-size: 10pt;
    color: #000;
    margin-bottom: 5px;
  }
`;

const Links = styled.div`
  font-size: 14px;
  margin-top: 5px;

  a {
    color: #5330c7;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media print {
    font-size: 10pt;
    margin-top: 3px;

    a {
      color: #000;
      text-decoration: none;
    }
  }
`;

const Summary = styled.section`
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f8f8;
  border-left: 4px solid #5330c7;
  font-size: 15px;
  line-height: 1.7;

  @media print {
    background: #fff;
    border-left: 3px solid #000;
    font-size: 10pt;
    padding: 8px;
    margin-bottom: 12px;
    line-height: 1.4;
  }
`;

const Section = styled.section`
  margin-bottom: 35px;

  @media print {
    margin-bottom: 12px;
    page-break-inside: avoid;
  }
`;

const WorkHistorySection = styled.section`
  margin-bottom: 35px;

  @media print {
    margin-bottom: 12px;
    page-break-inside: auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #24112f;
  color: #24112f;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media print {
    font-size: 14pt;
    border-bottom: 1px solid #000;
    color: #000;
    margin-bottom: 8px;
    padding-bottom: 4px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 20px;

  @media print {
    gap: 6px;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 15px;

  @media print {
    margin-bottom: 4px;
  }
`;

const SkillCategoryTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #5330c7;

  @media print {
    font-size: 11pt;
    color: #000;
    margin-bottom: 3px;
  }
`;

const SkillsList = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.6;
  color: #555;

  @media print {
    font-size: 9pt;
    color: #000;
    line-height: 1.3;
  }
`;

const WorkEntry = styled.div`
  margin-bottom: 25px;
  page-break-inside: avoid;

  @media print {
    margin-bottom: 10px;
  }
`;

const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
  flex-wrap: wrap;

  @media print {
    margin-bottom: 3px;
  }
`;

const JobTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #24112f;

  @media print {
    font-size: 11pt;
    color: #000;
  }
`;

const DateRange = styled.span`
  font-size: 14px;
  color: #666;
  font-weight: 500;

  @media print {
    font-size: 9pt;
    color: #000;
  }
`;

const WorkDescription = styled.p`
  font-size: 14px;
  margin: 10px 0 0 0;
  line-height: 1.7;
  color: #555;

  strong {
    color: #24112f;
    font-weight: 600;
  }

  @media print {
    font-size: 9pt;
    color: #000;
    margin: 3px 0 0 0;
    line-height: 1.3;

    strong {
      color: #000;
    }
  }
`;

const InfoEntry = styled.div`
  margin-bottom: 15px;

  @media print {
    margin-bottom: 6px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #24112f;

  @media print {
    font-size: 11pt;
    color: #000;
    margin: 0 0 2px 0;
  }
`;

const InfoDetail = styled.p`
  font-size: 14px;
  margin: 3px 0;
  color: #555;

  @media print {
    font-size: 9pt;
    color: #000;
    margin: 2px 0;
  }
`;

const Footer = styled.footer`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  font-size: 11px;
  color: #999;
  line-height: 1.5;

  @media print {
    margin-top: 15px;
    padding-top: 8px;
    font-size: 7pt;
    color: #666;
    line-height: 1.3;
  }
`;

const BackButton = styled(Link)`
  position: fixed;
  top: 30px;
  left: 30px;
  background: #24112f;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1px;

  &:hover {
    background: #5330c7;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media print {
    display: none;
  }
`;

const DownloadButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #5330c7;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1px;

  &:hover {
    background: #24112f;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media print {
    display: none;
  }
`;

export default () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="author" content="Rafał Jusiak" />
        <meta
          name="description"
          content="Rafał Jusiak - CV - Python Developer with 8 years of expertise"
        />
        <title>Rafał Jusiak - CV</title>
        <link rel="canonical" href="https://rafaljusiak.pl/cv" />
        <style type="text/css">{`
          @page {
            margin: 0.5in;
            size: auto;
          }
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            html {
              margin: 0;
              padding: 0;
            }
          }
        `}</style>
      </Helmet>

      <CVContainer>
        <Header>
          <Name>RAFAŁ JUSIAK</Name>
          <ContactInfo>
            kontakt@rafaljusiak.pl | +48 509 307 322 | Warszawa, Mazowieckie
          </ContactInfo>
          <Links>
            <a href="https://www.linkedin.com/in/rafal-jusiak/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/rafal-jusiak
            </a>
            |
            <a href="https://rafaljusiak.pl" target="_blank" rel="noopener noreferrer">
              rafaljusiak.pl
            </a>
          </Links>
        </Header>

        <Summary>
          Python developer with 8 years of expertise in designing and implementing high-quality software
          solutions, contributing to projects from planning to deployment across industries such as
          accounting, tourism, e-commerce, education, and talent marketplaces.
        </Summary>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            <SkillCategory>
              <SkillCategoryTitle>BACKEND TECHNOLOGIES</SkillCategoryTitle>
              <SkillsList>
                Python, Django, Django REST Framework, Celery, Redis, asyncio, GraphQL, REST API, pytest
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>DATABASES AND SEARCH ENGINES</SkillCategoryTitle>
              <SkillsList>
                SQL, PostgreSQL, ElasticSearch, OpenSearch, NoSQL (DynamoDB)
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>INFRASTRUCTURE AND DEVOPS</SkillCategoryTitle>
              <SkillsList>
                Amazon Web Services (AWS), Linux, Docker, Continuous Integration (Gitlab CI, Github Workflows),
                Terraform, n8n
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>OTHER</SkillCategoryTitle>
              <SkillsList>
                <strong>Hands-on Frontend Development</strong> using TypeScript and React
                <br />
                <strong>Third-party Integrations</strong> such as Stripe, SendGrid, Google Services, Coinbase, and e-commerce
                platforms
                <br />
                <strong>Team and Project Management:</strong> Overseeing team workflows and organizing tasks
                <br />
                <strong>Soft Skills:</strong> Proactive problem-solving, focus on user-friendly designs, and strong communication
                in agile and international environments
              </SkillsList>
            </SkillCategory>
          </SkillsGrid>
        </Section>

        <WorkHistorySection>
          <SectionTitle>Work History</SectionTitle>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>Senior Python Developer, Monterail</JobTitle>
              <DateRange>Mar 2025 - Present</DateRange>
            </WorkHeader>
            <WorkDescription>
              Took a <strong>leadership role</strong> in transitioning a key <strong>e-commerce platform for a leading baby food brand</strong> from
              an external company, overseeing the technical handover and modernization of the system built with <strong>Django,
              Django REST Framework, Wagtail, Elasticsearch, AWS,</strong> and <strong>Terraform</strong> on a <strong>serverless</strong> architecture.
              Additionally, initiated and led the development of a <strong>distributed task orchestration system</strong> for another
              client, designing and implementing it from scratch using <strong>Django, Celery</strong> and <strong>AWS</strong> to automate pricing
              synchronization across multiple rental platforms, enhancing scalability and operational efficiency.
            </WorkDescription>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>Senior Python Developer, EndySoft</JobTitle>
              <DateRange>Jan 2025 - Feb 2025</DateRange>
            </WorkHeader>
            <WorkDescription>
              Contributed to the initial development of a <strong>cloud management platform</strong> for a government-related
              technical company, featuring <strong>multi-tenancy</strong> and role-based access control (<strong>RBAC</strong>). Built a
              scalable <strong>REST API</strong> using <strong>Django, Django REST Framework, Django Tenants,</strong> and <strong>PostgreSQL</strong>,
              while collaborating with a cross-functional team and assisting in onboarding new developers.
            </WorkDescription>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>Senior Python Developer, HexOcean</JobTitle>
              <DateRange>Aug 2022 - Dec 2024</DateRange>
            </WorkHeader>
            <WorkDescription>
              Contributed to <strong>Braintrust</strong>, a marketplace platform connecting freelancers and employers.
              Developed and maintained a <strong>REST API</strong> using <strong>Django REST Framework, PostgreSQL,
              Elasticsearch,</strong> and <strong>Celery</strong> with <strong>Redis</strong>, while managing <strong>AWS</strong> infrastructure via <strong>Terraform</strong>.
              Delivered key features including consolidated invoicing, feed algorithms, A/B testing, and external
              integrations. Built internal tools and <strong>CI</strong> pipelines to automate workflows, collaborated closely with
              the product team, and mentored developers.
            </WorkDescription>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>Co-creator and Backend Engineer, Moja Matura</JobTitle>
              <DateRange>Nov 2019 - Present</DateRange>
            </WorkHeader>
            <WorkDescription>
              Co-founded and built a web application for school-leaving exam preparation from the ground up.
              Developed the backend in <strong>Django</strong> with <strong>REST</strong> and <strong>GraphQL APIs</strong>, integrated payments, analytics,
              and school modules, and managed <strong>AWS</strong> infrastructure for scalability. The system now supports
              thousands of users across Poland.
            </WorkDescription>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>Python Web Developer, JMR</JobTitle>
              <DateRange>Apr 2017 - Jul 2022</DateRange>
            </WorkHeader>
            <WorkDescription>
              Developed multiple web applications across diverse industries (accounting, tourism, e-commerce)
              using <strong>Django, Django REST Framework, graphene-django, AWS, React,</strong> and <strong>TypeScript</strong>.
            </WorkDescription>
          </WorkEntry>
        </WorkHistorySection>

        <Section>
          <SectionTitle>Education</SectionTitle>
          <InfoEntry>
            <InfoTitle>Master of Science | Computer Science</InfoTitle>
            <InfoDetail>Warsaw University of Life Sciences</InfoDetail>
            <InfoDetail>Oct 2012 - Jan 2017</InfoDetail>
          </InfoEntry>
        </Section>

        <Section>
          <SectionTitle>Languages</SectionTitle>
          <InfoEntry>
            <InfoDetail>English (Professional working proficiency), Polish (Native)</InfoDetail>
          </InfoEntry>
        </Section>

        <Footer>
          I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of
          10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April
          2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive
          95/46/EC (General Data Protection Regulation).
        </Footer>
      </CVContainer>

      <BackButton to="/">
        ← Back
      </BackButton>

      <DownloadButton href="/cv.pdf" download="Rafał Jusiak - CV.pdf">
        📥 Download PDF
      </DownloadButton>
    </>
  );
};
