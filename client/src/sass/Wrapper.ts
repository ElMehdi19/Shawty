import { Link } from "react-router-dom";
import styled from "styled-components";

export const Graphics = styled.div`
  display: flex;
  padding: 15px;
  margin: 15px 0;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  flex: 1;
`;

export const Description = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  min-width: 200px;
  margin: 5px;
  box-sizing: border-box;
`;

export const StyledLink = styled(Link)`
  padding: 15px;
  border: 2px solid crimson;
  border-radius: 30px;
  background: transparent;
  color: crimson;
  text-transform: uppercase;
  display: inline-block;
  width: 100px;
  cursor: pointer;
  &:hover {
    background: crimson;
    color: #fff;
    border-color: #fff;
  }
`;

export default styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  margin: 50px auto;
`;
