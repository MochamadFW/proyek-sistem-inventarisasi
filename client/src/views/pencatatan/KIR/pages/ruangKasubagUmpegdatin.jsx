import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  TablePagination,
  InputBase,
  Box,
  IconButton,
  Modal,
  Alert,
  Collapse,
  Select,
  InputLabel

} from '@mui/material';
import Button from '../../../shared/components/button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import FormBox from '../../../shared/components/formBox';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';

const headerRow = [
  "",
  "No. Urut",
  "Nama barang / Jenis barang",
  "Merk/Model",
  "No. Seri Barang",
  "Ukuran",
  "Bahan",
  "Tahun Pembuatan / Pembelian",
  "Nomor kode Barang",
  "Jumlah Barang / Register (X)",
  "Harga Beli / Perolehan",
  "Asal Usul",
  "Keadaan Barang",
  "Keterangan Mutasi dll"
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#E5E5E5',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    borderBottom: 0,
  },
}));

const PencatatanRKU = () => {

  // get data table from api
  const [dataTable, setDataTable] = React.useState([]);
  const getDataFromAPI = () => {
    fetch("http://localhost:8081/ruangan/barang/KASUBAG%20UMPEGDATIN")
      .then((data) => data.json())
      .then((data) => {
        setDataTable(data.data.namaBarang);
        console.log(data.data.namaBarang);
      });
  }

  // mount data at first loading page
  React.useEffect(() => {
    getDataFromAPI();
  }, []);

  // data fe storage
  const [addFormData, setAddFormData] = React.useState({
    "nomor_register": "",
    "kode_ruangan": "12.10.17.05.01.2012.01.03.02",
    "nama_ruangan": "KASUBAG UMPEGDATIN",
    "luas_lantai": "",
    "kode_barang": "",
    "nama_barang": "",
    "tipe_barang": "",
    "nomor_seri_pabrik": "",
    "ukuran_barang": "",
    "bahan_barang": "",
    "tahun_perolehan": "",
    "jumlah_barang": 0,
    "harga_barang": 0,
    "keadaan_barang": "",
    "keterangan_barang": "",
    "asal_usul": ""
  });

  // reset form
  const resetFormData = {
    "nomor_register": "",
    "kode_ruangan": "12.10.17.05.01.2012.01.03.02",
    "nama_ruangan": "KASUBAG UMPEGDATIN",
    "luas_lantai": "",
    "kode_barang": "",
    "nama_barang": "",
    "tipe_barang": "",
    "nomor_seri_pabrik": "",
    "ukuran_barang": "",
    "bahan_barang": "",
    "tahun_perolehan": "",
    "jumlah_barang": 0,
    "harga_barang": 0,
    "keadaan_barang": "",
    "keterangan_barang": "",
    "asal_usul": ""
  }

  // handle data changes on text field
  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setAddFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // handle submit form for adding data
  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(addFormData);
    fetch("http://localhost:8081/ruangan/newruangan", {
      method: 'POST',
      body: JSON.stringify(addFormData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(response => console.log(response));

    // wait for adding data done & update data in table
    setTimeout(function () { //After 1 second, set render to true
      console.log("wait for 1 second to push data.");
      getDataFromAPI();
    }.bind(this), 1000)
    setAddFormData(resetFormData);
    setSuccessAlert(true);
    setTimeout(function () { //After 8 second, set render to true
      setSuccessAlert(false);
    }.bind(this), 8000)
  };

  const [editFormData, setEditFormData] = React.useState({
    "nomor_register": "",
    "kode_ruangan": "12.10.17.05.01.2012.01.03.02",
    "nama_ruangan": "KASUBAG UMPEGDATIN",
    "luas_lantai": "",
    "kode_barang": "",
    "nama_barang": "",
    "tipe_barang": "",
    "nomor_seri_pabrik": "",
    "ukuran_barang": "",
    "bahan_barang": "",
    "tahun_perolehan": "",
    "jumlah_barang": 0,
    "harga_barang": 0,
    "keadaan_barang": "",
    "keterangan_barang": "",
    "asal_usul": ""
  });

  // handle submit form for adding data
  const handleEdit =  (event) => {
    event.preventDefault();
    console.log(editFormData);
    fetch("http://localhost:8081/ruangan/" + editFormData.id, {
      method: 'PUT',
      body: JSON.stringify(editFormData),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(response => console.log(response));

    // wait for adding data done & update data in table
    setTimeout(function() { //After 1 second, set render to true
      console.log("wait for 1 second to push data.");
      getDataFromAPI();
    }.bind(this), 1000)

    handleCloseEdit();
    setEditAlert(true);
    setTimeout(function() { //After 8 second, set render to true
      setEditAlert(false);
    }.bind(this), 8000)
  };

  const [currentRow, setCurrentRow] = React.useState('');

  // handle delete row for deleting data
  const HandleDelete =  () => {
    const link = "http://localhost:8081/ruangan/" + currentRow;
    fetch(link, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(response => console.log(response));
    setDeleteToggle(false);
    // wait for removing data done & update data in table
    setTimeout(function() { //After 1 second, set render to true
      console.log("wait for 1 second to push data.");
      getDataFromAPI(ruangan);
    }.bind(this), 1000);

    setDeleteAlert(true);
    setTimeout(function() { //After 8 second, set render to true
      setDeleteAlert(false);
    }.bind(this), 8000);
  };

  // get data barang by id
  const getBarangById = (id) => {
    fetch("http://localhost:8081/ruangan/" + id)
    .then((data) => data.json())
    .then((data) => {
      setEditFormData(data.data.ruangan);
      console.log(data.data.ruangan);
    });
  }

  // convert integer to money for price column in table
  const intToMoney = (valInt) => {
    var formatter = new Intl.NumberFormat('en-ID');
    return formatter.format(valInt);
  };

  // handle data changes on edit form text field
  const handleOnChangeInputEdit = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  // modal function
  const [editToggle, setEditToggle] = React.useState(false);
  const handleOpenEdit = (id) => {
    setEditToggle(true);
    getBarangById(id);
  };
  const handleCloseEdit = () => {
    setEditToggle(false);
    setEditFormData(resetFormData);
  };

  const [deleteToggle, setDeleteToggle] = React.useState(false);
  const handleOpenDelete = (kode) => {
    setDeleteToggle(true);
    setCurrentRow(kode);
  };
  const handleCloseDelete = () => setDeleteToggle(false);

  const [successAlert, setSuccessAlert] = React.useState(false);
  const [deleteAlert, setDeleteAlert] = React.useState(false);
  const [editAlert, setEditAlert] = React.useState(false);

  const [ruangan, setRuangan] = React.useState(30);

  const handleChangeRuangan = (event) => {
    setRuangan(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataTable.length) : 0;
  const ActionsPagiantion = () => { return (<></>) };
  function defaultLabelDisplayedRows({ from, to, count }) { return ``; };
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Box
        sx={{
          maxWidth: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box
          component="div"
          sx={{ width: 366, flexShrink: 0, mr: 2 }}
        >
        </Box>
        <Box
          component="div"
          sx={{
            width: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            mb: 2,
            ml: "auto",
          }}
        >
          <TablePagination
            sx={{ ml: -4 }}
            rowsPerPageOptions={[10, 50, 75, { label: 'All', value: -1 }]}
            component="div"
            count={dataTable.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage=""
            ActionsComponent={ActionsPagiantion}
            labelDisplayedRows={defaultLabelDisplayedRows}
          />
          <FormControl variant="filled" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Ruangan</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={ruangan}
              onChange={handleChangeRuangan}
            >
              <MenuItem value={10} onClick={() => { navigate('/pencatatan/kir/ruang-kepala-dinas') }}>R. Kepala Dinas</MenuItem>
              <MenuItem value={20} onClick={() => { navigate('/pencatatan/kir/ruang-sekretaris-dinas') }}>R. Sektretaris Dinas</MenuItem>
              <MenuItem value={30} onClick={() => { navigate('/pencatatan/kir/ruang-kasubag-umpegdatin') }}>R. Kasubag Umpegdatin</MenuItem>
              <MenuItem value={40} onClick={() => { navigate('/pencatatan/kir/ruang-staff-umum') }}>R. Staff Umum</MenuItem>
              <MenuItem value={50} onClick={() => { navigate('/pencatatan/kir/ruang-kasubag-keuangan') }}>R. Kasubag Keuangan</MenuItem>
              <MenuItem value={60} onClick={() => { navigate('/pencatatan/kir/ruang-keuangan-i') }}>R. Keuangan I</MenuItem>
            </Select>
          </FormControl>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 237, bgcolor: "#E5E5E5", ml: "auto", borderRadius: 0 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              variant="filled"
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        <FormBox
          title="Form Input"
          sx={{ width: 366, maxHeight: 919, flexShrink: 0, mr: 2 }}
        >
          <Box
            component="div"
            sx={{ pr: 1, pb: 2, m: 0, width: 1, maxHeight: 800, overflow: 'auto' }}
          >
            <form
              onSubmit={HandleSubmit}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Jenis / Nama Barang</Typography>
                <TextField hiddenLabel name="nama_barang" onChange={handleOnChangeInput} value={addFormData.nama_barang} label="" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Merk/Model</Typography>
                <TextField hiddenLabel name="tipe_barang" onChange={handleOnChangeInput} value={addFormData.tipe_barang} label="" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>No. Seri Pabrik</Typography>
                <TextField hiddenLabel name="nomor_seri_pabrik" onChange={handleOnChangeInput} value={addFormData.nomor_seri_pabrik} label="" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Ukuran</Typography>
                <TextField hiddenLabel name="ukuran_barang" onChange={handleOnChangeInput} value={addFormData.ukuran_barang} label="" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Bahan</Typography>
                <TextField hiddenLabel name="bahan_barang" onChange={handleOnChangeInput} value={addFormData.bahan_barang} label="" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Tahun Perolehan</Typography>
                <TextField hiddenLabel type="number" name="tahun_perolehan" onChange={handleOnChangeInput} value={addFormData.tahun_perolehan} label="" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Nomor Kode Barang</Typography>
                <TextField hiddenLabel name="kode_barang" onChange={handleOnChangeInput} value={addFormData.kode_barang} label="" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Jumlah Barang</Typography>
                <TextField hiddenLabel type="number" name="jumlah_barang" onChange={handleOnChangeInput} value={addFormData.jumlah_barang} label="" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Harga</Typography>
                <TextField hiddenLabel type="number" name="harga_barang" onChange={handleOnChangeInput} value={addFormData.harga_barang} label="Rp" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Asal Usul</Typography>
                <TextField hiddenLabel name="asal_usul" onChange={handleOnChangeInput} value={addFormData.asal_usul} label="" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Keadaan Barang</Typography>
                <FormControl fullWidth sx={{ bgcolor: "#E8E8E8", borderBottom: 1, borderColor: "#8D8D8D", borderRadius: 1 }}>
                  <Select
                    name="keadaan_barang"
                    value={addFormData.keadaan_barang}
                    onChange={handleOnChangeInput}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Baik">Baik</MenuItem>
                    <MenuItem value="Kurang Baik">Kurang Baik</MenuItem>
                    <MenuItem value="Rusak Berat">Rusak Berat</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mb: 2
                }}
              >
                <Typography>Keterangan</Typography>
                <TextField hiddenLabel name="keterangan_barang" onChange={handleOnChangeInput} value={addFormData.keterangan_barang} label="" variant="filled" sx={{ width: 1 }} />
              </Box>
              <Button
                Label="Submit"
                Types="submit"
                sx={[
                  { width: 1, bgcolor: "#66BB6A", color: "font.white" },
                  {
                    '&:hover': {
                      bgcolor: "#4D8A4F",
                    },
                  }
                ]}
              >

              </Button>
            </form>
          </Box>
        </FormBox>
        <FormBox
          title="Kartu Inventaris Ruangan Kasubag Umpegdatin"
          sx={{ maxWidth: 1, height: 919 }}
        >
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 672, overflow: 'auto' }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ bgcolor: '#66BB6A' }}
                >
                  <TableCell sx={{ border: 0 }} align="center" colSpan={12} />
                  <TableCell sx={{ border: 1, borderTop: 0 }} align="center" colSpan={1}>
                    Keadaan Barang
                  </TableCell>
                  <TableCell sx={{ border: 0 }} align="center" colSpan={1} />
                </TableRow>
                <TableRow
                  sx={{ bgcolor: '#66BB6A' }}
                >
                  {headerRow.map((htxt, index) => (
                    <TableCell key={index} sx={{ border: 1, '&:first-child': { borderLeft: 0, borderTop: 0 }, '&:last-child': { borderRight: 0 } }} align="center">{htxt}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                ? dataTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : dataTable)
                .map((row, index) => (
                  <StyledTableRow
                    key={index}
                  >
                    <TableCell sx={{ border: 1, borderTop:0, borderLeft: 0 }} size="small" component="th" scope="row" align="left">
                      <Box
                        sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}
                      >
                        <IconButton
                          onClick={() => {handleOpenEdit(row.id)}}
                          color="primary" 
                          aria-label="edit" 
                          sx={[
                            {bgcolor: "#FFA726", borderRadius: 2, mr:1},
                            { '&:hover': {bgcolor: "#CB841B"} }
                          ]}
                        >
                          <EditIcon />
                        </IconButton>
                        <Modal
                          open={editToggle}
                          onClose={handleCloseEdit}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={[
                            style,
                            {mx: "auto"}
                          ]}>
                          <form onSubmit={handleEdit}>
                            <FormBox
                              title="Edit Form"
                              sx={{width:366, maxHeight: 600, flexShrink: 0, overflow: 'auto'}}
                            >
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Jenis / Nama Barang</Typography>
                                <TextField hiddenLabel name="nama_barang" onChange={handleOnChangeInputEdit} value={editFormData.nama_barang} variant="filled" sx={{width:1}} />
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Merk/Model</Typography>
                                <TextField hiddenLabel name="tipe_barang" onChange={handleOnChangeInputEdit} value={editFormData.tipe_barang} variant="filled" sx={{width:1}} />
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>No. Seri Pabrik</Typography>
                                <TextField hiddenLabel name="nomor_seri_pabrik" onChange={handleOnChangeInputEdit} value={editFormData.nomor_seri_pabrik} variant="filled" sx={{width:1}} />
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Ukuran</Typography>
                                <TextField hiddenLabel name="ukuran_barang" onChange={handleOnChangeInputEdit} value={editFormData.ukuran_barang} variant="filled" sx={{width:1}} />
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Bahan</Typography>
                                <TextField hiddenLabel name="bahan_barang" onChange={handleOnChangeInputEdit} value={editFormData.bahan_barang} variant="filled" sx={{width:1}} />
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Tahun Perolehan</Typography>
                                <TextField hiddenLabel name="tahun_perolehan" onChange={handleOnChangeInputEdit} value={editFormData.tahun_perolehan} variant="filled" sx={{width:1}} />
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Nomor Kode Barang</Typography>
                                <TextField hiddenLabel name="kode_barang" onChange={handleOnChangeInputEdit} value={editFormData.kode_barang} variant="filled" sx={{width:1}} />
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Jumlah Barang</Typography>
                                <TextField hiddenLabel name="jumlah_barang" onChange={handleOnChangeInputEdit} value={editFormData.jumlah_barang} variant="filled" sx={{width:1}} />
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Harga</Typography>
                                <TextField hiddenLabel name="harga_barang" onChange={handleOnChangeInputEdit} value={editFormData.harga_barang} label="Rp" variant="filled" sx={{width:1}} />
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Asal Usul</Typography>
                                <TextField hiddenLabel name="asal_usul" onChange={handleOnChangeInputEdit} value={editFormData.asal_usul} variant="filled" sx={{ width: 1 }} />
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Keadaan Barang</Typography>
                                <FormControl fullWidth sx={{bgcolor:"#E8E8E8", borderBottom: 1, borderColor: "#8D8D8D", borderRadius: 1}}>
                                  <Select
                                    name="keadaan_barang"
                                    value={editFormData.keadaan_barang}
                                    onChange={handleOnChangeInputEdit}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                  >
                                    <MenuItem value="">
                                      <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Baik">Baik</MenuItem>
                                    <MenuItem value="Kurang Baik">Kurang Baik</MenuItem>
                                    <MenuItem value="Rusak Berat">Rusak Berat</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                              <Box
                                component="div"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  mb: 2
                                }}
                              >
                                <Typography>Keterangan</Typography>
                                <TextField hiddenLabel name="keterangan_barang" onChange={handleOnChangeInputEdit} value={editFormData.keterangan_barang} variant="filled" sx={{width:1}} />
                              </Box>
                              <Button
                                Types="submit"
                                Label="Submit"
                                sx={[
                                  {width: 1, bgcolor: "#66BB6A", color: "font.white"},
                                  {
                                    '&:hover': {
                                      bgcolor: "#4D8A4F",
                                    },
                                  }
                                ]}
                              >

                              </Button>
                            </FormBox>
                          </form>
                          </Box>
                        </Modal>
                        <IconButton
                          onClick={() => {handleOpenDelete(row.id)}}
                          color="primary" 
                          aria-label="delete" 
                          sx={[
                            {bgcolor: "#F44336", borderRadius: 2, p: 1, height: 1},
                            { '&:hover': {bgcolor: "#B83229"} }
                          ]}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <Modal
                          open={deleteToggle}
                          onClose={handleCloseDelete}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              Apakah anda yakin ingin menghapus data ini?
                            </Typography>
                            <Box
                              component="div"
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mt: 4
                              }}
                            >
                              <Button
                                Label="Batalkan"
                                sx={[{bgcolor: "#3084F2", color: "font.white"}, {'&:hover': {bgcolor: "#29B6F6"}}]}
                                Click={handleCloseDelete}
                              />
                              <Button
                                Click={() => { HandleDelete() }}
                                Label="Hapus"
                                color="error"
                                sx={[{bgcolor: "#F44336", color: "font.white"}, {'&:hover': {bgcolor: "#B83229"}}]}
                              />
                            </Box>
                          </Box>
                        </Modal>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ border: 1, borderLeft: 0 }} align="center">
                        {index + 1}
                      </TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{row.nama_barang}</TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{row.tipe_barang}</TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{row.nomor_seri_pabrik}</TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{row.ukuran_barang}</TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{row.bahan_barang}</TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{row.tahun_perolehan}</TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{row.kode_barang}</TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{row.jumlah_barang}</TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{intToMoney(row.harga_barang)}</TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{row.asal_usul}</TableCell>
                      <TableCell sx={{ border: 1 }} align="center">{row.keadaan_barang}</TableCell>
                      <TableCell sx={{ border: 1, borderRight: 0 }} align="center">{row.keterangan_barang}</TableCell>
                    </StyledTableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Collapse in={successAlert}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setSuccessAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mt: 2 }}
            >
              Data berhasil ditambahkan!
            </Alert>
          </Collapse>
          <Collapse in={editAlert}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setEditAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mt: 2 }}
            >
              Data berhasil diedit!
            </Alert>
          </Collapse>
          <Collapse in={deleteAlert}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setDeleteAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mt: 2 }}
            >
              Data berhasil dihapus!
            </Alert>
          </Collapse>
          <Box
            component="div"
            sx={{ width: 1, display: 'flex', justifyContent: 'flex-end', mt: 6, gap: 2 }}
          >
            <Button
              Label="Laporan KIR"
              Click={() => (navigate('/pdf', { state: { type: 'kir', data: dataTable, } }))}
              Disabled={dataTable.length > 0 ? false : true}
            />
            <Button
              Label="Label"
              Click={() => (navigate('/pdf', { state: { type: 'label', data: dataTable, } }))}
              Disabled={dataTable.length > 0 ? false : true}
            />
          </Box>
        </FormBox>
      </Box>
    </React.Fragment>
  );
}

export default PencatatanRKU;