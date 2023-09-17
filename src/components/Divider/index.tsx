import * as S from "./styles";
import { DividerProps } from "./type";

export const Divider = ({ isDark = false }: DividerProps) => (
  <S.Divider isDark={isDark} />
);
