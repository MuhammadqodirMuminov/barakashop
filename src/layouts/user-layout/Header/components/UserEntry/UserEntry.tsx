import { Link } from "react-router-dom";
import * as S from "./UserEntry.styled";
import UserIcon from '@/assets/icons/user.svg'

export const UserEntry = () => {
  return (
    <S.UserEntry>
      <img src={UserIcon} alt="" />

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
