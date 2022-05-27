import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '../../../shared/components/button';
import Layout from '../../../shared/components/layout';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

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
              <TableCell>No</TableCell>
              <TableCell align="center">Kode Barang</TableCell>
              <TableCell align="center">Jenis Barang/Nama Barang</TableCell>
              <TableCell align="center">Nomor Register</TableCell>
              <TableCell align="center">Merk/Type</TableCell>
              <TableCell align="center">Ukuran/CC</TableCell>
              <TableCell align="center">Bahan</TableCell>
              <TableCell align="center">Nomor</TableCell>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  Nomor
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Pabrik</TableCell>
                <TableCell align="center">Rangka</TableCell>
              </TableRow>
              <TableCell align="center">Rangka</TableCell>
              <TableCell align="center">Mesin</TableCell>
              <TableCell align="center">Polisi</TableCell>
              <TableCell align="center">BPKB</TableCell>
              <TableCell align="center">Asal usul</TableCell>
              <TableCell align="center">Harga (Rp)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.no}
                </TableCell>
                <TableCell align="center">{row.kode}</TableCell>
                <TableCell align="center">{row.jenis}</TableCell>
                <TableCell align="center">{row.noreg}</TableCell>
                <TableCell align="center">{row.merk}</TableCell>
                <TableCell align="center">{row.cc}</TableCell>
                <TableCell align="center">{row.bahan}</TableCell>
                <TableCell align="center">{row.tahun}</TableCell>
                <TableCell align="center">{row.pabrik}</TableCell>
                <TableCell align="center">{row.rangka}</TableCell>
                <TableCell align="center">{row.mesin}</TableCell>
                <TableCell align="center">{row.polisi}</TableCell>
                <TableCell align="center">{row.bpkb}</TableCell>
                <TableCell align="center">{row.asal}</TableCell>
                <TableCell align="center">{row.harga}</TableCell>
              </TableRow>
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