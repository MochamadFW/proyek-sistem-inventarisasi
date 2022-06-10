import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '../../shared/components/button';
import Layout from '../../shared/components/layout';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const headerRow = [
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

function createData(no, kode, jenis, noreg, merk, cc, bahan, tahun, pabrik, rangka, mesin, polisi, bpkb, asal, harga) {
  return { no, kode, jenis, noreg, merk, cc, bahan, tahun, pabrik, rangka, mesin, polisi, bpkb, asal, harga };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(2, 237, 9.0, 37, 4.3, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(3, 262, 16.0, 24, 6.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(4, 305, 3.7, 67, 4.3, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(5, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(6, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(7, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(8, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#E5E5E5',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    borderBottom: 0,
  },
}));

const PenggunaKib = () => {

  const [dataTable, setDataTable] = React.useState([]);

  // mount data at first loading page
  React.useEffect(() => {
    const getDataFromAPI = () => {
      fetch("http://localhost:8081/barang/allbarang")
        .then((data) => data.json())
        .then((data) => {
          setDataTable(data.data.barang);
          console.log(data.data.barang);
        });
    }
  
    getDataFromAPI();
  }, []);

  // convert integer to money for price column in table
  const intToMoney = (valInt) => {
    var formatter = new Intl.NumberFormat('en-ID');
    return formatter.format(valInt);
  };

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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const ActionsPagiantion = () => { return (<></>) };
  function defaultLabelDisplayedRows({ from, to, count }) { return ``; };

  return (
    <React.Fragment>
      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3
        }}
      >
        <TablePagination
          rowsPerPageOptions={[10, 50, 75, {label: 'All', value: -1}]}
          component="div"
          count={rows.length}
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
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 237 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
          <TableContainer
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ bgcolor: '#66BB6A' }}
                >
                  <TableCell sx={{ border: 0 }} align="center" colSpan={8} />
                  <TableCell sx={{ border: 1, borderTop: 0 }} align="center" colSpan={5}>
                    Nomor
                  </TableCell>
                  <TableCell sx={{ border: 0 }} align="center" colSpan={2} />
                </TableRow>
                <TableRow
                  sx={{ bgcolor: '#66BB6A' }}
                >
                  {headerRow.map((htxt, index) => (
                    <TableCell key={index} sx={{ border: 1, '&:first-of-type': { borderLeft: 0 }, '&:last-child': { borderRight: 0 } }} align="center">{htxt}</TableCell>
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
                      <TableCell sx={{ border: 1, borderLeft: 0 }} align="center">
                        {index + 1}
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
      <Box
        component="div"
        sx={{width: 1, display: 'flex', justifyContent: 'flex-end'}}
      >
        <Button
          Label="Laporan KIB"
          sx={{
            mt: 4,
          }}
        />
      </Box>
    </React.Fragment>
  );
}

export default PenggunaKib;