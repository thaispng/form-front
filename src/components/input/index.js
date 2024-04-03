import styled from "styled-components";

const InputForm = styled.input`
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
`;



const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <InputForm
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    );
    };

export default Input;