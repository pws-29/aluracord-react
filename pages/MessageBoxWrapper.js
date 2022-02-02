import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import { COLORS } from './constants';
import MessageList from './MessageList';

import { v4 as uuidv4 } from 'uuid'


import { createClient } from '@supabase/supabase-js'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzcyMDgwMSwiZXhwIjoxOTU5Mjk2ODAxfQ.YS8qUYJ_RmQ5NT3Z-RzuXTlEKgeIBI4gqTRh5hbdTCo'
const SUPABASE_URL = 'https://xxkzzdvxgsaznvlwicmx.supabase.co'

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function MessageBoxWrapper() {
  const [mensagem, setMensagem] = useState('');
  const [listaMensagens, setListaMensagens] = useState([]);

  useEffect(() => {
    // Fetch feito pelo supabase
    supabaseClient
      .from('mensagens')
      .select('*')
      .order('created_at', { ascending: false }) // organizar mensagens em ordem de envio
      .then(({ data }) => {
        // Retorna body, count, dados cadastrados e status
        setListaMensagens(data)
      });
  }, []);

  const handleChangeMessage = (event) => {
    const targetValue = event.target.value
    setMensagem(targetValue);
  }

  const handleKeyDown = (event) => {
    // Criando objeto da mensagem;
    let objetoMensagem = {};
    objetoMensagem = {
      usuario: 'usuário', // todo
      mensagem,
      id: uuidv4()
    };

    if (event.key === 'Enter') {
      event.preventDefault(); // evitar qubra de linha;
      supabaseClient
        .from('mensagens')
        .insert([
          objetoMensagem
        ])
        .then(({ data }) => {
          setListaMensagens(prevState => [data[0], ...prevState]);
        });
      setMensagem(''); // limpar textfield
    };
  };

  return (
    <Wrapper>
      <MessageList listaMensagens={listaMensagens} />
      <Form action="">
        <TextField
          type="text"
          placeholder='Insira sua mensagem aqui...'
          type="textarea"
          value={mensagem}
          onChange={handleChangeMessage}
          onKeyDown={handleKeyDown}
        />
      </Form>
    </Wrapper>
  );
}

export default MessageBoxWrapper;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 80%;
  background-color: ${COLORS.gray[700]};
  border-radius: 5px;
  padding: 16px;
`

const Form = styled.form`
  display: flex;
  align-items: center;
`

const TextField = styled.textarea`
  width: 100%;
  height: 80px;
  border: 0;
  resize: none;
  border-radius: 5px;
  padding: 6px 8px;
  background-color: ${COLORS.gray[900]};
  margin-right: 16px;
  color: ${COLORS.gray[100]};
`
