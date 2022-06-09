import { Button, Container, Grid, ListItemSecondaryAction, Typography } from "@mui/material";
import React, { useContext, useEffect } from 'react';
import { TextField, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { Box } from "@mui/material";
import { createTheme, display } from "@mui/system";
import { create } from "@mui/material/styles/createTransitions";
import SubmitButton from "../../shared/components/button"
import { RoomContext } from "../../../hooks/useRoomContext";
import { render } from "vue";
import Sidebar from "../../shared/components/sidebar";



const DashboardPenggunaBarang = () => {

  const [items, setItems] = React.useState([]);
  const { selectedRoom, setSelectedRoom } = useContext(RoomContext)
  console.log(selectedRoom)
  
  React.useEffect(() => {
    fetch("http://localhost:8081/ruangan/barang/" + selectedRoom)
      .then((data) => data.json())
      .then((data) => {setItems(data.data.namaBarang);})
  },[selectedRoom]);
  const handleChangeItems = (event) => {
    setItems(event.target.value);
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
              <TextField
                id="filled-basic"
                value={selectedRoom}
                variant="filled"
                disabled
              >

              </TextField>
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
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={items}
                  label="nama barang"
                  onChange={handleChangeItems}
                  variant="filled"
                >
                  {
                  items.map((data, index) =>
                    <MenuItem key={index} value={data.nama_barang}>{data.nama_barang}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '15%',
              ml: 3

            }}>
              <Typography>Jumlah Barang</Typography>
              <TextField
                id="filled-number"
                label="Jumlah"
                variant="filled"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />

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
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mr: 3, mb: 3 }}>
            <SubmitButton Label="Kirim Permintaan" Types='submit' sx={{ backgroundColor: '#F2D424' }} />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default DashboardPenggunaBarang




