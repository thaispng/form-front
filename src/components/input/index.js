import { icons } from "lucide-react";
import styled from "styled-components";

const InputField = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: ${({ height }) => height || "40px"};
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;

  gap: 5px;
  background-color: #f2f4f7;

  &:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 0 0.07rem rgba(0, 123, 255, 0.25);
    background-color: #fff;
    color: #000;
  }
`;

const IconLeft = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:focus {
    color: #007bff;
  }
`;
const IconRight = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:focus {
    color: #007bff;
  }
`;

const Input = ({ iconLeft, iconRight, placeholder, type, ...props }) => (
  <InputContainer>
    {iconLeft && <IconLeft>{iconLeft}</IconLeft>}
    <InputField placeholder={placeholder} type={type} {...props} />
    {iconRight && <IconRight>{iconRight}</IconRight>}
  </InputContainer>
);
export default Input;
