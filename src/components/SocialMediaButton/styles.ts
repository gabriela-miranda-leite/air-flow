import styled from "styled-components";
import theme from "../../styles/theme";

import { SocialMediaButtonProps } from "./types";

export const Button = styled.button<SocialMediaButtonProps>`
  align-items: center;
  background-color: ${({ action }) =>
    action === "Login" ? theme.colors.google : theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ action }) =>
    action === "Login" ? theme.colors.white : theme.colors.black};
  column-gap: ${theme.spacing.xl};
  display: flex;
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fonts.sizes.lg};
  justify-content: center;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  width: 100%;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:active {
    box-shadow: 0px 4px 4px 0px
      ${({ action }) =>
        action === "Login" ? theme.colors.google : theme.colors.white};
    transform: translateY(1px);
  }

  &:hover {
    filter: ${theme.hover};
  }
`;
