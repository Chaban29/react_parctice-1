import styled from "styled-components";
import React from "react";

const CounterButton = styled.button`
  padding: 10px 12px;
  background: skyblue;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: ${(props) => props.weight || "400"};
  margin-left: 20px;
  cursor: pointer;
`;

const Button = ({ children, ...props }) => {
  return <CounterButton {...props}>{children}</CounterButton>;
};

export default Button;
