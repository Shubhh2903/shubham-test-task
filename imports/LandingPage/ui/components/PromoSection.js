import React from "react";
import styled, { css } from "styled-components";
import Flex from "../../../../lib/atoms/flex";

const PromoSection = () => {
  return (
    <Container $fullwidth>
      <LeftSide src="/static/img/PromoSection1.png">
        <InfoWrapper direction="column" paddingleft={97.16}>
          <Title>PROMO SECTION</Title>
          <CTA>Browse all</CTA>
        </InfoWrapper>
      </LeftSide>
      <StyledFlex direction="column" $fullwidth>
        <LeftSide src="/static/img/PromoSection2.png">
          <InfoWrapper direction="column" paddingleft={57.63}>
            <Title>PROMO SECTION 2</Title>
            <CTA>Browse all</CTA>
          </InfoWrapper>
        </LeftSide>
        <LeftSide src="/static/img/PromoSection3.png">
          <InfoWrapper direction="column" paddingleft={64.27}>
            <Title>PROMO SECTION 3</Title>
            <CTA>Browse all</CTA>
          </InfoWrapper>
        </LeftSide>
      </StyledFlex>
    </Container>
  );
};

export default PromoSection;

const Title = styled.div`
  color: #fff;
  font-family: "Powergrotesk";
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.36px;
  text-transform: uppercase;
`;

const CTA = styled.div`
  padding: 14px 30px;
  background: #e9fe97;
  border-radius: 90px;
  margin-top: auto;
  cursor: pointer;
`;

const InfoWrapper = styled(Flex)`
  height: 100%;
  padding: 50px 0;

  ${({ paddingleft }) =>
    paddingleft &&
    css`
      padding-left: ${paddingleft}px;
    `}
`;

const StyledFlex = styled(Flex)`
  height: 100%;
`;

const LeftSide = styled(Flex)`
  width: 100%;
  height: 100%;
  /* border: 1.5px solid #fff; */

  ${({ src }) =>
    src &&
    css`
      background-image: url(${src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    `}
`;

const Container = styled(Flex)`
  height: 660px;
  padding-top: 63px;
  max-width: 1420px;
  margin: 0 auto;
  width: 90%;
`;
