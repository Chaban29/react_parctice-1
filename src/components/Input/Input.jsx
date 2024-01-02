import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  padding: 10px;
  background: #f3f5f9;
  border: none;
  border-radius: 12px;
  &:focus {
    outline: 2px solid orange;
  }
`;

const Input = () => {
  return <CustomInput type="text" />;
};

export default Input;
