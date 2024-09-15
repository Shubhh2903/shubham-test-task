import React from "react";
import styled from "styled-components";
import Flex from "../../../../lib/atoms/flex";

const FeatureSection = () => {
  return (
    <MainContainer $fullwidth>
      <InnerWrapper $fullwidth justifycontent="space-between">
        <TextWrapper direction="column">
          <Cta>FEATURED MAKER</Cta>
          <InnerTxtWrapper direction="column">
            <MainTitle>Lorem ipsum dolor sit amet consectetur</MainTitle>
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </SubTitle>
          </InnerTxtWrapper>
          <LineWrapper alignitems="end">
            <Line1 />
            <Line2 />
            <Line2 />
          </LineWrapper>
        </TextWrapper>
        <ImageWrapper />
      </InnerWrapper>
    </MainContainer>
  );
};

export default FeatureSection;

const LineWrapper = styled(Flex)`
  gap: 6px;
  margin-top: 134px;
`;
const Line1 = styled.div`
  width: 30px;
  height: 3px;
  background: #111;
`;

const Line2 = styled.div`
  width: 30px;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
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
  margin-top: 106px;
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
  max-width: 35%;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const InnerWrapper = styled(Flex)`
  max-width: 1420px;
  width: 90%;
  margin: 0 auto;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const MainContainer = styled(Flex)`
  background: #c7d0ff;
  padding: 75px 0;
`;

const ImageWrapper = styled.div`
  background-image: url("/static/img/FeatureImage.png");
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 811px;
  width: 100%;
  background-position: center;
  height: 550px;
`;
