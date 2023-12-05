import React from "react";

import * as S from "./Footer.styled";

// import ChatIcon from 'public/icons/chat.svg'

// import VisaIcon from "public/icons/payments/visa.svg";
// import MasterCardIcon from "public/icons/payments/mastercard.svg";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export const Footer = () => {
  const nav = [
    {
      tag: "Company Menu",
      items: [
        { label: "About us", link: "/" },
        { label: "Requisites and information", link: "/" },
        { label: "News", link: "/" },
        { label: "Careers", link: "/" },
        { label: "Suppliers", link: "/" },
        { label: "Contacts", link: "/" },
      ],
    },
    {
      tag: "Catalogs",
      items: [
        { label: "Original spare parts", link: "/" },
        { label: "Non-original spare parts", link: "/" },
        { label: "Spare parts", link: "/" },
        { label: "Car oils", link: "/" },
        { label: "Accumulator", link: "/" },
        { label: "Sale", link: "/" },
      ],
    },
    {
      tag: "Help",
      items: [
        { label: "FAQ", link: "/" },
        { label: "Online consultation", link: "/" },
        { label: "Payment", link: "/" },
        { label: "Delivery", link: "/" },
        { label: "Purchase returns", link: "/" },
        { label: "Forgot password", link: "/" },
      ],
    },
    {
      tag: "Products and brands",
      items: [
        { label: "List of brands", link: "/" },
        { label: "Popular goods", link: "/" },
        { label: "Availability", link: "/" },
      ],
    },
  ];

  const payments = [
    {
      label: "visa",
      icon: (
        <svg
          width="47"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.202 15.73h-3.776l2.362-14.64h3.776l-2.362 14.64ZM33.893 1.448a9.287 9.287 0 0 0-3.387-.623c-3.73 0-6.356 1.993-6.372 4.843-.031 2.103 1.88 3.27 3.31 3.972 1.46.716 1.957 1.184 1.957 1.823-.014.98-1.18 1.433-2.267 1.433-1.508 0-2.316-.234-3.544-.78l-.497-.233-.529 3.286c.886.405 2.518.764 4.212.78 3.963 0 6.543-1.963 6.573-5 .015-1.667-.994-2.944-3.17-3.988-1.32-.67-2.13-1.121-2.13-1.806.016-.624.685-1.262 2.176-1.262a6.404 6.404 0 0 1 2.813.56l.342.156.513-3.161ZM38.911 10.544c.311-.841 1.508-4.096 1.508-4.096-.016.031.31-.857.497-1.402l.264 1.262s.715 3.504.87 4.236h-3.139Zm4.662-9.454h-2.921c-.901 0-1.585.265-1.974 1.215l-5.61 13.425h3.963l.793-2.196h4.848c.109.514.451 2.196.451 2.196h3.497L43.573 1.09ZM13.271 1.09l-3.698 9.983-.404-2.024C8.485 6.712 6.34 4.174 3.947 2.912l3.388 12.803h3.994L17.264 1.09H13.27Z"
            fill="#fff"
          ></path>
          <path
            d="M6.138 1.09H.062L0 1.386C4.74 2.601 7.879 5.53 9.168 9.05l-1.32-6.728c-.218-.935-.886-1.2-1.71-1.23Z"
            fill="#B1B4B9"
          ></path>
        </svg>
      ),
    },
    {
      label: "mastercard",
      icon: (
        <svg
          width="27"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.792 15.816H10.83V.959h7.962v14.857Z"
            fill="#B1B4B9"
          ></path>
          <path
            d="M10.434 8a8 8 0 0 1 3.04-6.29A7.902 7.902 0 0 0 8.554 0C4.158 0 .594 3.582.594 8s3.564 8 7.96 8c1.857 0 3.566-.64 4.92-1.71A8 8 0 0 1 10.434 8Z"
            fill="#F5F3F0"
          ></path>
          <path
            d="M26.348 8c0 4.418-3.564 8-7.96 8a7.905 7.905 0 0 1-4.921-1.71A8 8 0 0 0 16.507 8a8 8 0 0 0-3.04-6.29A7.905 7.905 0 0 1 18.387 0c4.397 0 7.96 3.582 7.96 8Z"
            fill="#7A7A7E"
          ></path>
        </svg>
      ),
    },
  ];

  const navColumns = nav.map(({ tag, items }) => {
    const navItems = items.map(({ label, link }) => {
      return (
        <S.NavItem key={label}>
          <Link to={"/"}>{label}</Link>
        </S.NavItem>
      );
    });

    return (
      <S.NavColumn key={tag}>
        <S.NavTag>{tag}</S.NavTag>

        <S.NavList>{navItems}</S.NavList>
      </S.NavColumn>
    );
  });

  const paymentItems = payments.map(({ label, icon }) => {
    return <S.PaymentItem key={label}>{icon}</S.PaymentItem>;
  });

  const docs = (
    <S.Documents>
      <Link to="/">Privacy</Link>
      <Link to="/">Confidentiality</Link>
    </S.Documents>
  );

  return (
    <S.Footer>
      <S.Wrapper>
        <S.Top>
          {navColumns}

          <S.TopRight>
            <S.Consultation>
              <Link to="/">
                <S.ConsultationLink>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.979 4.725c.242-1.404 1.358-2.436 2.766-2.65 1.35-.206 3.2-.408 5.254-.408 2.054 0 3.905.202 5.255.407 1.408.215 2.524 1.247 2.766 2.65.168.98.313 2.222.313 3.61 0 1.387-.145 2.63-.313 3.608-.242 1.404-1.358 2.436-2.766 2.65a35.73 35.73 0 0 1-4.735.404l-5.096 3.011a.833.833 0 0 1-1.257-.717v-2.837c-1.128-.375-1.98-1.306-2.187-2.511a21.416 21.416 0 0 1-.313-3.609c0-1.387.144-2.63.313-3.608Zm3.02 1.942c0-.46.373-.834.834-.834h8.333a.833.833 0 1 1 0 1.667H5.833a.833.833 0 0 1-.834-.833ZM5 10c0-.46.373-.833.834-.833h3.333a.833.833 0 0 1 0 1.666H5.833A.833.833 0 0 1 4.999 10Z"
                      fill="#fff"
                    ></path>
                  </svg>

                  <span>
                    <span>Online consultation</span>
                    <span>Ask questions</span>
                  </span>
                </S.ConsultationLink>
              </Link>

              <S.ConsultationStatus>
                <S.ConsultationIndicator />

                <Text>Service is running normally</Text>
              </S.ConsultationStatus>
            </S.Consultation>

            {docs}
          </S.TopRight>
        </S.Top>

        <S.Bottom>
          <Text>Copyright © ООО «Blabla.bla» 2023. All rights reserved.</Text>

          <S.PaymentAccept>
            <Text>Accept for payment</Text>

            <S.PaymentServices>{paymentItems}</S.PaymentServices>
          </S.PaymentAccept>

          {docs}
        </S.Bottom>
      </S.Wrapper>
    </S.Footer>
  );
};
