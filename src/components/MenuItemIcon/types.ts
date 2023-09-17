import { ButtonHTMLAttributes } from "react";

type IconType = "chart" | "dashboard" | "exit" | "setting" | "wind";

export interface MenuItemIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: IconType;
  isActive?: boolean;
  isFill?: boolean;
}
