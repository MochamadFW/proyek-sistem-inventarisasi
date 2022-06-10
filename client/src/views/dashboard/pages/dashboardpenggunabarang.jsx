import { Alert, Snackbar, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from 'react';
import { TextField, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/material";
import SubmitButton from "../../shared/components/button"
import { RoomContext } from "../../../hooks/useRoomContext";



const DashboardPenggunaBarang = () => {
  const [namaPengaju, setNamaPengaju] = useState("");
  const [jenisKerusakan, setJenisKerusakan] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState("");
  const { selectedRoom, setSelectedRoom } = useContext(RoomContext)
  const [totalItem, setTotalItem] = useState(0);
  const [selectedTotalItem, setSelectedTotalItem] = useState(0);
  const [message, setMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const selectTotalItem = [];
  for (let i = 0; i < totalItem; i++) {
    selectTotalItem.push(i + 1);
  }
  useEffect(() => {
    fetch("http://localhost:8081/ruangan/barang/" + selectedRoom.value)
      .then((data) => data.json())
      .then((data) => { data.data.hasOwnProperty('namaBarang') ? setItems(data.data.namaBarang) : setItems([]) })
    setSelectedItems("");
  }, [selectedRoom]);
  useEffect(() => {
    if (selectedRoom.value !== "" && selectedItems !== "") {
      fetch("http://localhost:8081/ruangan/barang/" + selectedRoom.value + '/' + selectedItems)
        .then((data) => data.json())
        .then((json) => { setTotalItem(parseInt(json.data.jumlahBarang[0].SUM)) })
    }
    setTotalItem(0);
  }, [selectedItems]);
  const handleChangeItems = (event) => {
    event.preventDefault();
    setSelectedItems(event.target.value);
  };
  const handleChangeTotal = (event) => {
    event.preventDefault();
    setSelectedTotalItem(event.target.value)
  };
  const handleChangeNamaPengaju = (event) => {
    event.preventDefault();
    setNamaPengaju(event.target.value);
  };
  const handleChangeJenisKerusakan = (event) => {
    event.preventDefault();
    setJenisKerusakan(event.target.value);
  };
  const handleChangeKeterangan = (event) => {
    event.preventDefault();
    setKeterangan(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(namaPengaju, selectedRoom.value, selectedItems, selectedTotalItem, jenisKerusakan, keterangan);
    fetch("http://localhost:8081/permintaan/newpermintaan",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nama_pengaju: namaPengaju,
          tanggal_permintaan: new Date(),
          nama_ruangan: selectedRoom.value,
          nama_barang: selectedItems,
          jumlah_barang: selectedTotalItem,
          jenis_kerusakan: jenisKerusakan,
          keterangan_barang: keterangan,
        })
      }
    ).then(response => response.json())
      .then(response => setMessage(response.message))
      .then(setOpenAlert(true))
      .then(setNamaPengaju(""), setJenisKerusakan(""), setKeterangan(""), setSelectedTotalItem(0), setSelectedItems(""))
  };
  const handleCloseSnackBar = (event) => {
    event.preventDefault();
    setOpenAlert(false);
  }
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
          <form onSubmit={handleSubmit}>
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
                <TextField id="filled-basic" label="Nama Pengaju" variant="filled" onChange={handleChangeNamaPengaju} value={namaPengaju} />
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
                  value={selectedRoom.name}
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
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedItems}
                  label="nama barang"
                  onChange={handleChangeItems}
                  variant="filled"
                  disabled={items.length === 0}
                >
                  {
                    items?.map((data, index) =>
                      <MenuItem key={index} value={data.nama_barang}>{data.nama_barang}</MenuItem>
                    )
                  }
                </Select>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '15%',
                ml: 3

              }}>
                <Typography>Jumlah Barang</Typography>
                <Select
                  id="filled-number"
                  label="Jumlah"
                  variant="filled"
                  value={selectedTotalItem}
                  onChange={handleChangeTotal}
                  disabled={selectedItems === ""}
                >
                  {selectTotalItem?.map((data, index) => <MenuItem key={index} value={data}>{data}</MenuItem>)}
                </Select>
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
                <TextField id="filled-basic" label="Jenis Kerusakan" variant="filled" onChange={handleChangeJenisKerusakan} value={jenisKerusakan} />
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
                <TextField id="filled-basic" label="Keterangan" variant="filled" onChange={handleChangeKeterangan} value={keterangan} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mr: 3, mb: 3 }}>
              <SubmitButton Label="Kirim Permintaan" Types='submit' Click={() => handleSubmit} Disabled={namaPengaju === "" || selectedTotalItem < 1} sx={{ backgroundColor: '#F2D424' }} />
            </Box>
          </form>
        </Box>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={openAlert} autoHideDuration={6000} onClose={handleCloseSnackBar}>
          <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </React.Fragment>
  )
}

export default DashboardPenggunaBarang




