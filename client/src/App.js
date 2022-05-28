import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { DateProvider } from "./hooks/useDateContext";

import Dashboard from './views/dashboard/pages/dashboard';
import Pendataan from './views/pendataan/pages/pendataan';
import Login from './views/login/pages/login';
import PenggunaKib from './views/pengguna/pages/KIB'
import PenggunaKir from './views/pengguna/pages/KIR'
import PencatatanKib from './views/pencatatan/pages/KIB'


const theme = createTheme({
  palette: {
    primary: {
      main: '#F2F2F2',
    },
    secondary: {
      main: "#3084F2",
      darker: "#2669BF"
    },
    font: {
      main: "#263238",
      white: "#FFFFFF"
    },
    button:{
      main:'#F2D424'
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DateProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pendataan" element={<Pendataan />} />
          <Route path="/pengguna/kib" element={<PenggunaKib />} />
          <Route path="/pengguna/kir" element={<PenggunaKir />} />
          <Route path="/pengurus/kib" element={<PencatatanKib />} />
        </Routes>
      </DateProvider>
    </ThemeProvider>
  );
}

export default App;
