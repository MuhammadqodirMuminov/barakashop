import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FormPhoneWrap, FormWrap } from "./form.styled";

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 2000);
    });
  }

  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.phone}>
        <FormLabel htmlFor="name">Ismingiz</FormLabel>
        <Input
          _hover={"border:none"}
          id="name"
          type="text"
          placeholder="Ismingizni kiriting"
          {...register("name", {
            required: "Iltimos ismingizni kiriting!!!",
            minLength: { value: 3, message: "Minimal 3 ta harf kiriting" },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>

        <FormPhoneWrap>
          <FormLabel htmlFor="phone">Telefon raqamingiz</FormLabel>
          <Input
            _hover={"border:none"}
            id="phone"
            type="number"
            placeholder="+998 99 999 99 99"
            {...register("phone", {
              required: "Iltimos telefon raqam kiriting!!!",
            })}
          />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormPhoneWrap>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Buyurtma berish
      </Button>
    </FormWrap>
  );
}
