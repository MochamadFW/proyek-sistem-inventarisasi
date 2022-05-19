import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";

import Pendataan from './views/pendataan/pages/pendataan';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pendataan/>} />
    </Routes>
  );
}

export default App;
