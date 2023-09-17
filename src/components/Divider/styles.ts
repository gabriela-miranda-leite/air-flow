import styled from "styled-components";
import theme from "../../styles/theme";
import { DividerProps } from "./type";

export const Divider = styled.div<DividerProps>`
  background-color: ${({ isDark }) =>
    isDark ? theme.colors.black : theme.colors.greyLight};
  height: 1px;
  width: 100%;
`;
