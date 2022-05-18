import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";

import Pendataan from './views/pendataan/pages/pendataan';
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      main:"#263238",
      white:"#FFFFFF"
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/Pendataan" element={<Pendataan />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
