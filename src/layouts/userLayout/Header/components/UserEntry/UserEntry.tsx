import { Link } from "react-router-dom";
import * as S from "./UserEntry.styled";

export const UserEntry = () => {
  return (
    <S.UserEntry>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="24"
        height="24"
      >
        <path
          d="M12 14.5c3.47 0 5.464.853 6.593 1.716 1.215.93 1.407 2.559 1.407 4.088C20 21.24 19.24 22 18.304 22H5.696C4.76 22 4 21.24 4 20.304c0-1.529.192-3.159 1.407-4.088C6.536 15.353 8.529 14.5 12 14.5z"
          fill="#5946D7"
          fill-opacity="0.1"
          stroke="#6B59CC"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <circle
          cx="12"
          cy="7"
          r="4"
          stroke="#6B59CC"
          stroke-width="1.5"
        ></circle>
      </svg>

      <>
        <Link to={"/"}>
          <a>
            <span>Login</span>
          </a>
        </Link>
      </>
    </S.UserEntry>
  );
};
