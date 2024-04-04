import styled from "styled-components"
import Input from "../input";
import Button from "../button";
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
    gap: 10px;
    padding: 10px;
`;
const Title = styled.h1`
    text-align: center;
    font-size: 2em;
    margin: 10px 0;
`;
export default function Form (){
    return(
        <FormContainer>
            <Title>Formulário de contato</Title>
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Telefone" />
            <Input type="text" placeholder="Assunto" />
            <Input type="textarea" placeholder="Mensagem" />
            <Button width="100px"  >Enviar</Button>
        </FormContainer>
    )
}