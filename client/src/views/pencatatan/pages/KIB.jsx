import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '../../shared/components/button';
import Layout from '../../shared/components/layout';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import FormBox from '../../shared/components/formBox';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import async from 'asyncawait/async';
// import await from 'asyncawait/await';

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#E5E5E5',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    borderBottom: 0,
  },
}));

const PencatatanKib = () => {

  const [addFormData, setAddFormData] = React.useState({
    id: "",
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
    harga_barang: ""
  })

  const HandleSubmit = (event) => {
    event.preventDefault();
    FormSubmit(event.target);
  };

  const FormSubmit = (formData) => {
    var data = new FormData(formData);
    fetch("http://localhost:8081/barang/newbarang", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => response.json());
  };

  const handleAddData = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value();

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

    fetch("http://localhost:8081/barang/newbarang", {
      method: 'POST',
      mode: 'cors',
      body: addFormData
    });
  };

  const [dataTable, setDataTable] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8081/barang/allbarang")
      .then((data) => data.json())
      .then((data) => setDataTable(data.data.barang))
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
        component="div"
        sx={{
          width: 686,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          ml: "auto",
        }}
      >
        <TablePagination
          sx={{ ml: -4 }}
          rowsPerPageOptions={[5, 10, 15, 25, 100]}
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
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 237, bgcolor: "#E5E5E5" }}
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
          sx={{ width: 366, mr: 2 }}
        >
          <form
            onSubmit={HandleSubmit}
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
              <TextField hiddenLabel name="id" variant="filled" sx={{ width: 83 }} />
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
              <TextField hiddenLabel name="nomor_register" label="" variant="filled" sx={{ width: 83 }} />
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
              <TextField hiddenLabel name="kode_barang" label="" variant="filled" sx={{ width: 1 }} />
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
              <TextField hiddenLabel name="nama_barang" label="" variant="filled" sx={{ width: 1 }} />
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
                <TextField hiddenLabel name="tipe_barang" label="" variant="filled" sx={{ width: 144 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography>Ukuran/CC</Typography>
                <TextField name="ukuran_barang" label="" variant="filled" sx={{ width: 155 }} />
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
                <TextField hiddenLabel name="tahun_pembelian" label="" variant="filled" sx={{ width: 144 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography>Bahan</Typography>
                <TextField name="bahan_barang" label="" variant="filled" sx={{ width: 155 }} />
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
                <TextField hiddenLabel name="nomor_pabrik" label="" variant="filled" sx={{ width: 144 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography>No. Rangka</Typography>
                <TextField name="nomor_rangka" label="" variant="filled" sx={{ width: 155 }} />
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
                <TextField hiddenLabel name="nomor_mesin" label="" variant="filled" sx={{ width: 144 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography>No. Polisi</Typography>
                <TextField name="nomor_polisi" label="" variant="filled" sx={{ width: 155 }} />
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
              <TextField hiddenLabel name="nomor_bpkb" label="" variant="filled" sx={{ width: 1 }} />
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
              <TextField hiddenLabel name="asal_usul" label="" variant="filled" sx={{ width: 1 }} />
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
              <TextField name="harga_barang" label="Rp" variant="filled" sx={{ width: 1 }} />
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
            />
          </form>
        </FormBox>
        <FormBox
          title="Mesin & Peralatan (KIB B)"
          sx={{ maxWidth: 686 }}
        >

          <TableContainer
            component={Paper}
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
                    <TableCell sx={{ border: 1, '&:first-child': { borderLeft: 0, borderTop: 0 }, '&:last-child': { borderRight: 0 } }} align="center">{htxt}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <StyledTableRow
                      key={row.id}
                    >
                      <TableCell sx={{ border: 1, borderTop: 0, borderLeft: 0 }} size="small" component="th" scope="row" align="left">
                        <Box
                          sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                        >
                          <IconButton
                            color="primary"
                            aria-label="edit"
                            sx={[
                              { bgcolor: "#FFA726", borderRadius: 2, mr: 1 },
                              { '&:hover': { bgcolor: "#CB841B" } }
                            ]}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            color="primary"
                            aria-label="delete"
                            sx={[
                              { bgcolor: "#F44336", borderRadius: 2 },
                              { '&:hover': { bgcolor: "#B83229" } }
                            ]}
                          >
                            <DeleteIcon />
                          </IconButton>
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
                      <TableCell sx={{ border: 1, borderRight: 0 }} align="center">{row.harga_barang}</TableCell>
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
          <Box
            component="div"
            sx={{ width: 1, display: 'flex', justifyContent: 'flex-end' }}
          >
            <Box onClick={() => { navigate("/pdf", { state: { type: 'kib' } }) }}>
              <Button
                Label="Laporan KIB"
                sx={{
                  mt: 12,
                }}
              />
            </Box>
          </Box>
        </FormBox>
      </Box>
    </React.Fragment>
  );
}

export default PencatatanKib;