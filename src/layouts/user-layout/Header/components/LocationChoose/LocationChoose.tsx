import * as S from "./LocationChoose.styled";

import LocationIcon from "@/assets/icons/location.svg";

export const LocationChoose = () => {
  const city = "Tashkent";

  return (
    <S.LocationChoose>
      <S.CurrentLocation>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="24"
          height="24"
        >
          <path
            opacity="0.5"
            clip-rule="evenodd"
            d="M12 13v0a3 3 0 0 1-3-3v0a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3z"
            stroke="#6B59CC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            clip-rule="evenodd"
            d="M12 21s-7-5.75-7-11a7 7 0 1 1 14 0c0 5.25-7 11-7 11z"
            stroke="#6B59CC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>

        <span>{city}</span>
      </S.CurrentLocation>
    </S.LocationChoose>
  );
};
