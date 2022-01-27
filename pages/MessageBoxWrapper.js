import React from 'react';
import styled from 'styled-components';
import { COLORS } from './constants';

function MessageBoxWrapper() {
  return (
    <Wrapper>
      <div>

      </div>
      <form action="">
        <input type="text" />
      </form>
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
  background-color: ${COLORS.gray[500]};
  border-radius: 5px;
  padding: 16px;
`
