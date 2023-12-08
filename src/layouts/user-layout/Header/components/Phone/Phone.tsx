import * as S from "./Phone.styled";

import PhoneIcon from "@/assets/icons/phone.svg";

export const Phone = () => {
  return (
    <S.Phone href="tel:998919104910">
      {/* <PhoneIcon /> */}
      <img src={PhoneIcon} alt="" />

      <span>+998 (91) 910 49 10</span>
    </S.Phone>
  );
};
