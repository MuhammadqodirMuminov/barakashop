/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, MouseEvent } from "react";

import * as S from "./AllCategories.styled";

import GridIcon from "@/assets/icons/grid.svg";

import BrakersIcon from "@/assets/icons/brakers.svg";
import EngineIcon from "@/assets/icons/engine.svg";
import CarGarageIcon from "@/assets/icons/car-garage.svg";
import FrontDoorIcon from "@/assets/icons/front-door.svg";
import SafetyBeltIcon from "@/assets/icons/safety-belt.svg";
import GlassWasherIcon from "@/assets/icons/glass-washer.svg";
import CanisterIcon from "@/assets/icons/canister.svg";

import oilsBannerImg from "@/assets/img/banners/oils-2.png";
import { Link } from "react-router-dom";
import { Text, useDisclosure } from "@chakra-ui/react";

import { CustomButton } from "@/ui/button/button";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

export const AllCategories = () => {
  const [popperAnchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isPopperOpen = Boolean(popperAnchorEl);

  const categories = [
    {
      label: "Original spare parts",
      link: "/",
      icon: <img src={BrakersIcon} alt="" />,
    },
    {
      label: "Non-original spare parts",
      link: "/",
      icon: <img src={EngineIcon} alt="" />,
    },
    {
      label: "Body parts",
      link: "/",
      icon: <img src={CarGarageIcon} alt="" />,
    },
    {
      label: "Spare parts",
      link: "/",
      icon: <img src={FrontDoorIcon} alt="" />,
    },
    {
      label: "Auto glass",
      link: "/",
      icon: <img src={SafetyBeltIcon} alt="" />,
    },
    {
      label: "Car oils",
      link: "/",
      icon: <img src={GlassWasherIcon} alt="" />,
    },
    {
      label: "Autochemistry",
      link: "/",
      icon: <img src={CanisterIcon} alt="" />,
    },
  ];

  const togglePopper = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(popperAnchorEl ? null : e.currentTarget);
  };

  const categoriesItems = categories.map(({ label, link, icon }) => {
    return (
      <S.CategoryItem key={label}>
        <Link to={"/"}>
          <S.CategoryLink>
            <S.CategoryItemIcon>{icon}</S.CategoryItemIcon>
            <Text>{label}</Text>
          </S.CategoryLink>
        </Link>
      </S.CategoryItem>
    );
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <S.AllCategories open={isPopperOpen}>
      <CustomButton
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"5px"}
        flexDirection={"row-reverse"}
        bgColor={"#023581"}
        color={"#fff"}
        text={"Katalog"}
        
        _hover={{backgroundColor:"023581"}}
        _active={{backgroundColor:"023581"}}
        image={
          <>
            <img src={GridIcon} alt="" />
          </>
        }
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={"none"}
          marginTop={"110px"}
          width={"100%"}
          maxW={"1260px"}
        >
          <ModalBody>
            {" "}
            <S.AllCategoriesContainer>
              <S.AllCategoriesBox>
                <S.Categories>{categoriesItems}</S.Categories>

                <S.OilsBanner>
                  <p>
                    Car oils №1 <br /> from official <br /> dealers
                  </p>
                  <img src={oilsBannerImg} alt="" />
                </S.OilsBanner>
              </S.AllCategoriesBox>
            </S.AllCategoriesContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </S.AllCategories>
  );
};
