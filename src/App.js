import './output/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './paginas/helloWord/index';
import Menu from './paginas/menu/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='*' element={<Home/>} />
        <Route path="/Menu" element={<Menu/>} />
      </Routes>
    </Router>
  );
}

export default App;
