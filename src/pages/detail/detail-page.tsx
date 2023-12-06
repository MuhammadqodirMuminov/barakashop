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
export const DetailPage = () => {
  return (
    <Wrapper>
      <SingleWrapper>
        <SingleImageBox>
          <Img src={DetailImg} />
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
        DualSense simsiz boshqaruvchisi DUALSHOCK®4-dan ko'plab xususiyatlarni
        meros qilib oladi va ularga keyingi avlod o'yinlari uchun yangi hayot
        baxsh etadi. O'rnatilgan batareya Endi USB Type-C®4 ​​bilan quvvatlang
        va o‘ynang. O'rnatilgan dinamik Ba'zi o'yinlar boshqaruvchining
        qo'shimcha funksiyalaridan foydalanadi va yuqori aniqlikdagi ovoz
        effektlari bilan boshqa tajriba darajasini qo'shadi. Siqilish sensori
        O'rnatilgan akselerometr va giroskop qo'llab-quvvatlanadigan o'yinlar
        uchun intuitiv harakat nazoratini ta'minlaydi. Turi: geympad Ulanish
        turi: simsiz Moslik: Android, PS5, iOS, kompyuter Mos qurilmalar
        ro'yxati: Sony Playstation 5 O'rnatilgan sensorlar: akselerometr,
        giroskop, harakat detektori XInput/DirectInput-ni qo'llab-quvvatlash:
        DirectInput Vibratsiyali teskari aloqa va fikr-mulohazalar: tebranish
        haqida fikr-mulohaza Mini joystiklar soni: 2 Tugmalar soni: 16
        Trackpadlar soni: 1 Simsiz aloqa diapazoni: 10 m Quvvat manbai: o'z
        batareyasi Ish vaqti: 10 soat Bizning → do'konimizdagi barcha
        mahsulotlarni ko'rib chiqing! Sizga albatta biror narsa yoqadi! Buyurtma
        olingan kundan boshlab 14 kun kafolat Agar sizda mahsulot haqida
        savollaringiz bo'lsa yoki u mos kelmasa yoki sifat haqida shikoyatlar
        bo'lsa, biz bilan har doim chat orqali bog'lanishingiz mumkin va biz har
        qanday vaziyatdan chiqish yo'lini topamiz!
      </DetailMoreDesc>
      </DetailMoreWrap>
    </Wrapper>
  );
};
