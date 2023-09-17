import { ButtonHTMLAttributes } from "react";

type ActionType = "SignIn" | "Login";

export interface SocialMediaButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  action: ActionType;
}
