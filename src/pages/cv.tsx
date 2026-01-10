import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const slideInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-80px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

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
  animation: ${slideInFromTop} 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  @media print {
    border-bottom: 2px solid #24112f;
    margin-bottom: 15px;
    padding-bottom: 10px;
    animation: none;
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
    color: #24112f;
    margin: 0 0 8px 0;
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: #555;

  @media print {
    font-size: 10pt;
    color: #555;
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
      color: #5330c7;
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
  animation: ${slideInFromLeft} 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;

  @media print {
    background: #f8f8f8;
    border-left: 3px solid #5330c7;
    font-size: 10pt;
    padding: 8px;
    margin-bottom: 12px;
    line-height: 1.4;
    animation: none;
  }
`;

const Section = styled.section`
  margin-bottom: 35px;
  animation: ${slideInFromBottom} 1.35s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;

  @media print {
    margin-bottom: 12px;
    page-break-inside: avoid;
    animation: none;
  }
`;

const WorkHistorySection = styled.section`
  margin-bottom: 35px;
  animation: ${slideInFromBottom} 1.35s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;

  @media print {
    margin-bottom: 12px;
    page-break-inside: auto;
    animation: none;
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
    border-bottom: 1px solid #24112f;
    color: #24112f;
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
    color: #5330c7;
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
    color: #555;
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
    color: #24112f;
  }
`;

const DateRange = styled.span`
  font-size: 14px;
  color: #666;
  font-weight: 500;

  @media print {
    font-size: 9pt;
    color: #666;
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
    color: #555;
    margin: 3px 0 0 0;
    line-height: 1.3;

    strong {
      color: #24112f;
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
    color: #24112f;
    margin: 0 0 2px 0;
  }
`;

const InfoDetail = styled.p`
  font-size: 14px;
  margin: 3px 0;
  color: #555;

  @media print {
    font-size: 9pt;
    color: #555;
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

const baseButtonStyles = `
  position: fixed;
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
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  @media print {
    display: none;
  }
`;

const BackButton = styled(Link)<{ $isScrolled: boolean }>`
  ${baseButtonStyles}
  top: 30px;
  left: 30px;
  background: #24112f;
  animation: ${slideInFromLeft} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;

  &:hover {
    background: #5330c7;
  }

  @media (max-width: 768px) {
    bottom: ${props => props.$isScrolled ? '0' : '30px'};
    left: ${props => props.$isScrolled ? '0' : '20px'};
    top: auto;
    padding: ${props => props.$isScrolled ? '12px 20px' : '18px 24px'};
    font-size: ${props => props.$isScrolled ? '14px' : '15px'};
    border-radius: ${props => props.$isScrolled ? '0 8px 0 0' : '8px'};
    box-shadow: ${props => props.$isScrolled ? '0 -2px 10px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(36, 17, 47, 0.3)'};
    animation: ${slideInFromLeft} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
    background: ${props => props.$isScrolled ? 'rgba(36, 17, 47, 0.95)' : '#24112f'};
    backdrop-filter: ${props => props.$isScrolled ? 'blur(10px)' : 'none'};

    &:active {
      transform: scale(0.9);
    }
  }
`;

const DownloadButton = styled.a<{ $isScrolled: boolean }>`
  ${baseButtonStyles}
  bottom: 30px;
  right: 30px;
  background: #5330c7;
  animation: ${slideInFromRight} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;

  &:hover {
    background: #24112f;
  }

  @media (max-width: 768px) {
    bottom: ${props => props.$isScrolled ? '0' : '30px'};
    right: ${props => props.$isScrolled ? '0' : '20px'};
    padding: ${props => props.$isScrolled ? '12px 20px' : '18px 24px'};
    font-size: ${props => props.$isScrolled ? '14px' : '15px'};
    border-radius: ${props => props.$isScrolled ? '8px 0 0 0' : '8px'};
    box-shadow: ${props => props.$isScrolled ? '0 -2px 10px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(83, 48, 199, 0.3)'};
    animation: ${slideInFromRight} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
    background: ${props => props.$isScrolled ? 'rgba(83, 48, 199, 0.95)' : '#5330c7'};
    backdrop-filter: ${props => props.$isScrolled ? 'blur(10px)' : 'none'};

    &:active {
      transform: scale(0.9);
    }
  }
`;

export default () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="author" content="Rafał Jusiak" />
        <meta name="robots" content="noindex, nofollow" />
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
          Product Engineer with commercial experience since 2016. Co-founder of Moja Matura, grown to a user base of 50,000+. I specialize in architecting high-quality Python solutions, including AI-powered backends and NLP integrations, across education, fintech, e-commerce, and talent marketplaces - from planning to cloud deployment.
        </Summary>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            <SkillCategory>
              <SkillCategoryTitle>BACKEND TECHNOLOGIES</SkillCategoryTitle>
              <SkillsList>
                Python, Django, Django REST Framework, FastAPI, Celery, RabbitMQ, Redis, asyncio, GraphQL, REST API, Pydantic, pytest
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>DATABASES AND SEARCH ENGINES</SkillCategoryTitle>
              <SkillsList>
                SQL, PostgreSQL, pgvector, ElasticSearch, OpenSearch, NoSQL (DynamoDB)
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>INFRASTRUCTURE AND DEVOPS</SkillCategoryTitle>
              <SkillsList>
                Amazon Web Services (AWS), Linux, Docker, Docker Compose, Continuous Integration (Gitlab CI, Github Workflows),
                Terraform, Grafana, n8n
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>OTHER</SkillCategoryTitle>
              <SkillsList>
                <strong>Product Ownership &amp; Strategy:</strong> Leveraging my experience as a <strong>Co-founder</strong> to bridge the gap between <strong>business vision and technical execution</strong>. I take ownership of the <strong>full product lifecycle</strong>: from initial <strong>app design and prototyping</strong> to <strong>deployment and user behavior analysis</strong>. I use <strong>data-driven insights</strong> to prioritize features that deliver the most value to the users.
                <br />
                <strong>Leadership &amp; Project Management:</strong> Provided <strong>technical leadership and strategic oversight</strong> of team workflows to ensure alignment with <strong>business goals</strong> and timely delivery. Drove <strong>process improvements</strong>, <strong>mentored developers</strong> and ensured smooth coordination and consistent delivery across the team.
                <br />
                <strong>Client Collaboration &amp; Cross-functional Work:</strong> Partnered closely with <strong>clients</strong> to define requirements and guide <strong>technical and architectural decisions</strong>. Maintained transparent communication and coordinated with <strong>design, product, and business teams</strong> to ensure solutions met both technical and commercial objectives.
                <br />
                <strong>Third-party Integrations:</strong> Led the integration of key external services and APIs, including <strong>Stripe, SendGrid, Google Services, Coinbase, RevenueCat,</strong> and multiple <strong>e-commerce platforms</strong>.
              </SkillsList>
            </SkillCategory>
          </SkillsGrid>
        </Section>

        <WorkHistorySection>
          <SectionTitle>Work History</SectionTitle>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>Co-founder and Backend Engineer, Moja Matura</JobTitle>
              <DateRange>Nov 2019 - Present</DateRange>
            </WorkHeader>
            <WorkDescription>
              Co-founded and built a web application for school-leaving exam preparation, participating in <strong>every step
              from ideation to market introduction</strong> - including <strong>developing the MVP</strong>, refining features after initial phases,
              <strong>implementing payment systems</strong>, <strong>handling business matters</strong>, and <strong>introducing the platform to schools</strong>.
              Developed the backend in <strong>Django</strong> with <strong>REST</strong> and <strong>GraphQL APIs</strong>, integrated payments, analytics,
              and school modules, and managed <strong>AWS</strong> infrastructure for scalability. The system now supports{" "}
              <strong>over 60,000 registered users</strong> across Poland.
            </WorkDescription>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>Senior Backend Developer, SKY ENGINE AI</JobTitle>
              <DateRange>Nov 2025 - Present</DateRange>
            </WorkHeader>
            <WorkDescription>
              Developing and maintaining backend services that power a scalable cloud platform for synthetic data generation and management - enabling the automatic creation of richly annotated image and video datasets for Vision AI. Technologies: <strong>Python, Django, Django REST Framework, asyncio, RabbitMQ</strong>.
            </WorkDescription>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>Senior Python Developer, Monterail</JobTitle>
              <DateRange>Mar 2025 - Nov 2025</DateRange>
            </WorkHeader>
            <WorkDescription>
              Took a <strong>leadership role</strong> in managing the transition and modernization of a key <strong>e-commerce platform for a
              leading baby food brand</strong>. Oversaw all technical work, maintained strong client relationships with <strong>high responsiveness</strong> to
              requests, and effectively managed tasks within <strong>tight budget constraints</strong>. Additionally, designed and implemented a{" "}
              <strong>distributed task orchestration system</strong> using <strong>Django, Celery,</strong> and <strong>AWS</strong> to automate pricing
              synchronization across rental platforms. <strong>Conducted technical interviews</strong> for new hires.
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
              Took ownership of features <strong>end-to-end</strong>, from <strong>business analysis and requirements gathering</strong> through
              development and testing to <strong>production deployment and monitoring</strong>. Delivered key features including consolidated
              invoicing, feed algorithms, A/B testing, and external integrations. Conducted <strong>detailed code reviews</strong> to ensure
              code quality, maintainability, and adherence to best practices. Built internal tools and <strong>CI</strong> pipelines to
              automate workflows, collaborated closely with the product team, and mentored developers.
            </WorkDescription>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>Python Web Developer, JMR</JobTitle>
              <DateRange>Apr 2017 - Jul 2022</DateRange>
            </WorkHeader>
            <WorkDescription>
              Developed multiple web applications across diverse industries (accounting, tourism, healthcare, AI-generated texts)
              using <strong>Django, Django REST Framework, graphene-django, AWS, React,</strong> and <strong>TypeScript</strong>.
              <strong>Conducted recruitment calls</strong> to evaluate technical candidates and participated in <strong>initial client
              meetings</strong> to gather requirements, discuss project scope, and provide technical consultation.
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

      <BackButton to="/" $isScrolled={isScrolled}>
        ← Back
      </BackButton>

      <DownloadButton href="/cv.pdf" download="Rafał Jusiak - CV.pdf" $isScrolled={isScrolled}>
        Download PDF
      </DownloadButton>
    </>
  );
};
