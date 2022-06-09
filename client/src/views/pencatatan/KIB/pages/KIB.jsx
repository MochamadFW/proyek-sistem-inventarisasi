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
  Collapse
} from '@mui/material';
import Button from '../../../shared/components/button';
import Layout from '../../../shared/components/layout';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import FormBox from '../../../shared/components/formBox';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const headerRow = [
  "",
  "No",
  "Kode Barang",
  "Jenis Barang / Nama Barang",
  "Nomor Register",
  "Merk/Type",
  "Ukuran/CC",
  "Bahan",
  "Tahun Pembelian",
  "Pabrik",
  "Rangka",
  "Mesin",
  "Polisi",
  "BPKB",
  "Asal Usul",
  "Harga"
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

// remove outer border in table
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#E5E5E5',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    borderBottom: 0,
  },
}));

// RENDERING START //
const PencatatanKib = () => {

  // get data table from api
  const [dataTable, setDataTable] = React.useState([]);
  const getDataFromAPI = () => {
    fetch("http://localhost:8081/barang/allbarang")
    .then((data) => data.json())
    .then((data) => {
      setDataTable(data.data.barang);
      console.log(data.data.barang);
    });
  }

  // mount data at first loading page
  React.useEffect(() => {
    getDataFromAPI();
  }, []);

  // get data barang by id
  const getBarangById = (id) => {
    fetch("http://localhost:8081/barang/" + id)
    .then((data) => data.json())
    .then((data) => {
      setEditFormData(data.data.barang);
      console.log(data.data.barang);
    });
  }

  // data fe storage
  const [addFormData, setAddFormData] = React.useState({
    kode_barang: "",
    nama_barang: "",
    nomor_register: "",
    tipe_barang: "",
    ukuran_barang: "",
    bahan_barang: "",
    tahun_pembelian: "",
    nomor_pabrik: "",
    nomor_rangka: "",
    nomor_mesin: "",
    nomor_polisi: "",
    nomor_bpkb: "",
    asal_usul: "",
    harga_barang: 0
  });

  const [editFormData, setEditFormData] = React.useState({
    kode_barang: "",
    nama_barang: "",
    nomor_register: "",
    tipe_barang: "",
    ukuran_barang: "",
    bahan_barang: "",
    tahun_pembelian: "",
    nomor_pabrik: "",
    nomor_rangka: "",
    nomor_mesin: "",
    nomor_polisi: "",
    nomor_bpkb: "",
    asal_usul: "",
    harga_barang: 0
  });

  // reset form
  const resetFormData = {
    kode_barang: "",
    nama_barang: "",
    nomor_register: "",
    tipe_barang: "",
    ukuran_barang: "",
    bahan_barang: "",
    tahun_pembelian: "",
    nomor_pabrik: "",
    nomor_rangka: "",
    nomor_mesin: "",
    nomor_polisi: "",
    nomor_bpkb: "",
    asal_usul: "",
    harga_barang: 0
  }

  // handle data changes on add form text field
  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setAddFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  // handle data changes on edit form text field
  const handleOnChangeInputEdit = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  // handle submit form for adding data
  const handleSubmit =  (event) => {
    event.preventDefault();
    console.log(addFormData);
    fetch("http://localhost:8081/barang/newbarang", {
      method: 'POST',
      body: JSON.stringify(addFormData),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(response => console.log(response));

    // wait for adding data done & update data in table
    setTimeout(function() { //After 1 second, set render to true
      console.log("wait for 1 second to push data.");
      getDataFromAPI();
    }.bind(this), 1000)

    setAddFormData(resetFormData);
    setSuccessAlert(true);
    setTimeout(function() { //After 8 second, set render to true
      setSuccessAlert(false);
    }.bind(this), 8000)
  };

  // handle submit form for adding data
  const handleEdit =  (event) => {
    event.preventDefault();
    console.log(editFormData);
    fetch("http://localhost:8081/barang/" + editFormData.id, {
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

  const getRowData = (e) => {
    console.log(e, "DATA IN ROW");
  }

  const [selectedRow, setSelectedRow] = React.useState('');

  // handle delete row for deleting data
  const HandleDelete =  () => {
    const link = "http://localhost:8081/barang/" + selectedRow;
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
      getDataFromAPI();
    }.bind(this), 1000);

    setDeleteAlert(true);
    setTimeout(function() { //After 8 second, set render to true
      setDeleteAlert(false);
    }.bind(this), 8000);
  };

  // convert integer to money for price column in table
  const intToMoney = (valInt) => {
    var formatter = new Intl.NumberFormat('en-ID');
    return formatter.format(valInt);
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
    console.log(editFormData, "Reset Form Edit");
  };

  const [deleteToggle, setDeleteToggle] = React.useState(false);
  const handleOpenDelete = (kode) => {
    setDeleteToggle(true);
    setSelectedRow(kode);
  };
  const handleCloseDelete = () => setDeleteToggle(false);

  const [successAlert, setSuccessAlert] = React.useState(false);
  const [deleteAlert, setDeleteAlert] = React.useState(false);
  const [editAlert, setEditAlert] = React.useState(false);

  // table pagination
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
          sx={{width:366, flexShrink: 0, mr:2}}
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
            sx={{ml: -4}}
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
          sx={{ width: 366, maxHeight: 919, flexShrink: 0, mr:2 }}
        >
          <Box
            component="div"
            sx={{pr: 1, pb: 2, m: 0, width: 1, maxHeight: 800, overflow: 'auto'}}
          >
            <form
              onSubmit={handleSubmit}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mb: 2
                }}
              >
                <Typography>No</Typography>
                <TextField disabled hiddenLabel name="id" variant="filled" sx={{width:83}} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mb: 2
                }}
              >
                <Typography>Nomor Register</Typography>
                <TextField hiddenLabel name="nomor_register" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:83}} value={addFormData.nomor_register} />
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
                <Typography>Kode Barang</Typography>
                <TextField hiddenLabel name="kode_barang" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:1}} value={addFormData.kode_barang} />
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
                <Typography>Jenis / Nama Barang</Typography>
                <TextField hiddenLabel name="nama_barang" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:1}} value={addFormData.nama_barang} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mb: 2
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Typography>Merk/Type</Typography>
                  <TextField hiddenLabel name="tipe_barang" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:144}} value={addFormData.tipe_barang} />
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Typography>Ukuran/CC</Typography>
                  <TextField hiddenLabel name="ukuran_barang" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:155}} value={addFormData.ukuran_barang} />
                </Box>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mb: 2
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Typography>Tahun Pembelian</Typography>
                  <TextField hiddenLabel name="tahun_pembelian" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:144}} value={addFormData.tahun_pembelian} />
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Typography>Bahan</Typography>
                  <TextField hiddenLabel name="bahan_barang" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:155}} value={addFormData.bahan_barang} />
                </Box>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mb: 2
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Typography>No. Pabrik</Typography>
                  <TextField hiddenLabel name="nomor_pabrik" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:144}} value={addFormData.nomor_pabrik} />
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Typography>No. Rangka</Typography>
                  <TextField hiddenLabel name="nomor_rangka" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:155}} value={addFormData.nomor_rangka} />
                </Box>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mb: 2
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Typography>No. Mesin</Typography>
                  <TextField hiddenLabel name="nomor_mesin" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:144}} value={addFormData.nomor_mesin} />
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Typography>No. Polisi</Typography>
                  <TextField hiddenLabel name="nomor_polisi" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:155}} value={addFormData.nomor_polisi} />
                </Box>
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
                <Typography>No. BPKB</Typography>
                <TextField hiddenLabel name="nomor_bpkb" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:1}} value={addFormData.nomor_bpkb} />
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
                <TextField hiddenLabel name="asal_usul" onChange={handleOnChangeInput} label="" variant="filled" sx={{width:1}} value={addFormData.asal_usul} />
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
                <TextField type="number" name="harga_barang" onChange={handleOnChangeInput} label="Rp" variant="filled" sx={{width:1}} value={addFormData.harga_barang} />
              </Box>
              <Button
                Label="Submit"
                Types="submit"
                sx={[
                  {width: 1, bgcolor: "#66BB6A", color: "font.white"},
                  {
                    '&:hover': {
                      bgcolor: "#4D8A4F",
                    },
                  }
                ]}
              />
            </form>
          </Box>
        </FormBox>
        <FormBox
          title="Mesin & Peralatan (KIB B)"
          sx={{maxWidth:1, height: 919}}
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
                  <TableCell sx={{ border: 0 }} align="center" colSpan={9} />
                  <TableCell sx={{ border: 1, borderTop: 0 }} align="center" colSpan={5}>
                    Nomor
                  </TableCell>
                  <TableCell sx={{ border: 0 }} align="center" colSpan={2} />
                </TableRow>
                <TableRow
                  sx={{ bgcolor: '#66BB6A' }}
                >
                  {headerRow.map((htxt, index) => (
                    <TableCell key={index} sx={{ border: 1, '&:first-of-type': {borderLeft: 0, borderTop: 0}, '&:last-child': {borderRight: 0} }} align="center">{htxt}</TableCell>
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
                            style
                          ]}>
                            <FormBox
                              title="Edit Form"
                              sx={{width:366, maxHeight: 600, overflow: 'auto'}}
                            >
                              <form
                                onSubmit={handleEdit}
                              >
                                <Box
                                  component="div"
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    mb: 2
                                  }}
                                >
                                  <Typography>No</Typography>
                                  <TextField disabled hiddenLabel name="id" variant="filled" sx={{width:83}} />
                                </Box>
                                <Box
                                  component="div"
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    mb: 2
                                  }}
                                >
                                  <Typography>Nomor Register</Typography>
                                  <TextField hiddenLabel name="nomor_register" onChange={handleOnChangeInputEdit} value={editFormData.nomor_register} label="" variant="filled" sx={{width:83}} />
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
                                  <Typography>Kode Barang</Typography>
                                  <TextField hiddenLabel name="kode_barang" onChange={handleOnChangeInputEdit} value={editFormData.kode_barang} label="" variant="filled" sx={{width:1}} />
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
                                  <Typography>Jenis / Nama Barang</Typography>
                                  <TextField hiddenLabel name="nama_barang" onChange={handleOnChangeInputEdit} value={editFormData.nama_barang} label="" variant="filled" sx={{width:1}} />
                                </Box>
                                <Box
                                  component="div"
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    mb: 2
                                  }}
                                >
                                  <Box
                                    component="div"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column"
                                    }}
                                  >
                                    <Typography>Merk/Type</Typography>
                                    <TextField hiddenLabel name="tipe_barang" onChange={handleOnChangeInputEdit} value={editFormData.tipe_barang} label="" variant="filled" sx={{width:144}} />
                                  </Box>
                                  <Box
                                    component="div"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column"
                                    }}
                                  >
                                    <Typography>Ukuran/CC</Typography>
                                    <TextField name="ukuran_barang" onChange={handleOnChangeInputEdit} value={editFormData.ukuran_barang} label="" variant="filled" sx={{width:155}} />
                                  </Box>
                                </Box>
                                <Box
                                  component="div"
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    mb: 2
                                  }}
                                >
                                  <Box
                                    component="div"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column"
                                    }}
                                  >
                                    <Typography>Tahun Pembelian</Typography>
                                    <TextField required hiddenLabel name="tahun_pembelian" onChange={handleOnChangeInputEdit} value={editFormData.tahun_pembelian} label="" variant="filled" sx={{width:144}} />
                                  </Box>
                                  <Box
                                    component="div"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column"
                                    }}
                                  >
                                    <Typography>Bahan</Typography>
                                    <TextField name="bahan_barang" onChange={handleOnChangeInputEdit} value={editFormData.bahan_barang} label="" variant="filled" sx={{width:155}} />
                                  </Box>
                                </Box>
                                <Box
                                  component="div"
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    mb: 2
                                  }}
                                >
                                  <Box
                                    component="div"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column"
                                    }}
                                  >
                                    <Typography>No. Pabrik</Typography>
                                    <TextField hiddenLabel name="nomor_pabrik" onChange={handleOnChangeInputEdit} value={editFormData.nomor_pabrik} label="" variant="filled" sx={{width:144}} />
                                  </Box>
                                  <Box
                                    component="div"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column"
                                    }}
                                  >
                                    <Typography>No. Rangka</Typography>
                                    <TextField name="nomor_rangka" onChange={handleOnChangeInputEdit} value={editFormData.nomor_rangka} label="" variant="filled" sx={{width:155}} />
                                  </Box>
                                </Box>
                                <Box
                                  component="div"
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    mb: 2
                                  }}
                                >
                                  <Box
                                    component="div"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column"
                                    }}
                                  >
                                    <Typography>No. Mesin</Typography>
                                    <TextField hiddenLabel name="nomor_mesin" onChange={handleOnChangeInputEdit} value={editFormData.nomor_mesin} label="" variant="filled" sx={{width:144}} />
                                  </Box>
                                  <Box
                                    component="div"
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column"
                                    }}
                                  >
                                    <Typography>No. Polisi</Typography>
                                    <TextField name="nomor_polisi" onChange={handleOnChangeInputEdit} value={editFormData.nomor_polisi} label="" variant="filled" sx={{width:155}} />
                                  </Box>
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
                                  <Typography>No. BPKB</Typography>
                                  <TextField hiddenLabel name="nomor_bpkb" onChange={handleOnChangeInputEdit} value={editFormData.nomor_bpkb} label="" variant="filled" sx={{width:1}} />
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
                                  <TextField hiddenLabel name="asal_usul" onChange={handleOnChangeInputEdit} value={editFormData.asal_usul} label="" variant="filled" sx={{width:1}} />
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
                                  <TextField name="harga_barang" onChange={handleOnChangeInputEdit} value={editFormData.harga_barang} label="Rp" variant="filled" sx={{width:1}} />
                                </Box>
                                <Button
                                  Label="Submit"
                                  Types="submit"
                                  sx={[
                                    {width: 1, bgcolor: "#66BB6A", color: "font.white"},
                                    {
                                      '&:hover': {
                                        bgcolor: "#4D8A4F",
                                      },
                                    }
                                  ]}
                                />
                              </form>
                            </FormBox>
                          </Box>
                        </Modal>
                        <IconButton
                          onClick={() => {handleOpenDelete(row.id)}}
                          color="primary" 
                          aria-label="delete" 
                          sx={[
                            {bgcolor: "#F44336", borderRadius: 2},
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
                      {row.id}
                    </TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.kode_barang}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.nama_barang}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.nomor_register}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.tipe_barang}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.ukuran_barang}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.bahan_barang}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.tahun_pembelian}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.nomor_pabrik}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.nomor_rangka}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.nomor_mesin}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.nomor_polisi}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.nomor_bpkb}</TableCell>
                    <TableCell sx={{ border: 1 }} align="center">{row.asal_usul}</TableCell>
                    <TableCell sx={{ border: 1, borderRight: 0 }} align="center">{intToMoney(row.harga_barang)}</TableCell>
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
            sx={{width: 1,  display: 'flex', justifyContent: 'flex-end', mt: 6}}
          >
            <Button
              Label="Laporan KIB"
            />
          </Box>
        </FormBox>
      </Box>
    </React.Fragment>
  );
}

export default PencatatanKib;