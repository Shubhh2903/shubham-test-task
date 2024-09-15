import React from "react";
import styled, { css } from "styled-components";
import Flex from "../../../../lib/atoms/flex";
import { CATEGORY_PRODUCT } from "../../api/constant";

const ShopbyCategory = () => {
  return (
    <MainContainer $fullwidth direction="column">
      <Flex justifycontent="space-between" $fullwidth>
        <Heading>Shop by Category</Heading>
        <OtherTxt>Browse all </OtherTxt>
      </Flex>
      <ProductSection>
        {CATEGORY_PRODUCT.map((data, index) => (
          <BoxSection $fullwidth direction="column" key={index}>
            <ImageSection
              src={data.img}
              alignitems="center"
              justifycontent="center"
            >
              <Title>{data.title}</Title>
            </ImageSection>
          </BoxSection>
        ))}
      </ProductSection>
    </MainContainer>
  );
};

export default ShopbyCategory;
const Title = styled(Flex)`
  padding: 13px 16px 11px 16px;
  border-radius: 100px;
  background: #111;
  width: fit-content;
  color: #e9fe97;
  text-align: center;
  font-family: "Powergrotesk";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.36px;
  text-transform: uppercase;
`;

const ImageSection = styled(Flex)`
  width: 100%;
  height: 536px;
  background-position: center;
  background-repeat: no-repeat;
  ${({ src }) =>
    src &&
    css`
      background-image: url(${src});
    `}
`;

const BoxSection = styled(Flex)`
  gap: 15px;
  height: 100%;
`;

const ProductSection = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
`;

const OtherTxt = styled.div`
  color: #111;
  font-family: "Articulatcf";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-decoration: underline;
  cursor: pointer;
`;

const Heading = styled.div`
  color: #111;
  font-family: "Powergrotesk";
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.36px;
  text-transform: uppercase;
`;

const MainContainer = styled(Flex)`
  gap: 24.44px;
  max-width: 1420px;
  width: 90%;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 94px;
`;
