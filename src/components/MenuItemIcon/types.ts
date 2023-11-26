import { ButtonHTMLAttributes } from "react";

type IconType = "chart" | "dashboard" | "exit" | "setting" | "wind";

export enum IconText {
  dashboard = "Painel",
  chart = "Performance",
  exit = "Sair",
  wind = "Ventilação",
  setting = "Configurações",
}

export interface MenuItemIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: IconType;
  isActive?: boolean;
  isFill?: boolean;
}
