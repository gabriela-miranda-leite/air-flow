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

const sizeIcon = ({ isFill }: MenuItemIconProps) => {
  if (isFill) return "3.2rem";

  return "2.4rem";
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
    height: ${({ isFill }) => sizeIcon({ isFill })};
    width: ${({ isFill }) => sizeIcon({ isFill })};
  }

  &:active {
    box-shadow: 0px 1px 0px ${theme.colors.white};
    transform: translateY(1px);
  }

  &:hover {
    filter: ${theme.hover};
    background-color: ${({ isFill }) =>
      isFill ? theme.colors.grey : "transparent"};
  }
`;
