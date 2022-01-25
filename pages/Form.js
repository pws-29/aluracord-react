import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from './constants'
import Spacer from './Spacer'
import GlobalStyles from './GlobalStyles.js'

function Form({ parentCallback }) {
  const [userName, setUserName] = useState('');

  const onChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  // Enviando dados ao parent
  useEffect(() => {
    const timer = setTimeout(() => {
      parentCallback(userName);
    }, 1000);
    return () => clearTimeout(timer);
  }, [userName]);

  return (
    <Wrapper>
      <TextWrapper>
        <Title>Boas-vindas de volta!</Title>
        <SubTitle>Estamos muito animados em te ver novamente!</SubTitle>
      </TextWrapper>
      <Spacer size={34} />
      <FormWrapper action="">
        <label htmlFor="usuario">Usuário do Github</label>
        <input type="text" id='usuario' value={userName} onChange={onChangeHandler} />
      </FormWrapper>
      <Spacer size={12} />
      <Button>Entrar</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  flex: 1;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  gap: 2px;
`

const Title = styled.p`
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.medium};
  font-size: 1.5rem;
`

const SubTitle = styled.p`
  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.thin};
  font-size: 1rem;
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

    label {
      color: ${COLORS.gray[300]};
      font-weight: ${WEIGHTS.normal};
      font-size: 0.85rem;
      text-transform: uppercase;
    };

    input {
      background-color: #181F25;
      border: 1px solid black;
      border-radius: 2px;
      height: 32px;
      padding: 10px;
      color: ${COLORS.gray[300]};
      font-size: 1rem;
    }
`

const Button = styled.button`
  width: 100%;
  background-color: hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%);;
  border: none;
  border-radius: 4px;
  height: 32px;
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.normal};
  font-size: 1rem;
  cursor: pointer;

  :hover {
    background-color: hsl(235,calc(var(--saturation-factor, 1)*51.4%),52.4%);;
  }

`

export default Form;
