import React from 'react';
import { Global } from '@emotion/react';
import globalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Board from './components/board/Board';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Header>
        <Board />
      </Header>
    </>
  );
}

export default App;
