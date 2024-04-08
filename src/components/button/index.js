import styled from "styled-components";
import PropTypes from "prop-types";
//instalar o prop-types com npm install prop-types <3 brilha thaispertacular <3
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: 500;
  font-size: 1.0rem;
  font-family: 'Roboto', sans-serif;
  line-height: normal;
  gap: 2px;

  ${({ variant }) => {
    switch (variant) {
      case "default":
        return `
          background-color: #dcdcdc;
          color: #333;
        `;
      case "primary":
        return `
          background-color: #007bff;
          color: #fff;
        `;
      case "secondary":
        return `
          background-color: #6c757d;
          color: #fff;
        `;
      case "disabled":
        return `
          background-color: #D0D5DD;
          color: #98A2B3;
          cursor: not-allowed;
        `;
      default:
        return "";
    }
  }}

  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  color: ${({ color }) => color};
  background-color: ${({ background }) => background};

  &:hover {
    background-color: ${({ variant }) => {
      switch (variant) {
        case "default":
          return "#c0c0c0";
        case "primary":
          return "#0056b3";
        case "secondary":
          return "#5a6268";
        default:
          return "";
      }
    }};
  }
`;

Button.defaultProps = {
  variant: "default",
  color: undefined,
  background: undefined,
  width: undefined,
  height: undefined,
  iconLeft: undefined,
  iconRight: undefined,
};



const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;


const ButtonWrapper = ({ children, iconLeft, iconRight,  ...props }) => (
  <Button {...props}>
    {iconLeft && <Icon style={{ marginRight: 8 }}>{iconLeft}</Icon>}
    {children}
    {iconRight && <Icon >{iconRight}</Icon>}
  </Button>
);

export default ButtonWrapper;
