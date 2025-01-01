import React from 'react';
import { Global } from '@emotion/react';
import globalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import Board from './components/board/Board';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Board />
      </Layout>
    </>
  );
}

export default App;
