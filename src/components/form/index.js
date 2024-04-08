import styled from "styled-components"
import Input from '@/components/input/'
import ButtonWrapper from '@/components/button/'
import { ArrowRight } from 'lucide-react';
import { User } from 'lucide-react';
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
            <Input placeholder="Nome" type="text" iconLeft={<User size={20}/>}/>
            <ButtonWrapper  width="200px">Enviar</ButtonWrapper>
            <ButtonWrapper variant="primary"  width="200px">Criar um novo</ButtonWrapper>
            <ButtonWrapper variant="disabled"  width="200px">Enviar</ButtonWrapper>
            <ButtonWrapper variant="secondary"  width="200px">Enviar</ButtonWrapper>
            <ButtonWrapper variant="secondary"  width="100px" iconRight={<ArrowRight size={20} strokeWidth={2}  />}></ButtonWrapper>
        </FormContainer>
    )
}