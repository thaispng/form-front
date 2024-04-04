
import styled from 'styled-components';

const ButtonDefault = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '40px'};
  color: ${(props) => props.color || 'white'};
  background: ${(props) => props.background || '#007bff'};
  `;


export default function Button () {
    return (
        <ButtonDefault width={190}>
            Click me
        </ButtonDefault>
    );
}