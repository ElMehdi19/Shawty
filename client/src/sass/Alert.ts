import styled from "styled-components";

type AlertProps = {
  type: "success" | "error";
  show?: boolean;
};

const Alert = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  background: ${(props: AlertProps) =>
    props.type === "success" ? "#1bf0bb" : "#f01b3e"};
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  display: ${(props: AlertProps) => (props.show ? "block" : "none")};
`;

export const Title = styled.span`
  display: block;
  font-size: 0.7em;
  color: ${(props: { type: "success" | "error" }) =>
    props.type === "success" ? "crimson" : "darkblue"};
`;

export const Anchor = styled.a`
  font-size: 1.3em;
  color: darkblue;
`;

export const Message = styled.span`
  font-size: 1.3em;
  color: floralwhite;
  text-transform: uppercase;
`;

export default Alert;
