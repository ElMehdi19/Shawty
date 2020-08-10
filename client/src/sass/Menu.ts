import styled from "styled-components";

export const MenuButton = styled.div<{ toggle: boolean }>`
  margin-left: auto;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.toggle ? "#fff" : "#f1f1f1")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const Icon = styled.div<{ toggle: boolean }>`
  z-index: 1;
  width: 30px;
  height: 3px;
  background-color: ${(props) => (props.toggle ? "transparent" : "#000")};
  border-radius: 4px;
  transform: translateX(${(props) => (props.toggle ? "-20px" : 0)});
  transition: all 0.5s ease-in-out;
  &:before {
    content: "";
    position: absolute;
    border-radius: 4px;
    background-color: #000;
    width: 30px;
    height: 3px;
    transform: translateY(-7px)
      translate(${(props) => (props.toggle ? "20px, 5px" : 0)})
      rotate(${(props) => (props.toggle ? "45deg" : 0)});
    transition: all 0.5s ease-in-out;
  }
  &:after {
    content: "";
    position: absolute;
    border-radius: 4px;
    background-color: #000;
    width: 30px;
    height: 3px;
    transform: translateY(7px)
      translate(${(props) => (props.toggle ? "20px, -8px" : 0)})
      rotate(${(props) => (props.toggle ? "-45deg" : 0)});
    transition: all 0.5s ease-in-out;
  }
`;

export const DropDown = styled.div`
  background-color: rgb(240, 234, 234);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  line-height: 80px;
`;

export const MenuList = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }
`;

export const MenuItem = styled.div`
  @media (min-width: 800px) {
    margin: 0 10px;
  }
  &:hover {
    color: #fff;
  }
`;

export default styled.div`
  margin-left: auto;
`;
