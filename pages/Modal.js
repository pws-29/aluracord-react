import styled from 'styled-components';
import React from 'react';
import { COLORS } from './constants'

import Form from './Form';
import User from './User';

function Modal() {
  return (
    <>
      <Wrapper>
        <Form></Form>
        <User></User>
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
