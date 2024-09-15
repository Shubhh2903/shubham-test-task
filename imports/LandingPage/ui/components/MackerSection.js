import React from "react";
import styled from "styled-components";
import Flex from "../../../../lib/atoms/flex";

const MackerSection = () => {
  return (
    <MainContainer $fullwidth>
      <InnerWrapper $fullwidth justifycontent="space-between">
        <TextWrapper direction="column">
          <Cta>BECOME A MAKER</Cta>
          <InnerTxtWrapper direction="column">
            <MainTitle>Lorem ipsum dolor sit amet consectetur</MainTitle>
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </SubTitle>
          </InnerTxtWrapper>
          <MainCta>Learn more</MainCta>
        </TextWrapper>
        <ImageWrapper />
      </InnerWrapper>
    </MainContainer>
  );
};

export default MackerSection;

const MainCta = styled.div`
  margin-top: 26px;
  padding: 14px 30px;
  border-radius: 90px;
  border: 1.5px solid #111;
  background: #111;
  color: #e9fe97;
  text-align: center;
  font-family: "Articulatcf";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  cursor: pointer;
`;

const SubTitle = styled.div`
  color: #111;
  font-family: "Articulatcf";
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.18px;
`;

const MainTitle = styled.div`
  color: #111;
  font-family: "Powergrotesk";
  font-size: 36px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.72px;
  text-transform: uppercase;
`;
const InnerTxtWrapper = styled(Flex)`
  gap: 14.5px;
  margin-top: auto;
`;

const Cta = styled(Flex)`
  padding: 4px 12px;
  border-radius: 100px;
  border: 1.5px solid #111;
  color: #111;
  font-family: "Powergrotesk";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.21px;
  text-transform: uppercase;
`;

const TextWrapper = styled(Flex)`
  max-width: 100%;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const InnerWrapper = styled(Flex)`
  max-width: 1420px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  gap: 100px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
  }
`;

const MainContainer = styled(Flex)`
  background: #e9fe97;
  padding: 75px 0;
  height: 100%;
`;

const ImageWrapper = styled.div`
  background-image: url("/static/img/FeatureImage.png");
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 811px;
  width: 100%;
  background-position: center;
  padding-top: 67.8571428571%;
`;
