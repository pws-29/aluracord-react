import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from './constants';

function User({ userName }) {
  return (
    <Wrapper>
      <Card>
        <img src={`https://github.com/${userName}.png`} alt="imagem" />
        <p>{userName}</p>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #181F25;
  min-height: 240px;
  max-width: 220px;
  flex-grow: 1;
  padding: 16px;
  gap: 12px;

    img {
      border-radius: 50%;
      width: 100%;
    };

    p {
      color: ${COLORS.gray[500]};
      font-weight: ${WEIGHTS.thin};
      font-size: 1rem;
    }
`

export default User;
