import styled from 'styled-components';
import React, { useState } from 'react';
import { COLORS } from './constants'

import Form from './Form';
import User from './User';

function Modal() {
  const [userName, setUsername] = useState('');

  const handleCallback = (userName) => {
    setUsername(userName);
  };

  return (
    <>
      <Wrapper>
        <Form parentCallback={handleCallback}></Form>
        <User userName={userName}></User>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;

  width: 800px;
  max-width: 750px;
  height: 300px;
  background-color: ${COLORS.gray[900]};

  border-radius: 5px;
  box-shadow: 7.0px 13.9px 13.9px hsl(0deg 0% 0% / 0.28);
`

export default Modal;
