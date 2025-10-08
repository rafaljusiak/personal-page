import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import CookieConsent from "react-cookie-consent";

import SectionMain from "../components/SectionMain";
import SectionAboutMe from "../components/SectionAboutMe";
import SectionContactMe from "../components/SectionContactMe";
import { Loader } from "../components/Loader";

const GlobalStyle = createGlobalStyle`
  .fp-watermark {
    display: none !important;
  }

  .cookie-button-wrapper {
    margin: 0 !important;
  }
`;

export default () => {
  const licenseKey = process.env.GATSBY_FULLPAGE_LICENSE_KEY;
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Wait for the window to fully load
    const handleLoad = () => {
      // Small delay to ensure fullpage is ready
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
        sectionsColor={["#0d1117", "#1a1f35", "#0f172a"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SectionMain fullpageState={state} fullpageApi={fullpageApi} />
              <SectionAboutMe fullpageApi={fullpageApi} />
              <SectionContactMe />
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <CookieConsent
        location="bottom"
        buttonText="Got it"
        style={{
          background: "#0d1117",
          borderTop: "1px solid rgba(96, 165, 250, 0.3)",
        }}
        buttonStyle={{
          background: "#60a5fa",
          color: "#0d1117",
          fontWeight: "600",
          borderRadius: "6px",
        }}
        contentStyle={{
          color: "#f1f5f9",
        }}
      >
        Cookies help me see how you found this site. Thanks for visiting!
      </CookieConsent>
    </>
  );
};
