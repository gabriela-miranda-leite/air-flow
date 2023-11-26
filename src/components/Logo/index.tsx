import * as S from "./styles";
import { LogoProps } from "./type";

import { AirFlowIcon } from "../../assets";

export const Logo = ({ size, iconOnly = false }: LogoProps) => {
  const renderLogo = () => {
    if (iconOnly) {
      return <S.LogoImageSmall src={AirFlowIcon} alt="Logo AirFlow" />;
    }

    if (size === "small") {
      return (
        <S.LogoSmall>
          <S.LogoImageSmall src={AirFlowIcon} alt="Logo AirFlow" />
          <S.LogoTextSmall>AirFlow</S.LogoTextSmall>
        </S.LogoSmall>
      );
    }

    if (size === "inline") {
      return (
        <S.LogoInline>
          <S.LogoImageInline src={AirFlowIcon} alt="Logo AirFlow" />
          <S.LogoTextInline>AirFlow</S.LogoTextInline>
        </S.LogoInline>
      );
    }

    return (
      <S.LogoLarge>
        <S.LogoTextLarge>AirFlow</S.LogoTextLarge>
        <S.LogoImageLarge src={AirFlowIcon} alt="Logo AirFlow" />
      </S.LogoLarge>
    );
  };

  return renderLogo();
};
