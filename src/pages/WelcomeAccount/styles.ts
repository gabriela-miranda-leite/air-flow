import styled from "styled-components";
import Background from "../../assets/images/background.webp";
import theme from "../../styles/theme";

export const ContainerMobile = styled.div`
  position: relative;
  padding: 9.6rem 4.8rem 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    background-image: url(${Background});
    background-size: cover;
    height: 100vh;
    opacity: 0.5;
  }
  @media (min-width: ${theme.screen.lg}) {
    display: none;
  }
`;

export const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.8rem;

  label + button {
    margin-bottom: 4.8rem;
  }

  @media (min-width: ${theme.screen.lg}) {
    margin-top: 12rem;

    label + button {
      margin-bottom: 6.4rem;
    }
  }
`;

export const Label = styled.label`
  margin-bottom: 2.4rem;
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fonts.sizes.md};
  font-weight: 600;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (min-width: ${theme.screen.sm}) {
    font-size: ${theme.fonts.sizes.lg};
  }
`;

export const ContainerDesktop = styled.div`
  display: none;

  @media (min-width: ${theme.screen.lg}) {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;

export const ContainerInfo = styled.div`
  padding: 12rem 12rem 0;
  background-color: ${theme.colors.greyLight};
`;

export const BackgroundImage = styled.div`
  background-image: url(${Background});
  background-size: cover;
  height: 100vh;
  opacity: 0.8;
`;
