import React from 'react';
import styled from 'styled-components';
import { COLORS } from './constants';
import GlobalStyles from './GlobalStyles.js'
import Header from './Header';
import MessageBoxWrapper from './MessageBoxWrapper';
import Spacer from './Spacer';

function chat() {
  return (
    <>
      <GlobalStyles />
      <ChatWrapper>
        <BackgroundWrapper>
          <Header />
          <Spacer size={16} />
          <MessageBoxWrapper />
        </BackgroundWrapper>
      </ChatWrapper>
    </>

  );
}

export default chat;


const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  height: 100vh;
`

const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
  background-color: ${COLORS.gray[900]};
  height: 100%;
  max-width: 95%;
  max-height: 95vh;
  padding: 32px 50px;
`