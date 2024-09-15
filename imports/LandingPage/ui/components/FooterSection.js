import React from "react";
import styled, { css } from "styled-components";
import Flex from "../../../../lib/atoms/flex";
import {
  FOOTER_ABOUT_NAME,
  FOOTER_ACCOUNT_NAME,
  FOOTER_COMPANY_NAME,
} from "../../api/constant";
import FooterLogo from "../assets/FooterLogo";
import {
  Amex,
  Applepay,
  Gpay,
  Klarna,
  MasterCard,
  Paypal,
  Visa,
} from "../assets/PaymentCardIcons";

const FooterSection = () => {
  return (
    <MainContainer $fullwidth>
      <Wrapper $fullwidth direction="column">
        <TopSection>
          <StyledFlex direction="column">
            <TitleWrap direction="column">
              <MainTitle>Sign up now</MainTitle>
              <MainTitle subtitle>
                Stay in the loop, with exclusive offers and product previews.
              </MainTitle>
            </TitleWrap>
            <InputField alignitems="end" $fullwidth>
              <InputWrap placeholder="Email" />
              <ButtonInput>Sign up</ButtonInput>
            </InputField>
          </StyledFlex>
          <Wrapperlink direction="column">
            <Heading>Shop</Heading>
            <Flex direction="column">
              {FOOTER_COMPANY_NAME.map((i, j) => (
                <Heading subheading key={j}>
                  {i.title}
                </Heading>
              ))}
            </Flex>
          </Wrapperlink>
          <Wrapperlink direction="column">
            <Heading>Account</Heading>
            <Flex direction="column">
              {FOOTER_ACCOUNT_NAME.map((a, b) => (
                <Heading subheading key={b}>
                  {a.title}
                </Heading>
              ))}
            </Flex>
          </Wrapperlink>
          <Wrapperlink direction="column">
            <Heading>Shop</Heading>
            <Flex direction="column">
              {FOOTER_ABOUT_NAME.map((data, index) => (
                <Heading subheading key={index}>
                  {data.title}
                </Heading>
              ))}
            </Flex>
          </Wrapperlink>
        </TopSection>
        <BottomSection $fullwidth direction="column">
          <FooterLogo />
          <FinalFlex $fullwidth justifycontent="space-between">
            <LinkWrap>
              <WrapLink>© 2024 Designsnitch. Powered by Markko</WrapLink>
              <WrapLink>Terms & Conditions</WrapLink>
              <WrapLink>Privacy Policy</WrapLink>
            </LinkWrap>
            <CardSection alignitems="center">
              <Visa />
              <Amex />
              <img src="/static/img/Mastercard.png" />
              <img src="/static/img/PayPal.png" />
              <img src="/static/img/GooglePay.png" />
              <Applepay />
              <Klarna />
            </CardSection>
          </FinalFlex>
        </BottomSection>
      </Wrapper>
    </MainContainer>
  );
};

export default FooterSection;

const WrapLink = styled.div`
  color: #fff;
  text-align: right;
  font-family: "Articulatcf";
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.12px;

  @media (max-width: 890px) {
    text-align: center;
  }
`;

const CardSection = styled(Flex)`
  gap: 5px;

  @media (max-width: 890px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  svg {
    width: fit-content !important;
  }
`;

const FinalFlex = styled(Flex)`
  @media (max-width: 890px) {
    flex-wrap: wrap;
    row-gap: 30px;
    align-items: center;
    justify-content: center;
  }
`;

const LinkWrap = styled(Flex)`
  gap: 25px;
  @media (max-width: 890px) {
    flex-wrap: wrap;
    row-gap: 25px;
    justify-content: center;
    text-align: center;
  }
`;

const Heading = styled.div`
  color: #fff;
  font-family: "Powergrotesk";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px; /* 150% */
  letter-spacing: 0.21px;
  text-transform: uppercase;

  ${({ subheading }) =>
    subheading &&
    css`
      text-transform: unset;
    `}
`;

const Wrapperlink = styled(Flex)`
  gap: 18px;
`;

const StyledFlex = styled(Flex)`
  gap: 21px;

  ::placeholder {
    color: #fff;
    font-family: "Articulatcf";
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.21px;
    opacity: 0.5;
  }
`;

const InputWrap = styled.input`
  border: none;
  max-width: 392px;
  width: 100%;
  outline: none;
  border-bottom: 1px solid #fff;
`;

const InputField = styled(Flex)`
  gap: 19px;

  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: unset;
  }
`;

const ButtonInput = styled(Flex)`
  padding: 14px 30px;
  border-radius: 90px;
  background: #e9fe97;
  cursor: pointer;

  color: #111;
  text-align: center;
  font-family: "Articulatcf";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px; /* 157.143% */

  @media (max-width: 1250px) {
    width: fit-content;
  }
`;

const MainTitle = styled.div`
  color: #fff;
  font-family: "Powergrotesk";
  font-size: 30px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0.45px;
  text-transform: uppercase;

  ${({ subtitle }) =>
    subtitle &&
    css`
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.21px;
    `}
`;

const TitleWrap = styled(Flex)`
  gap: 15px;
`;

const RightWrap = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;

const BottomSection = styled(Flex)`
  margin-top: 204px;
  gap: 49px;
  svg {
    width: 95%;
  }

  @media (max-width: 890px) {
    margin-top: 50px;
  }
`;

const TopSection = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 1fr 1fr 1fr;

  @media (max-width: 1130px) {
    grid-template-columns: 3fr 1fr 1fr;
    gap: 30px;
    row-gap: 40px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 3fr 1fr;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled(Flex)`
  max-width: 1420px;
  width: 90%;
  margin: 0 auto;
  padding: 79px 0 52px 0;
`;

const MainContainer = styled(Flex)`
  background: #111;
`;
