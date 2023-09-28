import React, { useState, useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";

import { Logo, SocialMediaButton } from "../../components";
import * as S from "./styles";

export const WelcomeAccount = () => {
  const history = useNavigate();
  const [authData, setAuthData] = useState();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      history("/Dashboard");
    });
  };

  const Mobile = () => (
    <S.ContainerMobile>
      <Logo size="large" />

      <S.ContainerAccount>
        <S.Label>Acesse o painel com sua da Google.</S.Label>
        <SocialMediaButton action="Login" onClick={handleClick} />

        <S.Label>Crie sua conta utilizando sua conta do Google.</S.Label>
        <SocialMediaButton action="SignIn" onClick={handleClick} />
      </S.ContainerAccount>
    </S.ContainerMobile>
  );

  const Desktop = () => (
    <S.ContainerDesktop>
      <S.ContainerInfo>
        <Logo size="large" />
        <S.ContainerAccount>
          <S.Label>Acesse o painel com sua da Google.</S.Label>
          <SocialMediaButton action="Login" onClick={handleClick} />

          <S.Label>Crie sua conta utilizando sua conta do Google.</S.Label>
          <SocialMediaButton action="SignIn" onClick={handleClick} />
        </S.ContainerAccount>
      </S.ContainerInfo>
      <S.BackgroundImage />
    </S.ContainerDesktop>
  );

  return (
    <>
      {Mobile()}
      {Desktop()}
    </>
  );
};
