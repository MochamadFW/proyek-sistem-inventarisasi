// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";

import Pendataan from './views/pendataan/pages/pendataan';
import Login from './views/login/pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
    </Routes>
  );
}

export default App;
