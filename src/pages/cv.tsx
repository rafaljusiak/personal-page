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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: #ffffff;
  color: #333;
  line-height: 1.6;

  @media print {
    padding: 0;
    max-width: 100%;
    margin: 0;
    font-size: 10pt;
    line-height: 1.4;
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
    margin-bottom: 10pt;
    padding-bottom: 7pt;
    animation: none;
  }
`;

const Name = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #24112f;
  letter-spacing: 2px;

  @media (max-width: 600px) {
    font-size: 34px;
  }

  @media print {
    font-size: 22pt;
    color: #24112f;
    margin: 0 0 3pt 0;
    line-height: 1.1;
  }
`;

const Tagline = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 14px;
  color: #24112f;
  text-wrap: balance;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media print {
    font-size: 11.5pt;
    color: #24112f;
    margin-bottom: 4pt;
    line-height: 1.25;
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: #555;
  text-wrap: balance;

  @media print {
    font-size: 10pt;
    color: #555;
    margin-bottom: 1pt;
  }
`;

const Links = styled.div`
  font-size: 14px;
  margin-top: 5px;

  a {
    color: #5330c7;
    text-decoration: none;
    margin: 0 10px;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    span {
      display: none;
    }
  }

  @media print {
    font-size: 10pt;
    margin-top: 1pt;

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
    padding: 6pt 9pt;
    margin-bottom: 14pt;
    line-height: 1.45;
    animation: none;
  }
`;

const Section = styled.section`
  margin-bottom: 35px;
  animation: ${slideInFromBottom} 1.35s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;

  @media print {
    margin-bottom: 14pt;
    break-inside: avoid;
    page-break-inside: avoid;
    animation: none;
  }
`;

const WorkHistorySection = styled.section`
  margin-bottom: 35px;
  animation: ${slideInFromBottom} 1.35s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;

  @media print {
    margin-bottom: 14pt;
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

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media print {
    font-size: 12pt;
    border-bottom: 1px solid #24112f;
    color: #24112f;
    margin: 0 0 6pt 0;
    padding-bottom: 2pt;
    line-height: 1.2;
    break-after: avoid;
    page-break-after: avoid;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 12px;

  @media print {
    gap: 3.5pt;
  }
`;

const SkillCategory = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  column-gap: 16px;
  align-items: baseline;

  @media (max-width: 600px) {
    display: block;
  }

  @media print {
    display: grid;
    grid-template-columns: 158pt 1fr;
    column-gap: 6pt;
  }
`;

const SkillCategoryTitle = styled.h3`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 0;
  line-height: 1.6;
  color: #5330c7;

  @media (max-width: 600px) {
    margin-bottom: 2px;
  }

  @media print {
    font-size: 8pt;
    letter-spacing: 0.2pt;
    color: #5330c7;
    line-height: 1.75;
  }
`;

const SkillsList = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.6;
  color: #555;

  @media print {
    font-size: 10pt;
    color: #333;
    line-height: 1.4;
  }
`;

const WorkEntry = styled.div`
  margin-bottom: 25px;
  page-break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    margin-bottom: 11pt;
    break-inside: avoid;
  }
`;

const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 2px;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 8px;
  }

  @media print {
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 10pt;
    margin-bottom: 1.5pt;
    break-after: avoid;
  }
`;

const JobTitle = styled.h3`
  font-size: 19px;
  font-weight: 700;
  margin: 0;
  color: #24112f;
  line-height: 1.35;

  @media (max-width: 600px) {
    font-size: 17px;
  }

  @media print {
    font-size: 11.5pt;
    color: #24112f;
    line-height: 1.25;
  }
`;

const Company = styled.span`
  color: #5330c7;
  white-space: nowrap;

  @media print {
    color: #5330c7;
  }
`;

const DateRange = styled.span`
  font-size: 14px;
  color: #666;
  font-weight: 500;

  white-space: nowrap;
  font-variant-numeric: tabular-nums;

  @media print {
    font-size: 9.5pt;
    color: #555;
  }
`;

const WorkDescription = styled.p`
  font-size: 14px;
  margin: 0 0 8px 0;
  line-height: 1.7;
  color: #555;
  font-style: italic;

  strong {
    color: #24112f;
    font-weight: 600;
  }

  @media print {
    font-size: 10pt;
    color: #555;
    font-style: italic;
    margin: 0 0 2pt 0;
    line-height: 1.4;

    strong {
      color: #24112f;
    }
  }
`;

const BulletList = styled.ul`
  font-size: 14px;
  margin: 0;
  padding-left: 20px;
  line-height: 1.7;
  color: #555;

  li {
    margin-bottom: 8px;
  }

  strong,
  b {
    color: #24112f;
    font-weight: 600;
  }

  li::marker {
    color: #5330c7;
  }

  @media print {
    font-size: 10pt;
    color: #333;
    line-height: 1.4;
    padding-left: 13pt;

    li {
      margin-bottom: 1.5pt;
    }

    strong,
    b {
      color: #24112f;
    }
  }
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 40px;

  & > section {
    margin-bottom: 35px;
  }

  @media (max-width: 600px) {
    display: block;
  }

  @media print {
    display: grid;
    column-gap: 24pt;

    & > section {
      margin-bottom: 0;
    }
  }
`;

const InfoEntry = styled.div`
  margin-bottom: 15px;

  @media print {
    margin-bottom: 0;
  }
`;

const InfoTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #24112f;

  @media print {
    font-size: 10.5pt;
    color: #24112f;
    margin: 0 0 1pt 0;
  }
`;

const InfoDetail = styled.p`
  font-size: 14px;
  margin: 3px 0;
  color: #555;

  @media print {
    font-size: 10pt;
    color: #555;
    margin: 0;
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
    margin-top: 10pt;
    padding-top: 5pt;
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
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
          content="Rafał Jusiak - CV - Senior Backend Engineer, Python, 9+ years"
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
          <Tagline>
            Senior Python Backend Engineer · Technical leadership · Co-founder
          </Tagline>
          <ContactInfo>
            kontakt@rafaljusiak.pl | +48 509 307 322 | Warsaw, Poland
          </ContactInfo>
          <Links>
            <a href="https://www.linkedin.com/in/rafal-jusiak/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/rafal-jusiak
            </a>
            <span>|</span>
            <a href="https://github.com/rafaljusiak" target="_blank" rel="noopener noreferrer">
              github.com/rafaljusiak
            </a>
            <span>|</span>
            <a href="https://rafaljusiak.pl" target="_blank" rel="noopener noreferrer">
              rafaljusiak.pl
            </a>
          </Links>
        </Header>

        <Summary>
          Senior backend software engineer with 9+ years of commercial Python (Django, FastAPI, PostgreSQL,
          AWS, Kubernetes) across Vision AI, marketplaces, edtech and e-commerce. At SKY ENGINE AI I
          designed a rendering pipeline running <strong>50 parallel GPU workers</strong> on Airflow
          and built the backend of its LLM agent. Before that I was the main technical owner of an
          e-commerce platform at Monterail and coordinated <strong>up to 5 developers</strong> as
          feature owner on Braintrust. Co-founder of Moja Matura (<strong>50,000+ registered users</strong>). I pick up new domains fast.
        </Summary>

        <WorkHistorySection>
          <SectionTitle>Experience</SectionTitle>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>
                Senior Backend Developer, <Company>SKY ENGINE AI</Company>
              </JobTitle>
              <DateRange>Nov 2025 - Present</DateRange>
            </WorkHeader>
            <WorkDescription>
              Cloud-native, multi-tenant microservices platform generating synthetic visual training data for
              Vision AI, used by enterprise customers. 5-person cross-functional team.
            </WorkDescription>
            <BulletList>
              <li>
                Designed and rolled out the <strong>Apache Airflow</strong> rendering pipeline
                (Kubernetes executor, AWS), replacing a custom legacy solution:{" "}
                <strong>50 parallel GPU workers, hundreds of rendered animations per day</strong>.
              </li>
              <li>
                Built the platform's RBAC permissions model, plus usage-based billing and
                metering (GPU-hours per rendering job).
              </li>
              <li>
                Built the backend of a <strong>conversational AI agent</strong> (LLM, Claude Managed Agents, tool calling) that turns
                natural language requests into validated, structured job specifications and submits
                them for long-running execution.
              </li>
              <li>
                Debug and monitor production issues (Sentry, Grafana, request tracing), build Python
                services (Django, DRF, FastAPI, asyncio, SQLAlchemy, Pydantic, WebSockets) with
                RabbitMQ and PostgreSQL, and review code.
              </li>
            </BulletList>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>
                Co-founder and Backend Engineer, <Company>Moja Matura</Company>
              </JobTitle>
              <DateRange>May 2020 - Present</DateRange>
            </WorkHeader>
            <WorkDescription>
              Side venture, alongside full-time roles. Exam-prep web app for Polish school-leavers.
            </WorkDescription>
            <BulletList>
              <li>
                Took the product from MVP to <strong>50,000+ registered users</strong> and{" "}
                <strong>3,500+ paid subscriptions</strong>.
              </li>
              <li>
                Built the <strong>Django</strong> backend (REST and GraphQL APIs) with payments
                (Przelewy24, Google Pay), analytics and school-administration modules; operate it on AWS through exam-season
                traffic peaks.
              </li>
              <li>
                Signed and onboarded <strong>up to 20 partner schools</strong>, handling the
                commercial side alongside all engineering.
              </li>
            </BulletList>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>
                Senior Python Developer, <Company>Monterail</Company>
              </JobTitle>
              <DateRange>Mar 2025 - Nov 2025</DateRange>
            </WorkHeader>
            <WorkDescription>
              Software house; client projects in e-commerce and rentals.
            </WorkDescription>
            <BulletList>
              <li>
                Main technical owner of the transition and modernisation of a leading baby-food
                brand's <strong>e-commerce platform</strong>: led all technical work and prioritised
                scope.
              </li>
              <li>
                Built a pricing-synchronisation service (Django, <strong>Celery</strong>, AWS) for a
                second client, keeping prices aligned across rental platforms for{" "}
                <strong>2,000+ rental listings</strong>.
              </li>
            </BulletList>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>
                Senior Python Developer, <Company>Braintrust</Company>
              </JobTitle>
              <DateRange>Aug 2022 - Dec 2024</DateRange>
            </WorkHeader>
            <WorkDescription>
              Employed via HexOcean. Talent marketplace connecting freelancers and employers, with
              many thousands of users.
            </WorkDescription>
            <BulletList>
              <li>
                Coordinated <strong>up to 5 developers</strong> as feature owner: split the work,
                reviewed code and took features from requirements to production monitoring.
              </li>
              <li>
                Delivered <strong>consolidated invoicing</strong>,{" "}
                <strong>feed-ranking algorithms</strong>, <strong>A/B testing</strong> and external
                integrations, including Coinbase.
              </li>
              <li>
                Built and maintained the REST API (<strong>Django REST Framework</strong>,
                PostgreSQL, Elasticsearch, OpenSearch, DynamoDB, Celery, Redis); managed AWS
                infrastructure with Terraform and CI/CD pipelines (GitHub Actions, GitLab CI).
              </li>
            </BulletList>
          </WorkEntry>

          <WorkEntry>
            <WorkHeader>
              <JobTitle>
                Python Web Developer, <Company>JMR</Company>
              </JobTitle>
              <DateRange>Apr 2017 - Jul 2022</DateRange>
            </WorkHeader>
            <WorkDescription>
              Software house: client projects in accounting, tourism, healthcare and AI text
              generation, at times on several teams in parallel.
            </WorkDescription>
            <BulletList>
              <li>
                From Apr 2021, led a <strong>4-person cross-functional team</strong> (backend, frontend,
                QA) on a greenfield client product: ran planning, estimation and the Kanban backlog, held 1:1s, helped with hiring, shipped the MVP.
              </li>
              <li>
                Built full-stack features for an AI product-content platform serving Nordic
                e-commerce retailers (enrichment, generation, machine translation): React, DRF, plus
                AWS S3 and Lambda integrations with external clients.
              </li>
              <li>
                Built the <strong>GraphQL API</strong> from scratch for a French sports-marketplace
                startup, with Stripe payments and Google Maps integration (PostGIS geo-search).
              </li>
              <li>
                Mentored and advised JMR's team building an information-security compliance product
                for a Swedish client.
              </li>
            </BulletList>
          </WorkEntry>
        </WorkHistorySection>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            <SkillCategory>
              <SkillCategoryTitle>BACKEND:</SkillCategoryTitle>
              <SkillsList>
                Python, Django, Django REST Framework (DRF), FastAPI, asyncio, SQLAlchemy,
                Pydantic, Celery, pytest, OAuth, SSO
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>ARCHITECTURE:</SkillCategoryTitle>
              <SkillsList>
                Distributed systems, microservices, event-driven architecture, workflow
                orchestration (Apache Airflow), message brokers (RabbitMQ), REST, GraphQL, WebSockets
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>DATA:</SkillCategoryTitle>
              <SkillsList>
                PostgreSQL, PostGIS, pgvector, Redis, Elasticsearch, OpenSearch, DynamoDB, SQL
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>CLOUD AND INFRA:</SkillCategoryTitle>
              <SkillsList>
                AWS, EKS, ECS, Fargate, EC2, Lambda, S3, RDS, IAM, CloudWatch, Kubernetes, Docker,
                Terraform, infrastructure as code, CI/CD, GitHub Actions, GitLab CI,
                Grafana, Sentry, Linux
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>AI AND LLM:</SkillCategoryTitle>
              <SkillsList>
                LLM integrations, AI agents, tool calling, Anthropic Claude API, Claude Managed Agents,
                Claude Code
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>PAYMENTS AND INTEGRATIONS:</SkillCategoryTitle>
              <SkillsList>
                Stripe, Przelewy24, Google Pay, Coinbase, RevenueCat, SendGrid
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>FRONTEND (SUPPORTING):</SkillCategoryTitle>
              <SkillsList>
                React, TypeScript
              </SkillsList>
            </SkillCategory>
          </SkillsGrid>
        </Section>

        <Section>
          <SectionTitle>Leadership and ways of working</SectionTitle>
          <BulletList>
            <li>
              <b>Technical leadership:</b> Mentored developers and ran technical interviews at
              Monterail and JMR.
            </li>
            <li>
              <b>AI-assisted engineering:</b> Claude Code is my daily tool at every stage, from
              exploring codebases and weighing designs to implementation, tests and review. I take
              full ownership from design to production.
            </li>
          </BulletList>
        </Section>

        <InfoRow>
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
              <InfoDetail>English (C1), Polish (Native)</InfoDetail>
            </InfoEntry>
          </Section>
        </InfoRow>

        <Footer>
          I consent to the processing of my personal data for the purposes of this recruitment
          process, in accordance with Regulation (EU) 2016/679 (GDPR). I also consent to the
          processing of my personal data for future recruitment processes.
        </Footer>
      </CVContainer>

      <BackButton to="/" $isScrolled={isScrolled}>
        ← Back
      </BackButton>

      <DownloadButton href="/cv.pdf" download="Rafal_Jusiak_CV.pdf" $isScrolled={isScrolled}>
        Download PDF
      </DownloadButton>
    </>
  );
};
