import styled from "styled-components";
import theme from "../../styles/theme";

export const SideMenuIcon = styled.div`
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  @media (min-width: ${theme.screen.lg}) {
    padding: ${theme.spacing["2xl"]} ${theme.spacing.xl};
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: ${theme.spacing["2xl"]};
`;

export const MainMenuIcon = styled.div`
  margin: ${theme.spacing["2xl"]} 0;
`;

export const Description = styled.p`
  display: none;

  @media (min-width: ${theme.screen.lg}) {
    display: block;
    font-size: ${theme.fonts.sizes.sm};
    color: ${theme.colors.greyMedium};
    letter-spacing: 1px;
  }
`;

export const GroupMenuIcons = styled.div`
  margin-top: ${theme.spacing.xl};
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing.xl};
  width: max-content;

  @media (min-width: ${theme.screen.lg}) {
    width: 100%;
  }
`;

export const FooterSideMenu = styled.div``;

export const ExitMenu = styled.div`
  margin-top: ${theme.spacing.sm};

  @media (min-width: ${theme.screen.md}) {
    margin-top: ${theme.spacing.lg};
  }
`;
