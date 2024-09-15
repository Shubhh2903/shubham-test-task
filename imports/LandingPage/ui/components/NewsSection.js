import React from "react";
import styled, { css } from "styled-components";
import Flex from "../../../../lib/atoms/flex";

const NewsSection = () => {
  return (
    <MainContainer direction="column">
      <Flex justifycontent="space-between" $fullwidth>
        <Heading>Latest news and insights</Heading>
        <OtherTxt>Browse all </OtherTxt>
      </Flex>
      <ImageWrapper $fullwidth>
        <LeftImage $fullwidth>
          <InnerWrapper direction="column" justifycontent="end">
            <Cta>CATEGORY</Cta>
            <Title>Lorem ipsum dolor sit amet, constur adipiscing elit.</Title>
            <Datesection>
              <InnerTxt>7 Nov, 2023</InnerTxt>
              <InnerTxt>-</InnerTxt>
              <InnerTxt>John Smith</InnerTxt>
              <InnerTxt>-</InnerTxt>
              <InnerTxt>3 mins</InnerTxt>
            </Datesection>
          </InnerWrapper>
        </LeftImage>
        <RightSection $fullwidth>
          <BoxWrap $fullwidth direction="column">
            <ImageWrapp src="/static/img/News2.png" />
            <InnerWrapper direction="column" nopadding>
              <InnerCta>CATEGORY</InnerCta>
              <Title color>
                Lorem ipsum dolor sit amet, constur adipiscing elit.
              </Title>
              <Datesection last>
                <InnerTxt color>7 Nov, 2023</InnerTxt>
                <InnerTxt color>-</InnerTxt>
                <InnerTxt color>John Smith</InnerTxt>
                <InnerTxt color>-</InnerTxt>
                <InnerTxt color>3 mins</InnerTxt>
              </Datesection>
            </InnerWrapper>
          </BoxWrap>
          <BoxWrap $fullwidth direction="column">
            <ImageWrapp src="/static/img/News3.png" />
            <InnerWrapper direction="column" nopadding>
              <InnerCta>CATEGORY</InnerCta>
              <Title color>
                Lorem ipsum dolor sit amet, constur adipiscing elit.
              </Title>
              <Datesection last>
                <InnerTxt color>7 Nov, 2023</InnerTxt>
                <InnerTxt color>-</InnerTxt>
                <InnerTxt color>John Smith</InnerTxt>
                <InnerTxt color>-</InnerTxt>
                <InnerTxt color>3 mins</InnerTxt>
              </Datesection>
            </InnerWrapper>
          </BoxWrap>
        </RightSection>
      </ImageWrapper>
    </MainContainer>
  );
};

export default NewsSection;

const InnerCta = styled(Flex)`
  background: #111;
  border-radius: 50px;
  color: #fff;
  font-family: "Powergrotesk";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  padding: 4.5px 9px;
  letter-spacing: 0.21px;
  text-transform: uppercase;
`;

const ImageWrapp = styled.div`
  ${({ src }) =>
    src &&
    css`
      background-image: url(${src});
    `}
  width:100%;
  background-size: cover;
  background-position: center;
  height: 70%;
  background-repeat: no-repeat;
`;

const BoxWrap = styled(Flex)`
  height: 100%;
`;

const RightSection = styled(Flex)`
  height: 100%;
  gap: 2px;
`;

const Title = styled.div`
  color: #fff;
  font-family: "Powergrotesk";
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.48px;
  text-transform: uppercase;

  ${({ color }) =>
    color &&
    css`
      color: #111;
    `}
`;

const LeftImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  background-image: url("/static/img/News1.png");
  background-size: cover;
  width: 100%;
`;

const ImageWrapper = styled(Flex)`
  height: 453px;
  gap: 2px;
`;

const InnerWrapper = styled(Flex)`
  gap: 25px;
  padding: 40px 60px;
  height: 100%;

  ${({ nopadding }) =>
    nopadding &&
    css`
      padding: 28px 30px;
      padding-bottom: 0;
    `}
`;
const InnerTxt = styled.div`
  color: #fff;
  font-family: "Articulatcf";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;

  ${({ color }) =>
    color &&
    css`
      color: #111;
    `}
`;

const Datesection = styled(Flex)`
  gap: 5px;

  ${({ last }) =>
    last &&
    css`
      margin-top: auto;
    `}
`;

const Cta = styled(Flex)`
  padding: 4.5px 10px;
  background: rgba(255, 255, 255, 1);
  border-radius: 50px;

  color: #111;
  font-family: "Powergrotesk";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.21px;
  text-transform: uppercase;
`;
const BoxFlex = styled(Flex)`
  gap: 32px;
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
  max-width: 1420px;
  width: 90%;
  padding: 110px 0;
  gap: 27.75px;
  margin: 0 auto;
`;
