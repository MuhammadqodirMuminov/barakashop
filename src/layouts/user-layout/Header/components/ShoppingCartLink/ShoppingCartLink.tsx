import { Link } from "react-router-dom";
import * as S from "./ShoppingCartLink.styled";

import ShoppingCartIcon from "@/assets/icons/shopping-cart.svg";

export const ShoppingCartLink = () => {
  return (
    <Link to={"/"}>
      <S.ShoppingCartLink>
        <img src={ShoppingCartIcon} alt="" />
        <span>Basket</span>
        <S.ShoppingCartItemsCount>0</S.ShoppingCartItemsCount>
      </S.ShoppingCartLink>
    </Link>
  );
};
