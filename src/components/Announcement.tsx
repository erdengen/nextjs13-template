import styled from "styled-components";
import { GradientBackgroundCon } from "./QuoteGenerator/QuoteGeneratorElements";

const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  padding: 5px 0;
`;

const Announcement = () => {
  return (
    <GradientBackgroundCon>
      <Container>Super Deal! Free Shipping on Orders Over $50</Container>
    </GradientBackgroundCon>
  );
};

export default Announcement;
