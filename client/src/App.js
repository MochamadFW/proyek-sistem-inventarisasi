// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";

import Pendataan from './views/pendataan/pages/pendataan';
import Login from './views/login/pages/login';
import PenggunaKib from './views/pengguna/kib/pages/penggunaKib'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/pengguna/kib" element={<PenggunaKib/>} />
    </Routes>
  );
}

export default App;
