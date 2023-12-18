import './output/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './paginas/helloWord/index';
import Menu from './paginas/menu/index';
import MySkills from './paginas/mySkills';
import Projects from './paginas/projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='*' element={<Home/>} />
        <Route path="/Menu/" element={<Menu/>} />
        <Route path="/Menu/mySkills" element={<MySkills/>} />
        <Route path="/Menu/projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
