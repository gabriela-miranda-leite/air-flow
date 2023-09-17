import * as S from "./styles";
import { Icons } from "../../components";
import { SocialMediaButtonProps } from "./types";

export const SocialMediaButton = ({ type }: SocialMediaButtonProps) => {
  return (
    <S.Button>
      <Icons.GoogleLogo size={32} />
      {`${type} com a Google`}
    </S.Button>
  );
};
