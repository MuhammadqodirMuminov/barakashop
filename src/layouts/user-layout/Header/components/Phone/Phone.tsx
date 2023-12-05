import * as S from "./Phone.styled";

import PhoneIcon from "@/assets/icons/phone.svg";

export const Phone = () => {
  return (
    <S.Phone href="tel:998919104910">
      {/* <PhoneIcon /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="24"
        height="24"
      >
        <path
          clip-rule="evenodd"
          d="m18.965 16.61-1.173-1.173a1.5 1.5 0 0 0-2.121 0l-.922.922a.71.71 0 0 1-.784.158c-1.336-.585-2.656-1.472-3.833-2.649a12.645 12.645 0 0 1-2.642-3.817.733.733 0 0 1 .162-.811l.826-.826c.671-.671.671-1.62.085-2.206L7.39 5.035a2 2 0 0 0-2.828 0l-.652.651c-.741.741-1.05 1.81-.85 2.87.494 2.613 2.012 5.474 4.461 7.923 2.449 2.449 5.31 3.967 7.923 4.461 1.06.2 2.129-.109 2.87-.85l.651-.651a2 2 0 0 0 0-2.829v0z"
          stroke="#6B59CC"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          opacity="0.5"
          d="M13 6.991A3.944 3.944 0 0 1 17.009 11M13 2.964c2.056 0 4.113.785 5.682 2.354A8.012 8.012 0 0 1 21.036 11"
          stroke="#6B59CC"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>

      <span>+998 (91) 910 49 10</span>
    </S.Phone>
  );
};
