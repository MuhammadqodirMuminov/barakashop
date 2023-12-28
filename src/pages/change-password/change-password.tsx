import { useRef, useState } from "react";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import * as S from "./styled";
import { ProfileService } from "@/services/profile/profile-service";
import { useTypedSelector } from "@/hooks";
import { IBody } from "@/types/edit-password";
import { addNotification } from "@/utils";
import toast from "react-hot-toast";
import { CustomButton } from "@/ui";

export const SellerProfileChangePassword = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { user } = useTypedSelector((state) => state.auth);

  const editPassword = async (body: IBody) => {
    const response = await ProfileService.editPassword(user?.id, body);
    if (response?.status == 200) {
      addNotification("Muvaffaqqiyatli o'zgartirildi");
      setLoading(false);

      return response;
    }
  };

  const password:React.MutableRefObject<string | undefined> = useRef();
  const confirmPassword: React.MutableRefObject<string | undefined> = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const password1 = password.current?.value;
    const password2 = confirmPassword.current?.value;

    if (password1 == "" || password2 == "") {
      toast.error("Maydonni to'ldiring");
    } else if (password1 != password2) {
      toast.error("Tasdiqlash paroli mos emas");
    } else {
      setLoading(true);
      const data: IBody = {
        newpassword: password1,
        confirmpassword: password2,
      };
      editPassword(data);
    }
  };

  return (
    <S.Wrapper>
      <S.Box>
        <S.Title>Shaxsiy Parolni O‘zgartirish</S.Title>
        <S.Span>
          <LockIcon />
        </S.Span>

        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon />
            </InputLeftElement>
            <Input
              ref={password}
              type={show ? "text" : "password"}
              placeholder="********"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon />
            </InputLeftElement>
            <Input
              ref={confirmPassword}
              type={show ? "text" : "password"}
              placeholder="********"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <CustomButton
            onClick={handleSubmit}
            isLoading={loading}
            type="submit"
            text={"So'rov yuborish"}
            bg={"yellow.400"}
            color={"white"}
            _hover={{
              bg: "yellow.500",
            }}
          />
        </Stack>
      </S.Box>
    </S.Wrapper>
  );
};
