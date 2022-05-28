import { Button, Container, Grid, Typography } from "@mui/material";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from "@mui/material";
import Layout from "../../shared/components/layout";
import { Box } from "@mui/material";
import { createTheme, display } from "@mui/system";
import { create } from "@mui/material/styles/createTransitions";

// const theme = createTheme({
//   spacing: 4,
// });
// theme.spacing(2);

const DashboardPenggunaBarang = () => {
  return (<Layout>
    <Box
      maxHeight="497px"
      sx={{ ma: 3, border: 1, borderColor: '#29B6F6' }}
    >
      <Box height="60px"
        sx={{ backgroundColor: '#29B6F6',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center" }}
      >
        <Box>
          <Typography
            variant="h5"
            color="#FFFFFF"
            sx={{ ml: 2}}>
            Form Input
          </Typography>
        </Box>
      </Box>
      <Box height="437px"
        sx={{ backgroundColor: '#F7F7F7' }}
      >
        <Box
          sx={{
            padding: 3,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
            <Box>
              <Typography variant="body1">
                Nama Pengaju
              </Typography>
              <BasicTextFields width=""></BasicTextFields>
            </Box>
          </Box>
          <Box
            width="491px"
            sx={{
              ml: 3,
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Typography variant="body1">
              Keberadaan Aset
            </Typography>
            <MultilineTextFields1></MultilineTextFields1>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: 3,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start'
          }}>
          <Box>
            <Typography variant="body1">Jenis / Nama Barang</Typography>
            <MultilineTextFields1></MultilineTextFields1>
          </Box>
          <Box sx={{
            ml: 3
          }}>
            <Typography variant="body1">Jumlah Barang</Typography>
            <MultilineTextFields sx={{
            }}></MultilineTextFields>
          </Box>
          <Box sx={{
            ml: 3
          }}>
            <Typography variant="body1">
              Jenis Kerusakan
            </Typography>
            <BasicTextFields2></BasicTextFields2>
          </Box>
        </Box>
        <Box
          sx={{
            padding: 3
          }}>
          <Box
          >
            <Typography variant="body1">Keterangan</Typography>
            <BasicTextFields1
            ></BasicTextFields1>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="end"
          >
            <Button variant="contained"
              onClick={() => {
                alert('clicked')
              }}
              sx={{ mt: 2, backgroundColor: "#F2D424" }}>
              <Typography variant="subtitle2" lowercase="true">Kirim Permintaan</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </Layout>)
}


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '555px'
    },
  },
  root1: {
    '& > *': {
      margin: theme.spacing(0),
      width: '1134px',
      height: '87px',
      mx: 'auto'
    },
  },
  root2: {
    '& > *': {
      margin: theme.spacing(0),
      width: '380px',
      mx: 'auto'
    },
  }
}));

const useStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '151px',
    },
  },
  root1: {
    '& > *': {
      margin: theme.spacing(0),
      width: '555px',
    },
  },
}));

export default DashboardPenggunaBarang
export function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" variant="filled" />
    </form>
  );

}

export function BasicTextFields1() {
  const classes = useStyles();

  return (
    <form className={classes.root1} noValidate autoComplete="off">
      <TextField id="filled-basic" variant="filled" />
    </form>
  );
}

export function BasicTextFields2() {
  const classes = useStyles();

  return (
    <form className={classes.root2} noValidate autoComplete="off">
      <TextField id="filled-basic" variant="filled" />
    </form>
  );
}

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export function MultilineTextFields() {
  const classes = useStyle();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="filled-basic"
        variant="filled"
        select
        label="Select item ..."
        value={currency}
        onChange={handleChange}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  )
}

export function MultilineTextFields1() {
  const classes = useStyle();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root1} noValidate autoComplete="off">
      <TextField
        id="filled-basic"
        variant="filled"
        select
        label="Select item ..."
        value={currency}
        onChange={handleChange}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  )
}
