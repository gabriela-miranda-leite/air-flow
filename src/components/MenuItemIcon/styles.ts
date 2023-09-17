import styled from "styled-components";
import theme from "../../styles/theme";

interface MenuItemIconProps {
  isActive?: boolean;
  isFill?: boolean;
}

const backgroundButton = ({ isActive, isFill }: MenuItemIconProps) => {
  if (isActive) return theme.colors.primaryLight;

  if (isFill) return "transparent";

  return theme.colors.grey;
};

export const MenuItemIcon = styled.button<MenuItemIconProps>`
  align-items: center;
  background-color: ${({ isActive, isFill }) =>
    backgroundButton({ isActive, isFill })};
  border-radius: ${theme.borderRadius.md};
  border: none;
  display: flex;
  height: 4.4rem;
  justify-content: center;
  width: 4.4rem;

  svg {
    height: 2.4rem;
    width: 2.4rem;
  }

  &:active {
    box-shadow: 0px 1px 0px ${theme.colors.white};
    transform: translateY(1px);
  }

  &:hover {
    filter: ${theme.hover};
  }
`;
