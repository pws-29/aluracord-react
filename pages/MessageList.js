import React from 'react';
import styled from 'styled-components';
import { COLORS } from './constants';

function MessageList({ listaMensagens }) {
  return (

    /*
// Usuário
- Usuário digita no campo textarea
- Aperta enter para enviar
- Tem que adicionar o texto na listagem
 
// Dev
- [X] Campo criado
- [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)
- [X] Lista de mensagens 
*/
    <Wrapper>
      {listaMensagens.map(objetoMensagemAtual => {
        return (
          <MessageWrapper key={objetoMensagemAtual.id}>
            <MessageFrom>
              <UserImage />
              <MessageUser>{objetoMensagemAtual.usuario}</MessageUser>
              <MessageDate>{new Date().toLocaleDateString()}</MessageDate>
            </MessageFrom>
            <MessageText>
              {objetoMensagemAtual.mensagem}
            </MessageText>
          </MessageWrapper>
        )
      })
      }

      {/* {
        listaMensagens.map(objetoMensagemAtual => {
          return (
            <li key={objetoMensagemAtual.id}>
              {objetoMensagemAtual.mensagem}
            </li>
          )
        })
      } */}
    </Wrapper>
  );
}

export default MessageList;

const Wrapper = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  color: black;
`

const MessageWrapper = styled.div`
  border-radius: 5px;
  padding: 6px;

    &hover {
      background-color: ${COLORS.gray[100]};
    }
`

const MessageFrom = styled.div`
  display: flex;
`

const UserImage = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`

const MessageUser = styled.div`

`

const MessageDate = styled.div`

`

const MessageText = styled.div`

`