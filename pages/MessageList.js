import React from 'react';
import styled from 'styled-components';

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
      {
        listaMensagens.map(objetoMensagemAtual => {
          return (
            <li key={objetoMensagemAtual.id}>
              {objetoMensagemAtual.mensagem}
            </li>
          )
        })
      }
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