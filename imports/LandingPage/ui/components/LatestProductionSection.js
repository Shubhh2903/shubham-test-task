import React from "react";
import styled, { css } from "styled-components";
import Flex from "../../../../lib/atoms/flex";
import { LATEST_PRODUCT_SECTION } from "../../api/constant";

const LatestProductionSection = () => {
  return (
    <MainContainer $fullwidth direction="column">
      <Flex justifycontent="space-between" $fullwidth>
        <Heading>Latest Products</Heading>
        <OtherTxt>Browse all </OtherTxt>
      </Flex>
      <ProductSection>
        {LATEST_PRODUCT_SECTION.map((data, index) => (
          <BoxSection $fullwidth direction="column" key={index}>
            <ImageSection src={data.img} />
            <InfoSection direction="column">
              <ProdTitle>{data.title}</ProdTitle>
              <OtherInforWrap direction="column">
                <PricingSection>
                  {index === 0 && <AfterPrice>£399</AfterPrice>}
                  <Price>{data.price}</Price>
                </PricingSection>
                <Othertxt>{data.othertxt}</Othertxt>
              </OtherInforWrap>
            </InfoSection>
          </BoxSection>
        ))}
      </ProductSection>
    </MainContainer>
  );
};

export default LatestProductionSection;

const Othertxt = styled.div`
  color: #111;
  font-family: "Articulatcf";
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.12px;
`;

const AfterPrice = styled.div`
  color: #111;
  font-family: "Articulatcf";
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-decoration: line-through;
`;

const Price = styled(AfterPrice)`
  font-weight: 500;
  letter-spacing: 0.24px;
  text-decoration: none;
`;

const PricingSection = styled(Flex)`
  gap: 7px;
`;

const OtherInforWrap = styled(Flex)`
  gap: 1px;
`;

const InfoSection = styled(Flex)`
  gap: 5px;
`;

const ProdTitle = styled.div`
  color: #111;
  font-family: "Articulatcf";
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
`;

const ImageSection = styled.div`
  width: 100%;
  height: 413px;
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
  gap: 27.75px;
  max-width: 1420px;
  width: 90%;
  margin: 0 auto;
  padding-top: 87px;
`;
