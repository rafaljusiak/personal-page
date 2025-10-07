import styled from "styled-components";
import { isHorizontalMobile, isPortrait } from "./mediaQueries";

export const H1 = styled.h1`
  font-size: 6vh;

  ${isPortrait} {
    font-size: 5vh;
  }
  ${isHorizontalMobile} {
    font-size: 10vh;
  }
`;

export const H2 = styled.h2`
  font-size: 4vh;

  ${isPortrait} {
    font-size: 3.5vh;
  }
  ${isHorizontalMobile} {
    font-size: 7vh;
  }
`;

export const H3 = styled.h3`
  font-size: 4vh;

  ${isPortrait} {
    font-size: 3.5vh;
  }
  ${isHorizontalMobile} {
    font-size: 6vh;
  }
`;

export const P = styled.p`
  font-size: 2.5vh;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  line-height: 155%;

  ${isPortrait} {
    font-size: 2vh;
    line-height: 130%;
    padding: 10px;
    width: 80%;
  }
  ${isHorizontalMobile} {
    font-size: 3.5vh;
    line-height: 140%;
    width: 90%;
  }
`;

export const OnlyHorizontalP = styled(P)`
  ${isPortrait} {
    display: none;
  }
`;

export const Strong = styled.strong`
  font-weight: 1000;
  font-size: 2.8vh;

  ${isPortrait} {
    font-size: 2.3vh;
  }
`;
