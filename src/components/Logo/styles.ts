import styled from "styled-components";

import theme from "../../styles/theme";

export const LogoLarge = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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

export const LogoTextLarge = styled.h1`
  font-family: ${theme.fonts.secondary};
  font-size: ${theme.fonts.sizes["2xl"]};
  font-weight: 700;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (min-width: ${theme.screen.lg}) {
    font-size: ${theme.fonts.sizes["3xl"]};
  }
`;

export const LogoImageSmall = styled.img`
  height: 4.4rem;
`;

export const LogoSmall = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${theme.spacing.md};
`;

export const LogoTextSmall = styled.h1`
  font-family: ${theme.fonts.secondary};
  font-size: ${theme.fonts.sizes.xl};
  font-weight: 700;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
