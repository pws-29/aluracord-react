import styled from "styled-components";
import { COLORS } from "./constants.js";
import GlobalStyles from './GlobalStyles.js'
import Modal from './Modal'

function HomePage() {
  return (
    <App>
      <GlobalStyles />
      <Modal />
    </App>
  );
};

const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg);
  background-repeat: no-repeat; 
  background-size: cover; 
  background-blend-mode: multiply;
  background-color: ${COLORS.secondary};
`

export default HomePage