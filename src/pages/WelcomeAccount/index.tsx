import { Logo, SocialMediaButton } from "../../components";
import * as S from "./styles";

export const WelcomeAccount = () => {
  const Mobile = () => (
    <S.ContainerMobile>
      <Logo size="large" />

      <S.ContainerAccount>
        <S.Label>Acesse o painel com sua da Google.</S.Label>
        <SocialMediaButton action="Login" />

        <S.Label>Crie sua conta utilizando sua conta do Google.</S.Label>
        <SocialMediaButton action="SignIn" />
      </S.ContainerAccount>
    </S.ContainerMobile>
  );

  const Desktop = () => (
    <S.ContainerDesktop>
      <S.ContainerInfo>
        <Logo size="large" />
        <S.ContainerAccount>
          <S.Label>Acesse o painel com sua da Google.</S.Label>
          <SocialMediaButton action="Login" />

          <S.Label>Crie sua conta utilizando sua conta do Google.</S.Label>
          <SocialMediaButton action="SignIn" />
        </S.ContainerAccount>
      </S.ContainerInfo>
      <S.BackgroundImage />
    </S.ContainerDesktop>
  );

  return Desktop();
};
