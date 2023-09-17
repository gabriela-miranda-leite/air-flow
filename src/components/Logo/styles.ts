import styled from "styled-components";

import theme from "../../styles/theme";

export const LogoLarge = styled.figure`
  display: flex;
  flex-direction: column;
`;

export const LogoImageLarge = styled.img`
  width: 3.2rem;
  position: absolute;
  top: 5.6rem;

  @media (min-width: ${theme.screen.lg}) {
    width: 8.4rem;
    top: 11.2rem;
  }
`;

export const LogoTextLarge = styled.figcaption`
  font-family: ${theme.fonts.secondary};
  font-size: ${theme.fonts.sizes["2xl"]};
  font-weight: 700;
  position: relative;

  @media (min-width: ${theme.screen.lg}) {
    font-size: ${theme.fonts.sizes["3xl"]};
  }
`;

export const LogoImageSmall = styled.img`
  height: 4.4rem;
`;

export const LogoSmall = styled.figure`
  display: flex;
  align-items: center;
  column-gap: ${theme.spacing.md};
`;

export const LogoTextSmall = styled.figcaption`
  font-family: ${theme.fonts.secondary};
  font-size: ${theme.fonts.sizes.xl};
  font-weight: 700;
`;
