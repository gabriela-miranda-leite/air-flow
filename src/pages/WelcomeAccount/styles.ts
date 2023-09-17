import styled from "styled-components";
import Background from "../../assets/images/background.webp";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  padding: 9.6rem 4.8rem 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    background-image: url(${Background});
    background-size: cover;
    background-position-y: bottom;
    height: 100vh;
    opacity: 0.5;
  }
`;

export const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.8rem;

  label + button {
    margin-bottom: 4.8rem;
  }
`;

export const Label = styled.label`
  margin-bottom: 2.4rem;
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fonts.sizes.md};
  font-weight: 600;

  @media (min-width: ${theme.screen.sm}) {
    font-size: ${theme.fonts.sizes.lg};
  }
`;
