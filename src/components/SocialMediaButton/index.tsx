import * as S from "./styles";
import { Icons } from "../../components";
import { SocialMediaButtonProps } from "./types";

export const SocialMediaButton = ({
  action,
  ...props
}: SocialMediaButtonProps) => {
  return (
    <S.Button {...props}>
      <Icons.GoogleLogo size={32} />
      {`${action} com a Google`}
    </S.Button>
  );
};
