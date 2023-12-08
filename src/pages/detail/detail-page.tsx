import { Text } from "@chakra-ui/react";
import {
  DetailMoreDesc,
  DetailMoreWrap,
  DetailText,
  Img,
  SingleBox,
  SingleContentLine,
  SingleContentWrap,
  SingleCount,
  SingleImageBox,
  SingleProductCount,
  SingleProductPrice,
  SingleRating,
  SingleTitle,
  SingleWrapper,
  Wrapper,
} from "./detail-page.styled";
import DetailImg from "@/assets/img/uzum.jpg";
import './detail.swiper.css'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


export const DetailPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Wrapper>
      <SingleWrapper>
        <SingleImageBox>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={DetailImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
     
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={DetailImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
   
      </Swiper>
        </SingleImageBox>
        <SingleContentWrap>
          <SingleBox>
            <SingleRating>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="yellow"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>{" "}
              <span>10.0 </span>
            </SingleRating>
            <SingleTitle>
              {" "}
              Smartfon Xiaomi Redmi 13C, 4GB+128GB I 8GB+256GB, 6.74" 90Hz,
              5000mAh, Dual SIM, 4G LTE
            </SingleTitle>

            <SingleContentLine></SingleContentLine>
            <div>
              <SingleCount>
                <h3>Miqdori:</h3>
                <div>
                  <SingleProductCount>Sotuvda 10 dona bor</SingleProductCount>
                </div>
              </SingleCount>

              <SingleCount>
                <h3>Narxi:</h3>
                <SingleProductPrice> 20 000 000 so'm</SingleProductPrice>
              </SingleCount>
            </div>
          </SingleBox>
        </SingleContentWrap>
      </SingleWrapper>
      <SingleContentLine></SingleContentLine>
      <DetailText>Mahsulot tavsifi</DetailText>
      <DetailMoreWrap>
      <DetailMoreDesc>
        PS5 uchun DualSense Wireless Controller real sensorli aloqa, dinamik
        adaptiv triggerlar va o‘rnatilgan mikrofonga ega. Bularning barchasi
        original dizayn bilan birlashtirilgan. Haptik mulohazalar Tebranish
        motorlarini almashtirgan qo'sh drayvlar bilan o'yindagi
        harakatlaringizga javoban jismoniy fikr-mulohazalarni his qiling.
        Sizning qo'lingizda boshqaruvchining dinamik tebranishi sizga turli xil
        his-tuyg'ularni taqlid qilish imkonini beradi - o'yindagi muhitdan
        tortib, har xil turdagi qurollarning orqaga qaytishigacha. Moslashuvchan
        triggerlar O'yindagi ob'ektlar va muhitlar bilan o'zaro ta'sir
        qilishning haqiqiy tuyg'ularini boshdan kechiring va turli darajadagi
        kuch va tetiklarning qarshiligi tufayli. Siz chindan ham ipning
        tortilishini his qilishingiz yoki tormozni bosishingiz va o'yin
        harakatlariga to'liq sho'ng'ishingiz mumkin bo'ladi. O'rnatilgan
        mikrofon va naushnik uyasi O'rnatilgan mikrofon yoki eshitish vositasini
        3,5 mm raz'em orqali ulab do'stlaringiz bilan3 suhbatlashing. Maxsus
        ovozni o'chirish tugmasi yordamida mikrofoningizni osongina o'chiring.
       
      </DetailMoreDesc>
      </DetailMoreWrap>
    </Wrapper>
  );
};
