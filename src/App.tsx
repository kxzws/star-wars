import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Character, MainList } from './features';

import './App.scss';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainList />} />

        <Route path="/characters/:id" element={<Character />} />
      </Routes>
    </>
  );
};

export default App;
