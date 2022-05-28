import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import DashboardAdmin from './views/dashboard/pages/dashboard';
import Pendataan from './views/pendataan/pages/pendataan';
import DashboardPenggunaBarang from './views/dashboard/pages/dashboardpenggunabarang';



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
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/pendataan" element={<Pendataan />} />
        <Route path="/dashboard-pengguna-barang" element={<DashboardPenggunaBarang />} />
        <Route path="/" element={<DashboardAdmin />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
