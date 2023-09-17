import * as S from "./styles";
import { LogoProps } from "./type";

import LogoImage from "../../assets/images/IconLogo.webp";

export const Logo = ({ size, iconOnly = false }: LogoProps) => {
  const renderLogo = () => {
    if (iconOnly) {
      return <S.LogoImageSmall src={LogoImage} alt="Logo AirFlow" />;
    }

    if (size === "small") {
      return (
        <S.LogoSmall>
          <S.LogoImageSmall src={LogoImage} alt="Logo AirFlow" />
          <S.LogoTextSmall>AirFlow</S.LogoTextSmall>
        </S.LogoSmall>
      );
    }

    return (
      <S.LogoLarge>
        <S.LogoTextLarge>AirFlow</S.LogoTextLarge>
        <S.LogoImageLarge src={LogoImage} alt="Logo AirFlow" />
      </S.LogoLarge>
    );
  };

  return renderLogo();
};
