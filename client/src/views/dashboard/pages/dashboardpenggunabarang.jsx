import { Button, Container, Grid, Typography } from "@mui/material";
import React from 'react';
import { TextField, MenuItem, styled } from "@mui/material";
import Layout from "../../shared/components/layout";
import { Box } from "@mui/material";
import { createTheme, display } from "@mui/system";
import { create } from "@mui/material/styles/createTransitions";


const DashboardPenggunaBarang = () => {
  const item = [
    {
      value: 'Kursi',
      label: 'kursi',
    },
    {
      value: 'Meja',
      label: 'meja',
    },
    {
      value: 'Papan Tulis',
      label: 'papan tulis',
    },
    {
      value: 'Pulpen',
      label: 'pulpen',
    },
  ]

  const jumlah = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    }
  ]
  const [items, setItems] = React.useState('RuanganB');
  const [jumlahbarang, setJumlahBarang] = React.useState('1');
  const handleChangeItems = (event) => {
    setItems(event.target.value);

  };
  const handleChangeJumlah = (event) => {
    setJumlahBarang(event.target.value);

  };
  return (
    <React.Fragment>
      <Box
        maxHeight="497px"
        sx={{ ma: 3, border: 1, borderColor: '#29B6F6' }}
      >
        <Box height="60px"
          sx={{
            backgroundColor: '#29B6F6',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Box>
            <Typography
              variant="h5"
              color="#FFFFFF"
              sx={{ ml: 2 }}>
              Form Input
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              m: 3
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%'
              }}

            >
              <Typography>Nama Pengaju</Typography>
              <TextField id="filled-basic" label="nama pengaju" variant="filled" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: 3,
                width: '50%'
              }}
            >
              <Typography>Keberadaan Aset</Typography>
              <TextField id="filled-basic" label="R. Kepala Dinas" variant="filled" disabled />
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            m: 3
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%'
            }}>
              <Typography>Jenis / Nama Barang</Typography>
              <TextField
                id="filled-select"
                select
                label="Select Item"
                value={items}
                onChange={handleChangeItems}
                variant="filled"
              >
                {item.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '15%',
              ml: 3

            }}>
              <Typography>Jumlah Barang</Typography>
              <TextField
                id="filled-select"
                select
                label="Select Item"
                value={jumlahbarang}
                onChange={handleChangeJumlah}
                variant="filled"
              >
                {jumlah.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '35%',
                ml: 3

              }}
            >
              <Typography>Jenis Kerusakan</Typography>
              <TextField id="filled-basic" label="Jenis Kerusakan" variant="filled" />
            </Box>
          </Box>
          <Box
            sx={{
              m: 3
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}

            >
              <Typography>Keterangan</Typography>
              <TextField id="filled-basic" label="keterangan" variant="filled" />
            </Box>
          </Box>
        </Box>

      </Box>
    </React.Fragment>
  )
}

export default DashboardPenggunaBarang





