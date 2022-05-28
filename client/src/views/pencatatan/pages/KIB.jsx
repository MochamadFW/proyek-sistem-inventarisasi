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
import FormBox from '../../shared/components/formBox'
import { Typography } from '@mui/material';

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
  createData(9, 159, 6.0, 24, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(10, 237, 9.0, 37, 4.3, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(11, 262, 16.0, 24, 6.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(12, 305, 3.7, 67, 4.3, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(13, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(14, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(15, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(16, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
];

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
  const ActionsPagiantion = () => {return (<></>)};
  function defaultLabelDisplayedRows({ from, to, count }) { return ``; };
  return (
    <Layout>
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
          sx={{ml: -4}}
          rowsPerPageOptions={[5, 10, 15, 25, 100]}
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
          sx={{width:366, mr:2}}
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
            <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{width:83}} />
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
            <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{width:83}} />
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
            <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{width:1}} />
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
            <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{width:1}} />
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
              <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{width:144}} />
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Typography>Ukuran/CC</Typography>
              <TextField id="filled-basic" label="" variant="filled" sx={{width:155}} />
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
              <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{width:144}} />
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Typography>Bahan</Typography>
              <TextField id="filled-basic" label="" variant="filled" sx={{width:155}} />
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
              <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{width:144}} />
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Typography>No. Rangka</Typography>
              <TextField id="filled-basic" label="" variant="filled" sx={{width:155}} />
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
              <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{width:144}} />
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Typography>No. Polisi</Typography>
              <TextField id="filled-basic" label="" variant="filled" sx={{width:155}} />
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
            <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{width:1}} />
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
            <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{width:1}} />
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
            <TextField id="filled-basic" label="Rp" variant="filled" sx={{width:1}} />
          </Box>
          <Button
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
        <FormBox
          title="Mesin & Peralatan (KIB B)"
          sx={{maxWidth:686}}
        >

          <TableContainer 
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{bgcolor:'#66BB6A'}}
                >
                  <TableCell sx={{ border: 0 }} align="center" colSpan={9} />
                  <TableCell sx={{ border: 1, borderTop: 0 }} align="center" colSpan={5}>
                    Nomor
                  </TableCell>
                  <TableCell sx={{ border: 0 }} align="center" colSpan={2} />
                </TableRow>
                <TableRow
                  sx={{bgcolor:'#66BB6A'}}
                >
                  {headerRow.map((htxt, index) => (
                    <TableCell sx={{ border: 1, '&:first-child': {borderLeft: 0, borderTop: 0}, '&:last-child': {borderRight: 0} }} align="center">{htxt}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow
                    key={row.name}
                  >
                    <TableCell sx={{ border: 1, borderTop:0, borderLeft: 0 }} size="small" component="th" scope="row" align="left">
                      <Box
                        sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}
                      >
                        <IconButton 
                          color="primary" 
                          aria-label="edit" 
                          sx={[
                            {bgcolor: "#FFA726", borderRadius: 2, mr:1},
                            { '&:hover': {bgcolor: "#CB841B"} }
                          ]}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="primary" 
                          aria-label="delete" 
                          sx={[
                            {bgcolor: "#F44336", borderRadius: 2},
                            { '&:hover': {bgcolor: "#B83229"} }
                          ]}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ border: 1, borderLeft: 0 }} align="center">
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
        </FormBox>
      </Box>
    </Layout>
  );
}

export default PencatatanKib;