import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Character, Main } from './features';

const App = (): ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/characters/:id" element={<Character />} />
      </Routes>
    </>
  );
};

export default App;
