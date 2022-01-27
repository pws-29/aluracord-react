import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from './constants';

function Header() {
  return (
    <Wrapper>
      <Text>AluraCord</Text>
      <Button>SAIR</Button>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Text = styled.p`
  color: ${COLORS.secondary};
  font-weight: ${WEIGHTS.normal};
  font-size: 2rem;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: ${COLORS.gray[700]};
  cursor: pointer;
  padding: 10px;
  border-radius: 7px;
  transition: 0.4s;

  :hover {
     color: ${COLORS.white};
     background-color: ${COLORS.gray[500]};
   }
`