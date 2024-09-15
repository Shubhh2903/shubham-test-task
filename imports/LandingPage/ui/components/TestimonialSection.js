import React from "react";
import StartsIcon from "../assets/StartsIcon";
import Flex from "../../../../lib/atoms/flex";
import styled from "styled-components";

const TestimonialSection = () => {
  return (
    <Container direction="column" justifycontent="center" alignitems="center">
      <Flex>
        <StartsIcon />
      </Flex>
      <TxtWrapper direction="column" $fullwidth alignitems="center">
        <ReviewTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue.{" "}
        </ReviewTitle>
        <Name>Ronald Richards, Atieler</Name>
      </TxtWrapper>
    </Container>
  );
};

export default TestimonialSection;

const Name = styled.div`
  color: #111;
  text-align: center;
  font-family: "Articulatcf";
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.24px;
`;

const ReviewTitle = styled.div`
  color: #111;
  text-align: center;
  font-family: "Powergrotesk";
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.36px;
  text-transform: uppercase;
`;

const TxtWrapper = styled(Flex)`
  gap: 22.56px;
`;

const Container = styled(Flex)`
  gap: 33px;
  max-width: 1138px;
  width: 90%;
  margin: 0 auto;
  padding: 107px 0 122px 0;
`;
