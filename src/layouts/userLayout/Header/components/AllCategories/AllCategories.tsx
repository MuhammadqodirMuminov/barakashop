/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, MouseEvent } from "react";

// import { Backdrop } from 'ui'

import * as S from "./AllCategories.styled";

import GridIcon from "@/assets/icons/grid.svg";

import BrakersIcon from "@/assets/icons/brakers.svg";
import EngineIcon from "@/assets/icons/engine.svg";
import CarGarageIcon from "@/assets/icons/car-garage.svg";
import FrontDoorIcon from "@/assets/icons/front-door.svg";
import SafetyBeltIcon from "@/assets/icons/safety-belt.svg";
import GlassWasherIcon from "@/assets/icons/glass-washer.svg";
import CanisterIcon from "@/assets/icons/canister.svg";
import WheelIcon from "@/assets/icons/wheel.svg";
import AccumulatorIcon from "@/assets/icons/accumulator.svg";
import ShortLightIcon from "@/assets/icons/short-light.svg";
import oilsBannerImg from "@/assets/img/banners/oils-2.png";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { CustomButton } from "@/UI/button/button";

export const AllCategories = () => {
  const [popperAnchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isPopperOpen = Boolean(popperAnchorEl);

  const categories = [
    {
      label: "Original spare parts",
      link: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.295 15.961C29.295 8.62 23.343 2.667 16 2.667v5.317a7.977 7.977 0 0 1 7.977 7.977h5.318z"
            fill="#5946D7"
            fill-opacity="0.1"
            stroke="#5946D7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M26.561 15.961v.739c0 6.241-5.058 11.3-11.3 11.3-6.241 0-11.3-5.059-11.3-11.3 0-6.241 5.059-11.3 11.3-11.3H16"
            stroke="#5946D7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
            fill="#5946D7"
            fill-opacity="0.1"
          ></path>
          <path
            d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
            stroke="#5946D7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
    },
    { label: "Non-original spare parts", link: "/", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.295 15.961C29.295 8.62 23.343 2.667 16 2.667v5.317a7.977 7.977 0 0 1 7.977 7.977h5.318z"
          fill="#5946D7"
          fill-opacity="0.1"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M26.561 15.961v.739c0 6.241-5.058 11.3-11.3 11.3-6.241 0-11.3-5.059-11.3-11.3 0-6.241 5.059-11.3 11.3-11.3H16"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          fill="#5946D7"
          fill-opacity="0.1"
        ></path>
        <path
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ) },
    { label: "Body parts", link: "/", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.295 15.961C29.295 8.62 23.343 2.667 16 2.667v5.317a7.977 7.977 0 0 1 7.977 7.977h5.318z"
          fill="#5946D7"
          fill-opacity="0.1"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M26.561 15.961v.739c0 6.241-5.058 11.3-11.3 11.3-6.241 0-11.3-5.059-11.3-11.3 0-6.241 5.059-11.3 11.3-11.3H16"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          fill="#5946D7"
          fill-opacity="0.1"
        ></path>
        <path
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ) },
    { label: "Spare parts", link: "/", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.295 15.961C29.295 8.62 23.343 2.667 16 2.667v5.317a7.977 7.977 0 0 1 7.977 7.977h5.318z"
          fill="#5946D7"
          fill-opacity="0.1"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M26.561 15.961v.739c0 6.241-5.058 11.3-11.3 11.3-6.241 0-11.3-5.059-11.3-11.3 0-6.241 5.059-11.3 11.3-11.3H16"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          fill="#5946D7"
          fill-opacity="0.1"
        ></path>
        <path
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ) },
    { label: "Auto glass", link: "/", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.295 15.961C29.295 8.62 23.343 2.667 16 2.667v5.317a7.977 7.977 0 0 1 7.977 7.977h5.318z"
          fill="#5946D7"
          fill-opacity="0.1"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M26.561 15.961v.739c0 6.241-5.058 11.3-11.3 11.3-6.241 0-11.3-5.059-11.3-11.3 0-6.241 5.059-11.3 11.3-11.3H16"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          fill="#5946D7"
          fill-opacity="0.1"
        ></path>
        <path
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ) },
    { label: "Car oils", link: "/", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.295 15.961C29.295 8.62 23.343 2.667 16 2.667v5.317a7.977 7.977 0 0 1 7.977 7.977h5.318z"
          fill="#5946D7"
          fill-opacity="0.1"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M26.561 15.961v.739c0 6.241-5.058 11.3-11.3 11.3-6.241 0-11.3-5.059-11.3-11.3 0-6.241 5.059-11.3 11.3-11.3H16"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          fill="#5946D7"
          fill-opacity="0.1"
        ></path>
        <path
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ) },
    { label: "Autochemistry", link: "/", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.295 15.961C29.295 8.62 23.343 2.667 16 2.667v5.317a7.977 7.977 0 0 1 7.977 7.977h5.318z"
          fill="#5946D7"
          fill-opacity="0.1"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M26.561 15.961v.739c0 6.241-5.058 11.3-11.3 11.3-6.241 0-11.3-5.059-11.3-11.3 0-6.241 5.059-11.3 11.3-11.3H16"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          fill="#5946D7"
          fill-opacity="0.1"
        ></path>
        <path
          d="M18.238 13.724a4.21 4.21 0 1 1-5.953 5.953 4.21 4.21 0 0 1 5.953-5.953"
          stroke="#5946D7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ) }
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

  return (
    <S.AllCategories open={isPopperOpen}>
      <CustomButton>Katalog</CustomButton>

      {/* <Popper
          open={isPopperOpen}
          anchorEl={popperAnchorEl}
          placement="bottom-start"
          disablePortal
        >
          <S.AllCategoriesContainer>
            <S.AllCategoriesBox>
              <S.Categories>{categoriesItems}</S.Categories>

              <S.OilsBanner>
                <Text>
                  Car oils №1 <br /> from official <br /> dealers
                </Text>
                <img src={oilsBannerImg} alt="" />
              </S.OilsBanner>
            </S.AllCategoriesBox>
          </S.AllCategoriesContainer>
        </Popper> */}

      {/* <Popover>
        <PopoverTrigger>
          <CustomButton text="Trigger" />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            <S.AllCategoriesContainer>
              <S.AllCategoriesBox>
                <S.Categories>{categoriesItems}</S.Categories>

                <S.OilsBanner>
                  <Text>
                    Car oils №1 <br /> from official <br /> dealers
                  </Text>
                  <img src={oilsBannerImg} alt="" />
                </S.OilsBanner>
              </S.AllCategoriesBox>
            </S.AllCategoriesContainer>
          </PopoverBody>
        </PopoverContent>
      </Popover> */}
    </S.AllCategories>
  );
};
