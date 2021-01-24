import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 6vh;
  @media (max-width: 768px) {
    font-size: 5vh;
  }
`;

export const H2 = styled.h2`
  font-size: 5vh;
`;

export const H3 = styled.h3`
  font-size: 4vh;
`;

export const P = styled.p`
  font-size: 3vh;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  line-height: 180%;
  @media (max-width: 768px) {
    line-height: 130%;
    padding: 10px;
    width: 80%;
  }
`;

export const OnlyDesktopP = styled(P)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Strong = styled.strong`
  font-weight: 1000;
  font-size: 3.5vh;
`;
