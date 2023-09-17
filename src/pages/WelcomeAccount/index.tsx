import { Logo, SocialMediaButton } from "../../components";
import * as S from "./styles";

export const WelcomeAccount = () => {
  return (
    <S.Container>
      <Logo size="large" />

      <S.ContainerAccount>
        <S.Label>Acesse o painel com sua da Google.</S.Label>
        <SocialMediaButton action="Login" />

        <S.Label>Ou crie sua conta com a sua conta da Google.</S.Label>
        <SocialMediaButton action="SignIn" />
      </S.ContainerAccount>
    </S.Container>
  );
};
