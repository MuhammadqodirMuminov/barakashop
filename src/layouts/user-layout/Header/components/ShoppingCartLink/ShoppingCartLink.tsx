import { Link } from "react-router-dom";
import * as S from "./ShoppingCartLink.styled";

import ShoppingCartIcon from "@/assets/icons/shopping-cart.svg";

export const ShoppingCartLink = () => {
  return (
    <Link to={"/"}>
      <S.ShoppingCartLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path
            d="M1.5 1.5H4L7 15c.167.833 1.1 2.4 3.5 2l7.5-.5c1 0 3.1-.6 3.5-3l1-5c.5-1.167.8-3.4-2-3h-10"
            stroke="#6B59CC"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <circle cx="8.5" cy="22.5" r="1.5" fill="#6B59CC"></circle>
          <circle cx="19.5" cy="22.5" r="1.5" fill="#6B59CC"></circle>
        </svg>
        <span>Basket</span>
        <S.ShoppingCartItemsCount>0</S.ShoppingCartItemsCount>
      </S.ShoppingCartLink>
    </Link>
  );
};
