import { products } from "@/constants";
import {
  CountWrap,
  DetailMoreDesc,
  DetailMoreWrap,
  DetailText,
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
} from "./styled";

import { DetailSlider, ProductSlider } from "@/components";
import { Counter } from "@/ui/counter/counter";
import HookForm from "@/ui/form/form";
import { Flex, Skeleton } from "@chakra-ui/react";
import { useActions, useTypedSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IParams } from "@/types/detail";

export const DetailPage = () => {

  const { getOneProduct } = useActions();

  const { id }: IParams = useParams();

  const { oneProduct, loading } = useTypedSelector((state) => state.product);

  useEffect(() => {
    getOneProduct(id);
  }, []);

	// console.log(loading.getOne);
	
  // console.log(oneProduct);

	const [detailLoad, setDetailLoad] = useState(true) 

	useEffect(() => {
		if(loading.getOne) {
			setDetailLoad(false)
		}else {
			setDetailLoad(true)
		}
	},[])




  return (
    <Wrapper>
      <SingleWrapper>
        <SingleImageBox>
          <Skeleton isLoaded={detailLoad}>
            <DetailSlider images={oneProduct?.images} />
          </Skeleton>
        </SingleImageBox>

        <SingleContentWrap>
          <SingleBox>
            <SingleRating>
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
              </svg>
              <span>
                <Skeleton isLoaded={detailLoad}>{oneProduct?.rating}</Skeleton>{" "}
              </span>
            </SingleRating>
            <SingleTitle>
              {" "}
              <Skeleton isLoaded={detailLoad}>
               {oneProduct?.title}
              </Skeleton>
            </SingleTitle>

            <SingleContentLine />
            <div>
              <Flex justify={"space-between"}>
                <SingleCount>
                  <h3>Miqdori:</h3>
                  <CountWrap>
                    <Counter />
                    <SingleProductCount>
                      <Skeleton isLoaded={detailLoad}>
                        Sotuvda {oneProduct?.count} dona bor
                      </Skeleton>
                    </SingleProductCount>
                  </CountWrap>
                </SingleCount>

                <SingleCount>
                  <h3>Narxi:</h3>
                  <SingleProductPrice>
                    {" "}
                    <Skeleton isLoaded={detailLoad}>{oneProduct?.product_price} so'm</Skeleton>
                  </SingleProductPrice>
                </SingleCount>
              </Flex>
              <SingleContentLine></SingleContentLine>

              <HookForm />
            </div>
          </SingleBox>
        </SingleContentWrap>
      </SingleWrapper>

      <SingleContentLine />

      <DetailText>Mahsulot tavsifi</DetailText>
      <DetailMoreWrap>
        <DetailMoreDesc>
          <Skeleton isLoaded={detailLoad}>
            {" "}
           {oneProduct?.description}
          </Skeleton>
        </DetailMoreDesc>
      </DetailMoreWrap>

      <ProductSlider items={products} title={"Same products"} />
    </Wrapper>
  );
};
