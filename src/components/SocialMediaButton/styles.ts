import styled from "styled-components";
import theme from "../../styles/theme";

export const Button = styled.button`
  align-items: center;
  background-color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  column-gap: ${theme.spacing["2xl"]};
  display: flex;
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fonts.sizes.lg};
  justify-content: center;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  width: 35.2rem;

  &:active {
    box-shadow: 0px 4px 0px ${theme.colors.white};
    transform: translateY(1px);
  }

  &:hover {
    filter: ${theme.hover};
  }
`;
