import { AllCategories, ShoppingCartLink, SparePartSearch } from "@/components";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { HeaderBottomProps } from "./types";

export const HeaderBottom = ({ nav }: HeaderBottomProps) => {

  const navItems = nav?.map((item) => {
    return (
      <S.NavItem key={item.id}>
        <Link to={item.id}>{item.title}</Link>
      </S.NavItem>
    );
  });

  return (
    <S.HeaderBottom>
      <S.BottomWrapper>
        <AllCategories />

        <SparePartSearch />

        <S.Nav>
          <ul>{navItems}</ul>
        </S.Nav>

        <ShoppingCartLink />
      </S.BottomWrapper>
    </S.HeaderBottom>
  );
};
