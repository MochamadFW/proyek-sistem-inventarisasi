import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DateProvider } from "./hooks/useDateContext";
import { KegiatanProvider } from "./hooks/useKegiatanContext";

import DashboardAdmin from './views/dashboard/pages/dashboard';
import Pendataan from './views/pendataan/pages/pendataan';
// import DashboardPenggunaBarang from './views/dashboard/pages/dashboardpenggunabarang';
import Login from './views/login/pages/login';
import PenggunaKib from './views/pengguna/pages/KIB'


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
    button: {
      main: '#F2D424'
    },
    info: {
      main: '#29B6F6'
    }
  },
  components: {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          width: '768px',
        }
      }
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DateProvider>
        <KegiatanProvider>
          <Routes>
            <Route path="/" element={<DashboardAdmin />} />
            {/* <Route path="/dashboard-pengguna-barang" element={<DashboardPenggunaBarang />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/pendataan" element={<Pendataan />} />
            <Route path="/pengguna/kib" element={<PenggunaKib />} />
          </Routes>
        </KegiatanProvider>
      </DateProvider>
    </ThemeProvider>
  );
}

export default App;
