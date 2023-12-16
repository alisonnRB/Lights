import './output/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './paginas/helloWord/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='*' element={<Home/>} />
        <Route path="/hello" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
