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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return (
    <Layout>
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
          rowsPerPageOptions={[5, 10, 15, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage=""
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
              sx={{bgcolor:'#66BB6A'}}
            >
              <TableCell sx={{ border: 0 }} align="center" colSpan={8} />
              <TableCell sx={{ border: 1, borderTop: 0 }} align="center" colSpan={5}>
                Nomor
              </TableCell>
              <TableCell sx={{ border: 0 }} align="center" colSpan={2} />
            </TableRow>
            <TableRow
              sx={{bgcolor:'#66BB6A'}}
            >
              <TableCell sx={{ border: 1, borderLeft: 0 }} align="center">No</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Kode Barang</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Jenis Barang/Nama Barang</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Nomor Register</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Merk/Type</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Ukuran/CC</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Bahan</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Tahun Pembelian</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Pabrik</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Rangka</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Mesin</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Polisi</TableCell>
              <TableCell sx={{ border: 1 }} align="center">BPKB</TableCell>
              <TableCell sx={{ border: 1 }} align="center">Asal usul</TableCell>
              <TableCell sx={{ border: 1, borderRight: 0 }} align="center">Harga (Rp)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <StyledTableRow
                key={row.name}
              >
                <TableCell sx={{ border: 1, borderLeft: 0 }} align="center" component="th" scope="row">
                  {row.no}
                </TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.jenis}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.noreg}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.merk}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.kode}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.cc}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.bahan}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.tahun}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.pabrik}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.rangka}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.mesin}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.polisi}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.bpkb}</TableCell>
                <TableCell sx={{ border: 1 }} align="center">{row.asal}</TableCell>
                <TableCell sx={{ border: 1, borderRight: 0 }} align="center">{row.harga}</TableCell>
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
            mt: 12,
          }}
        />
      </Box>
    </Layout>
  );
}

export default PenggunaKib;