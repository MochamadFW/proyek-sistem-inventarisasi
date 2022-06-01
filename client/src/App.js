import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DateProvider } from "./hooks/useDateContext";
import { KegiatanProvider } from "./hooks/useKegiatanContext";

import DashboardAdmin from './views/dashboard/pages/dashboard';
import Pendataan from './views/pendataan/pages/pendataan';
import Login from './views/login/pages/login';
import PenggunaKib from './views/pengguna/pages/KIB'
import PenggunaKir from './views/pengguna/pages/KIR'
import PencatatanKib from './views/pencatatan/pages/KIB'
import PencatatanKir from './views/pencatatan/pages/KIR'
import PelaporanMutasiAset from "./views/pelaporan/pages/mutasiAset";
import BukuInventarisBarang from "./views/pelaporan/pages/bukuinventarisbarang";
import PencatatanRKB from "./views/pencatatan/KIR/pages/ruangKepalaDinas";

import Layout from "./views/shared/components/layout";


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
      main: '#F2D424',
      submit: '#66BB6A',
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
      {/* <Routes>
        <Route path="/pendataan" element={<Pendataan />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/" element={<DashboardPenggunaBarang />} />
      </Routes> */}
      <DateProvider>
        <KegiatanProvider>
          <Routes>
            <Route path="/" element={<DashboardAdmin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pendataan" element={<Pendataan />} />
            <Route path="/pengguna/kib" element={<PenggunaKib />} />
            <Route path="/pengguna/kir" element={<PenggunaKir />} />
            <Route path="/pencatatan">
              <Route path="kib">
                <Route path="b" element={<PencatatanKib/>} />
              </Route>
              <Route path="kir">
                <Route path="staff-umum" element={<PencatatanKir/>} />
                <Route path="ruang-kepala-dinas" element={<PencatatanRKB/>} />
              </Route>
            </Route>
            <Route path="/pelaporan">
              <Route path="mutasi-aset" element={<PelaporanMutasiAset/>} />
              <Route path="buku-inventaris-barang" element={<BukuInventarisBarang/>} />
            </Route>
          </Routes>
        </KegiatanProvider>
      </DateProvider>
    </ThemeProvider>
  );
}

export default App;
