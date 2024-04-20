import './output/index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './provider';

import Play from './paginas/play/index';
import Ligths from './paginas/ligths/index';

function App() {

  return (
    <Router>
      <LanguageProvider >
        <Routes>
          <Route exact path='*' element={<Play />} />
          <Route path="/play" element={<Ligths />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
