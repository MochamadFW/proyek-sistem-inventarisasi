import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DateProvider } from "./hooks/useDateContext";
import { KegiatanProvider } from "./hooks/useKegiatanContext";
import React from "react";

import DashboardAdmin from './views/dashboard/pages/dashboard';
import Pendataan from './views/pendataan/pages/pendataan';
import DashboardPenggunaBarang from './views/dashboard/pages/dashboardpenggunabarang';
import Login from './views/login/pages/login';
import PenggunaKib from './views/pengguna/pages/KIB'
import PenggunaKir from './views/pengguna/pages/KIR'
import PencatatanKib from './views/pencatatan/pages/KIB'
import PencatatanKir from './views/pencatatan/pages/KIR'
import PelaporanMutasiAset from "./views/pelaporan/pages/mutasiAset";
import BukuInventarisBarang from "./views/pelaporan/pages/bukuinventarisbarang";

import useAuth from "./hooks/useAuth";

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

function PrivateRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    /** Redirect them to the /login page, but save the current location they were
    trying to go to when they were redirected. This allows us to send them
    along to that page after they login, which is a nicer user experience
    than dropping them off on the home page. */
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const signin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  const signout = (callback) => {
    setUser(null);
    callback();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <DateProvider>
          <KegiatanProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute><DashboardAdmin /></PrivateRoute>} />
              <Route path="/dashboard-pengguna-barang" element={<DashboardPenggunaBarang />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pendataan" element={<Pendataan />} />
              <Route path="/pengguna/kib" element={<PenggunaKib />} />
              <Route path="/pengguna/kir" element={<PenggunaKir />} />
              <Route path="/pencatatan">
                <Route path="kib">
                  <Route path="b" element={<PencatatanKib />} />
                </Route>
                <Route path="kir">
                  <Route path="staff-umum" element={<PencatatanKir />} />
                </Route>
              </Route>
              <Route path="/pelaporan">
                <Route path="mutasi-aset" element={<PelaporanMutasiAset />} />
                <Route path="buku-inventaris-barang" element={<BukuInventarisBarang />} />
              </Route>
            </Routes>
          </KegiatanProvider>
        </DateProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
