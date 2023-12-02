import { useState, MouseEvent } from "react";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import { Backdrop } from "ui";
import * as S from "./AllCategories.styled";
import GridIcon from "public/icons/grid.svg";

import BrakersIcon from "public/icons/brakers.svg";
import EngineIcon from "public/icons/engine.svg";
import CarGarageIcon from "public/icons/car-garage.svg";
import FrontDoorIcon from "public/icons/front-door.svg";
import SafetyBeltIcon from "public/icons/safety-belt.svg";
import GlassWasherIcon from "public/icons/glass-washer.svg";
import CanisterIcon from "public/icons/canister.svg";
import WheelIcon from "public/icons/wheel.svg";
import AccumulatorIcon from "public/icons/accumulator.svg";
import ShortLightIcon from "public/icons/short-light.svg";
import oilsBannerImg from "public/img/banners/oils-2.png";
import { BASE_URL } from "services/api.service";
export interface Category {
  link: string;
  icon: string;
  label: string;
}

export const AllCategories = ({ category }: { category: Category[]}) => {
  const [popperAnchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isPopperOpen = Boolean(popperAnchorEl);

  const categories = category?.map((item: Category) => {
    return { label: `${item.label}`, link: item.link, icon: item.icon };
  });

  const togglePopper = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(popperAnchorEl ? null : e.currentTarget);
  };

  const closePopper = () => {
    setAnchorEl(null);
  };

  const categoriesItems = categories?.map(({ label, link, icon }: Category) => {
    return (
      <S.CategoryItem key={label}>
        <Link
          href={link}
          passHref
        >
          <S.CategoryLink>
            <img
              width={32}
              height={32}
              src={BASE_URL + "/uploads/" + icon}
              alt="product"
            />
            <Typography component="span">{label}</Typography>
          </S.CategoryLink>
        </Link>
      </S.CategoryItem>
    );
  });

  return (
    <S.AllCategories open={isPopperOpen}>
      <S.CategoriesButton
        open={isPopperOpen}
        onClick={togglePopper}
        startIcon={<GridIcon />}
      >
        Katalog
      </S.CategoriesButton>

      <Backdrop
        open={isPopperOpen}
        onClick={() => {
          if (popperAnchorEl) {
            closePopper();
          }
        }}
      >
        <Popper
          open={isPopperOpen}
          anchorEl={popperAnchorEl}
          placement="bottom-start"
          disablePortal
        >
          <S.AllCategoriesContainer>
            <S.AllCategoriesBox>
              <S.Categories>{categoriesItems}</S.Categories>

              <S.OilsBanner>
                <Typography>
                  Car oils №1 <br /> from official <br /> dealers
                </Typography>
                <Image
                  src={oilsBannerImg}
                  alt="banner"
                  layout="fill"
                  quality={100}
                />
              </S.OilsBanner>
            </S.AllCategoriesBox>
          </S.AllCategoriesContainer>
        </Popper>
      </Backdrop>
    </S.AllCategories>
  );
};
