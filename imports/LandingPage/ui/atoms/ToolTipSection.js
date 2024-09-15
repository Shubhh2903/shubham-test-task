import React from "react";
import styled from "styled-components";
import Flex from "../../../../lib/atoms/flex";
import DownArrow from "../assets/DownArrow";

const ToolTipSection = () => {
  return (
    <Container $fullwidth>
      <Wrapper justifycontent="space-between" alignitems="center" $fullwidth>
        <LeftSide>Uncovers unique pieces</LeftSide>
        <RightSide alignitems="center">
          <Title>Blog</Title>
          <Title>For makers </Title>
          <InnterWrap alignitems="center">
            <Title>£ GBP</Title>
            <Flex>
              <DownArrow />
            </Flex>
          </InnterWrap>
        </RightSide>
      </Wrapper>
    </Container>
  );
};

export default ToolTipSection;

const Title = styled.div`
  color: #111;
  font-family: "Articulatcf";
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
`;

const InnterWrap = styled(Flex)`
  gap: 9px;
`;

const RightSide = styled(Flex)`
  gap: 20px;
`;

const LeftSide = styled.div`
  color: #111;
  font-family: "Articulatcf";
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`;

const Container = styled(Flex)`
  padding: 5px;
  background: #e9fe97;
`;
const Wrapper = styled(Flex)`
  max-width: 1420px;
  width: 90%;
  margin: 0 auto;
`;
