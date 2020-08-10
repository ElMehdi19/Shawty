import styled from "styled-components";

export const Input = styled.input`
  width: 80%;
  max-width: 500px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid grey;
  font-size: 1.1em;
  margin: 10px 0;
  @media (min-width: 800px) {
    margin: 5px 5px;
  }
`;

export const TextArea = styled.textarea`
  width: 80%;
  max-width: 500px;
  padding: 10px;
  height: 150px;
  box-sizing: border-box;
  border: 1px solid grey;
  font-size: 1.1em;
  margin: 10px 0;
  @media (min-width: 800px) {
    margin: 5px 5px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  width: 80%;
  max-width: 500px;
  box-sizing: border-box;
  text-transform: uppercase;
  background: crimson;
  color: #fff;
  font-size: 1.1em;
  border: 2px solid #000;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: crimson;
    border: 2px solid crimson;
  }
  @media (min-width: 800px) {
    width: ${(props: { forTextArea?: boolean }) =>
      props.forTextArea ? "100%" : "20%"};
  }
`;

export default styled.form`
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  text-align: center;
`;
