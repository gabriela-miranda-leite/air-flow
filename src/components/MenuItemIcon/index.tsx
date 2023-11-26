import * as S from "./styles";

import { MenuItemIconProps, IconText } from "./types";
import { Icons } from "../../components";

export const MenuItemIcon = ({
  iconType,
  isActive,
  isFill,

  ...props
}: MenuItemIconProps) => {
  const IconsType = {
    chart: <Icons.ChartBar />,
    dashboard: <Icons.SquaresFour />,
    exit: <Icons.SignOut />,
    setting: <Icons.GearSix />,
    wind: <Icons.Wind />,
  };
  return (
    <S.MenuItemIcon {...props} isActive={isActive} isFill={isFill}>
      {IconsType[iconType]}
      <p>{IconText[iconType]}</p>
    </S.MenuItemIcon>
  );
};
