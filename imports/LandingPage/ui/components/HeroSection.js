import React from "react";
import styled, { css } from "styled-components";
import Flex from "../../../../lib/atoms/flex";
import ToolTipSection from "../atoms/ToolTipSection";
import { NAVBAR_LEFT_SIDE, NAVBAR_RIGHT_SIDE } from "../../api/constant";
import NavbarCenterLogo from "../assets/NavbarCenterLogo";
import DownArrow from "../assets/DownArrow";

const HeroSection = () => {
  return (
    <Container direction="column" $fullwidth>
      <ToolTipSection />
      <BannerSection $fullwidth direction="column">
        <NavbarSection>
          <LeftSection>
            <LinkSection>
              {NAVBAR_LEFT_SIDE.map((data, index) => (
                <LinkTxt key={index}>{data.title}</LinkTxt>
              ))}
            </LinkSection>
            <NavbarCenterLogo />
            <LinkSection>
              {NAVBAR_RIGHT_SIDE.map((data, index) => (
                <LinkTxt key={index}>
                  {data.title}{" "}
                  {index === 3 && (
                    <SvgFlex>
                      <DownArrow />
                    </SvgFlex>
                  )}
                </LinkTxt>
              ))}
            </LinkSection>
          </LeftSection>
        </NavbarSection>
        <NavbarSection $fullwidth margintop>
          <InformationWrap direction="column">
            <TopSection direction="column">
              <MainTitle>One-of-a-Kind Creations Stories You’ll Love</MainTitle>
              <SubTitle>
                Designsnitch is an online marketplace that uncovers unique
                pieces, their makers and the stories behind them.
              </SubTitle>
            </TopSection>
            <CtaWrapper>
              <MainCta>Shop our latest arrivals</MainCta>
              <DarkCTA>Shop all </DarkCTA>
            </CtaWrapper>
          </InformationWrap>
        </NavbarSection>
      </BannerSection>
    </Container>
  );
};

export default HeroSection;

const SvgFlex = styled(Flex)`
  margin-left: 3px;
  svg > path {
    stroke: #fff;
  }
`;

const SubTitle = styled.div`
  color: #fff;
  font-family: "Articulatcf";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.3px;
`;

const MainTitle = styled.div`
  color: #fff;
  font-family: "Powergrotesk";
  font-size: 60px;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
`;

const TopSection = styled(Flex)`
  gap: 22px;
`;

const InformationWrap = styled(Flex)`
  gap: 37px;
  max-width: 865px;
  width: 100%;
`;

const CtaWrapper = styled(Flex)`
  gap: 17px;
`;

const DarkCTA = styled.div`
  padding: 14px 30px;
  border-radius: 90px;
  background: #111;
  color: #e9fe97;
  text-align: center;
  font-family: "Articulatcf";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  cursor: pointer;
`;

const MainCta = styled.div`
  padding: 14px 30px;
  border-radius: 90px;
  background: #e9fe97;
  color: #111;
  text-align: center;
  font-family: "Articulatcf";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  cursor: pointer;
`;

const LinkTxt = styled.div`
  color: #fff;
  font-family: "Powergrotesk";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.21px;
  display: flex;
  text-transform: uppercase;
`;

const LeftSection = styled(Flex)`
  gap: 123px;
`;

const LinkSection = styled(Flex)`
  gap: 30px;
`;

const NavbarSection = styled(Flex)`
  max-width: 1420px;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0 0 0;
  ${({ margintop }) =>
    margintop &&
    css`
      margin-top: auto;
      padding: 0;
    `}
`;

const BannerSection = styled(Flex)`
  /* padding-top: 49.3125%; */

  padding-bottom: 89px;
  align-items: end;
  height: 100%;
`;

const Container = styled(Flex)`
  background-image: url("/static/img/HeroImage.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 789px;
`;
