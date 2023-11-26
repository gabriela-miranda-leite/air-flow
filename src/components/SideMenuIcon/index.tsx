import { Divider, MenuItemIcon, Logo } from "../../components";

import * as S from "./styles";

export const SideMenuIcon = () => (
  <S.SideMenuIcon>
    <div>
      <S.LogoContainer>
        <Logo size="inline" />
      </S.LogoContainer>

      <Divider />

      <S.MainMenuIcon>
        <MenuItemIcon iconType="dashboard" />
      </S.MainMenuIcon>

      <S.Description>ANÁLISES</S.Description>
      <S.GroupMenuIcons>
        <MenuItemIcon iconType="chart" />
        <MenuItemIcon iconType="wind" />
      </S.GroupMenuIcons>
    </div>

    <S.FooterSideMenu>
      <Divider />
      <S.ExitMenu>
        <MenuItemIcon iconType="exit" isFill />
      </S.ExitMenu>
    </S.FooterSideMenu>
  </S.SideMenuIcon>
);
