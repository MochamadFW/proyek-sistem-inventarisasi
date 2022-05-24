import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { DateProvider } from "./hooks/useDateContext";

import Dashboard from './views/dashboard/pages/dashboard';
import Pendataan from './views/pendataan/pages/pendataan';


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
          <Route path="/pendataan" element={<Pendataan />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </DateProvider>
    </ThemeProvider>
  );
}

export default App;
