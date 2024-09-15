import React from "react";
import styled from "styled-components";
import Flex from "../../../../lib/atoms/flex";

const AboutSection = () => {
  return (
    <MainContainer $fullwidth>
      <InnerWrapper $fullwidth justifycontent="space-between">
        <ImageWrapper />
        <TextWrapper direction="column" $fullwidth>
          <Cta>ABOUT Designsnitch</Cta>
          <StyledTextSection direction="column">
            <MainTitle>Lorem ipsum dolor sit amet, consectetur</MainTitle>
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue.{" "}
            </SubTitle>
            <MainCta>Learn more</MainCta>
          </StyledTextSection>
        </TextWrapper>
      </InnerWrapper>
    </MainContainer>
  );
};

export default AboutSection;

const MainCta = styled.div`
  margin-top: 40px;
  padding: 14px 30px;
  border-radius: 90px;
  background: #111;
  color: #fff;
  text-align: center;
  font-family: "Articulatcf";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
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

const StyledTextSection = styled(Flex)`
  height: 100%;
  gap: 10px;
  justify-content: end;
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
  margin-top: auto;
`;

const InnerWrapper = styled(Flex)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1420px;
  width: 90%;
  margin: 0 auto;
  gap: 100px;
`;

const MainContainer = styled(Flex)`
  background: #f6f6f6;
  padding: 75px 0;
  height: 100%;
`;

const ImageWrapper = styled.div`
  background-image: url("/static/img/AboutSection.png");
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 695px;
  width: 100%;
  background-position: center;
  padding-top: 73.5294117647%;
`;
