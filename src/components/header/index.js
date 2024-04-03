import styled from "styled-components";


const HeaderCompoenet = styled.header`
  width: 100%;
  margin: 0%;
  background-color: red;
  color: ${(props) => props.theme.headerColor};
  padding: 10px;
  text-align: center;
  font-size: 24px;
`;
const Text = styled.h1`
  color: ${(props) => props.theme.headerColor};
  padding: 10px;
  text-align: center;
  font-size: 24px;
`;
export default function Header() {
  return (
    <HeaderCompoenet>
      <Text>Header</Text>
    </HeaderCompoenet>
  );
}
