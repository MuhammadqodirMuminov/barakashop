import * as S from "./LocationChoose.styled";

import LocationIcon from "@/assets/icons/location.svg";

export const LocationChoose = () => {
  const city = "Tashkent";

  return (
    <S.LocationChoose>
      <S.CurrentLocation>
        <img src={LocationIcon} alt="" />

        <span>{city}</span>
      </S.CurrentLocation>
    </S.LocationChoose>
  );
};
