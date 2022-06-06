import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DateProvider } from "./hooks/useDateContext";
import { KegiatanProvider } from "./hooks/useKegiatanContext";
import React from "react";

import { AuthProvider } from "./context/AuthProvider";
import Layout from "./views/shared/components/layout";
import DashboardAdmin from './views/dashboard/pages/dashboard';
import Pendataan from './views/pendataan/pages/pendataan';
import Login from './views/login/pages/login';
import PenggunaKib from './views/pengguna/pages/KIB'
import PenggunaKir from './views/pengguna/pages/KIR'
import PencatatanKib from './views/pencatatan/KIB/pages/KIB'
import PencatatanKir from './views/pencatatan/pages/KIR'
import PelaporanMutasiAset from "./views/pelaporan/pages/mutasiAset";
import BukuInventarisBarang from "./views/pelaporan/pages/bukuinventarisbarang";
import RequireAuth from "./views/shared/components/RequireAuth";
import DashboardPenggunaBarang from "./views/dashboard/pages/dashboardpenggunabarang";
import PDF from "./views/shared/components/pdf";
import PencatatanRKD from "./views/pencatatan/KIR/pages/ruangKepalaDinas";
import PencatatanRSD from "./views/pencatatan/KIR/pages/ruangSekretarisDinas";
import PencatatanRKU from "./views/pencatatan/KIR/pages/ruangKasubagUmpegdatin";
import PencatatanRSU from "./views/pencatatan/KIR/pages/ruangStaffUmum";
import PencatatanRKK from "./views/pencatatan/KIR/pages/ruangKasubagKeuangan";
import PencatatanRKI from "./views/pencatatan/KIR/pages/ruangKeuanganI";

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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <DateProvider>
          <KegiatanProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route element={<RequireAuth allowedRole="pengurus_barang" />}>
                  <Route path="/" element={<DashboardAdmin />} />
                  <Route path="/pendataan" element={<Pendataan />} />
                  <Route path="/pencatatan">
                    <Route path="kib">
                      <Route path="b" element={<PencatatanKib />} />
                    </Route>
                    <Route path="kir">
                      <Route path="staff-umum" element={<PencatatanKir />} />
                      <Route path="ruang-kepala-dinas" element={<PencatatanRKD />} />
                      <Route path="ruang-sekretaris-dinas" element={<PencatatanRSD />} />
                      <Route path="ruang-kasubag-umpegdatin" element={<PencatatanRKU />} />
                      <Route path="ruang-staff-umum" element={<PencatatanRSU />} />
                      <Route path="ruang-kasubag-keuangan" element={<PencatatanRKK />} />
                      <Route path="ruang-keuangan-i" element={<PencatatanRKI />} />
                    </Route>
                  </Route>
                  <Route path="/pelaporan">
                    <Route path="mutasi-aset" element={<PelaporanMutasiAset />} />
                    <Route path="buku-inventaris-barang" element={<BukuInventarisBarang />} />
                  </Route>
                </Route>
                <Route element={<RequireAuth allowedRole="Pengguna_barang" />}>
                  <Route path="/pengguna" element={<DashboardPenggunaBarang />} />
                  <Route path="/pengguna/kib" element={<PenggunaKib />} />
                  <Route path="/pengguna/kir" element={<PenggunaKir />} />
                </Route>
              </Route>
              <Route path="/pdf" element={<PDF />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </KegiatanProvider>
        </DateProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
