import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const headerRow = [
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
];

function createData(no, jenis, merk, noseri, ukuran, bahan, tahun, nokode, reg, harga, baik, kbaik, rberat, ketmutasi) {
  return { no, jenis, merk, noseri, ukuran, bahan, tahun, nokode, reg, harga, baik, kbaik, rberat, ketmutasi};
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(2, 237, 9.0, 37, 4.3, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(3, 262, 16.0, 24, 6.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(4, 305, 3.7, 67, 4.3, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(5, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(6, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(7, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
  createData(8, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
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

const PenggunaKir = () => {

  const [dataTable, setDataTable] = React.useState([]);
  
  const [ruangan, setRuangan] = React.useState(10);

  const handleChangeRuangan = (event) => {
    setRuangan(event.target.value);
  };

  const getCurrentKodeRuangan = (x) => {
    let kodeRuangan;
    switch (x) {
      case 10: kodeRuangan = '12.10.17.05.01.2012.01.00.01'; break;
      case 20: kodeRuangan = '12.10.17.05.01.2012.01.02.01'; break;
      case 30: kodeRuangan = '12.10.17.05.01.2012.01.03.02'; break;
      case 40: kodeRuangan = '12.10.17.05.01.2012.01.03.01'; break;
      case 50: kodeRuangan = '12.10.17.05.01.2012.01.04.01'; break;
      case 60: kodeRuangan = '12.10.17.05.01.2012.01.03.02'; break;
      default: kodeRuangan = '12.10.17.05.01.2012.01.00.01'; break;
    };

    return kodeRuangan;
  };

  React.useEffect(() => {
    const getDataFromAPI = (x) => {
      setRuangan(x);
      const curKodeRuangan = getCurrentKodeRuangan(x);
      fetch("http://localhost:8081/ruangan/kode_ruangan/" + curKodeRuangan)
        .then((data) => data.json())
        .then((data) => {
          setDataTable(data.data.ruangan);
          console.log(data.data.ruangan, "Data API");
        });
    };

    getDataFromAPI(ruangan);
  }, [ruangan]);

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
  
  const ActionsPagiantion = () => {return (<></>)};
  function defaultLabelDisplayedRows({ from, to, count }) { return ``; };
  
  return (
    <React.Fragment>
      
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
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Ruangan</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={ruangan}
            onChange={handleChangeRuangan}
          >
            <MenuItem value={10}>R. Kepala Dinas</MenuItem>
            <MenuItem value={20}>R. Sektretaris Dinas</MenuItem>
            <MenuItem value={30}>R. Kasubag Umpegdatin</MenuItem>
            <MenuItem value={40}>R. Staff Umum</MenuItem>
            <MenuItem value={50}>R. Kasubag Keuangan</MenuItem>
            <MenuItem value={60}>R. Keuangan I</MenuItem>
          </Select>
        </FormControl>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 237, bgcolor: "#E5E5E5", ml: "auto" }}
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
          <TableContainer
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ bgcolor: '#66BB6A' }}
                >
                  {headerRow.map((htxt, index) => (
                    <TableCell key={index} sx={{ border: 1, borderTop: 0, '&:first-child': { borderLeft: 0 }, '&:last-child': { borderRight: 0 } }} align="center">{htxt}</TableCell>
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
      <Box
        component="div"
        sx={{width: 1, display: 'flex', justifyContent: 'flex-end'}}
      >
        <Button
          Label="Laporan KIR"
          sx={{
            mt: 4,
          }}
        />
      </Box>
    </React.Fragment>
  );
}

export default PenggunaKir;