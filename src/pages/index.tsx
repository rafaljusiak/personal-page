import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

import SectionMain from "../components/SectionMain";
import SectionAboutMe from "../components/SectionAboutMe";
import SectionSkills from "../components/SectionSkills";
import SectionContactMe from "../components/SectionContactMe";
import { Loader } from "../components/Loader";

const GlobalStyle = createGlobalStyle`
  .fp-watermark {
    display: none !important;
  }
`;

export default () => {
  const licenseKey = process.env.GATSBY_FULLPAGE_LICENSE_KEY;
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <link rel="canonical" href="https://rafaljusiak.pl" />
        <meta charSet="utf-8" />
        <meta name="author" content="Rafał Jusiak" />
        <meta
          name="description"
          content="Web Developer and Software Engineer"
        />
        <title>Rafał Jusiak</title>
      </Helmet>
      <ReactFullpage
        licenseKey={licenseKey}
        navigation
        credits={{ enabled: false }}
        sectionsColor={["#0d1117", "#1a1f35", "#312e81", "#0f172a"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SectionMain fullpageState={state} fullpageApi={fullpageApi} />
              <SectionAboutMe fullpageApi={fullpageApi} />
              <SectionSkills fullpageApi={fullpageApi} />
              <SectionContactMe />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};
