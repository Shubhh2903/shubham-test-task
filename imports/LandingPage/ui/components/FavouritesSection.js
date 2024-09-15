import React from "react";
import styled, { css } from "styled-components";
import Flex from "../../../../lib/atoms/flex";
import { FAVOURITES_SECTION } from "../../api/constant";

const FavouritesSection = () => {
  return (
    <MainContainer $fullwidth direction="column">
      <MainFlex justifycontent="space-between" $fullwidth>
        <Heading>OUR FAVOURITES</Heading>
        <OtherTxt>Browse all </OtherTxt>
      </MainFlex>
      <ProductSection>
        {FAVOURITES_SECTION.map((data, index) => (
          <BoxSection $fullwidth direction="column" key={index}>
            <ImageSection src={data.img}>
              {index == 3 && (
                <Flex>
                  <GrabSection />
                </Flex>
              )}
            </ImageSection>
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

export default FavouritesSection;

const MainFlex = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GrabSection = styled(Flex)`
  position: absolute;
  bottom: 80px;
  width: 125px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/static/img/Drag.png");
  height: 124px;
  left: 30px;
`;

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
  text-decoration-line: line-through;
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
  position: relative;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 413px;
  ${({ src }) =>
    src &&
    css`
      background-image: url(${src});
    `}

  @media (max-width: 525px) {
    background-size: cover;
  }
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

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 525px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
