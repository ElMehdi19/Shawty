import styled from "styled-components";

const ChartWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  @media (min-width: 800px) {
    justify-content: center;
    align-items: center;
  }
  & > div {
    flex: 1;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 30px 0;
`;

export const Label = styled.span`
  color: crimson;
`;

export default ChartWrapper;
