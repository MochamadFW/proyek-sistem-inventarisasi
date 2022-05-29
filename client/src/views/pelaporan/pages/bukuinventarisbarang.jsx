import React, { useState, useContext } from 'react';
import {
    Badge,
    Box,
    FormControl,
    Icon,
    IconButton,
    InputBase,
    MenuItem,
    Select,
    TextField,
    Popover,
    Typography,
    Table,
    TableContainer,
    TablePagination,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Paper,
    styled
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

import moment from 'moment';

import { KegiatanContext } from '../../../hooks/useKegiatanContext';

import Button from '../../shared/components/button';
import Layout from '../../shared/components/layout';
import FormBox from '../../shared/components/formBox';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#E5E5E5',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        borderBottom: 0,
    },
}));

const NotificationKegiatan = ({ data }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'hidden', maxHeight: '592px' }}>
            <Box sx={{ backgroundColor: 'secondary.main', px: 2, py: 3, overflowY: 'hidden' }}>
                <Typography variant="h6" color="font.white">Notifikasi</Typography>
            </Box>
            <Box className="menu" sx={{ width: '320px', maxHeight: '100%', gap: 2, display: 'flex', flexDirection: 'column', px: 3, py: 2, overflowX: 'hidden', overflowY: 'scroll', userSelect: "none", MozUserSelect: "none" }}>
                {data.map((datas, index) => (
                    <Box sx={{ width: '100%', borderBottom: index === (data.length - 1) ? '' : '1px solid rgba(0,0,0,.1)', wordBreak: 'break-all' }} key={index}>
                        <Typography variant="subtitle2">{moment(datas.tanggalKegiatan).format("DD MMMM YYYY")}</Typography>
                        <Typography variant="body1">{datas.namaKegiatan}</Typography>
                    </Box>)
                )}
            </Box>
        </Box >
    )
};

function createData(no, jenis, merk, noseri, ukuran, bahan, tahun, nokode, reg, harga, baik, kbaik, rberat, ketmutasi) {
    return { no, jenis, merk, noseri, ukuran, bahan, tahun, nokode, reg, harga, baik, kbaik, rberat, ketmutasi };
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
    createData(9, 159, 6.0, 24, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
    createData(10, 237, 9.0, 37, 4.3, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
    createData(11, 262, 16.0, 24, 6.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
    createData(12, 305, 3.7, 67, 4.3, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
    createData(13, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
    createData(14, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
    createData(15, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
    createData(16, 356, 16.0, 49, 3.9, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0),
];

const TableBIB = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const ActionsPagination = () => { return (<></>) };
    function defaultLabelDisplayedRows({ from, to, count }) { return ``; };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
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
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage=""
                    ActionsComponent={ActionsPagination}
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
            <FormBox
                title="Buku Inventaris Barang"
                sx={{ maxWidth: 686 }}
            >
                <TableContainer
                    component={Paper}
                >
                    <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
                        <TableHead sx={{ border: 1, backgroundColor: '#9cd39e' }} align="center">
                            <TableRow>
                                <TableCell sx={{ border: 1 }} />
                                <TableCell sx={{ border: 1 }}>No</TableCell>
                                <TableCell sx={{ border: 1 }}>Kode Barang</TableCell>
                                <TableCell sx={{ border: 1 }}>Jenis/Nama Barang</TableCell>
                                <TableCell sx={{ border: 1 }}>Merk</TableCell>
                                <TableCell sx={{ border: 1 }}>No. Seri Pabrik</TableCell>
                                <TableCell sx={{ border: 1 }}>Mutasi</TableCell>
                                <TableCell sx={{ border: 1 }}>Asal-Usul</TableCell>
                                <TableCell sx={{ border: 1 }}>Tahun Perolehan</TableCell>
                                <TableCell sx={{ border: 1 }}>Jumlah Barang</TableCell>
                                <TableCell sx={{ border: 1 }}>Nilai(Rp)</TableCell>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <TableCell >Kondisi barang</TableCell>
                                    <TableRow>
                                        <TableCell sx={{ borderRight: 1, borderTop: 1 }}><Box sx={{ width: '28px' }}>Baik</Box></TableCell>
                                        <TableCell sx={{ borderRight: 1, borderTop: 1 }}><Box sx={{ width: '48px' }}>Kurang Baik</Box></TableCell>
                                        <TableCell sx={{ borderTop: 1 }}><Box sx={{ width: '42px' }}>Rusak Berat</Box></TableCell>
                                    </TableRow>
                                </Box>
                                <TableCell sx={{ border: 1 }}>Keterangan</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => (
                                    <StyledTableRow
                                        key={row.name}
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
                                            {row.no}
                                        </TableCell>
                                        <TableCell sx={{ border: 1 }} align="center">{row.jenis}</TableCell>
                                        <TableCell sx={{ border: 1 }} align="center">{row.merk}</TableCell>
                                        <TableCell sx={{ border: 1 }} align="center">{row.noseri}</TableCell>
                                        <TableCell sx={{ border: 1 }} align="center">{row.ukuran}</TableCell>
                                        <TableCell sx={{ border: 1 }} align="center">{row.bahan}</TableCell>
                                        <TableCell sx={{ border: 1 }} align="center">{row.tahun}</TableCell>
                                        <TableCell sx={{ border: 1 }} align="center">{row.nokode}</TableCell>
                                        <TableCell sx={{ border: 1 }} align="center">{row.reg}</TableCell>
                                        <TableCell sx={{ border: 1 }} align="center">{row.harga}</TableCell>
                                        <TableRow>
                                            <TableCell sx={{ borderRight: 1, borderBottom: 1 }} align="center"><Box sx={{ width: '28px' }}>{row.baik}</Box></TableCell>
                                            <TableCell sx={{ borderRight: 1, borderBottom: 1 }} align="center"><Box sx={{ width: '48px' }}>{row.kbaik}</Box></TableCell>
                                            <TableCell sx={{ borderBottom: 1 }} align="center"><Box sx={{ width: '42px' }}>{row.rberat}</Box></TableCell>
                                        </TableRow>
                                        <TableCell sx={{ border: 1, borderRight: 0 }} align="center">{row.ketmutasi}</TableCell>
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
                    <Button
                        Label="Buku Inventaris Barang"
                        sx={{
                            mt: 12,
                        }}
                    />
                </Box>
            </FormBox>
        </React.Fragment>

    )
}

const BukuInventarisBarang = () => {
    const { selectedKegiatan, setSelectedKegiatan } = useContext(KegiatanContext);
    const [anchorNotification, setAnchorNotification] = useState(null);
    const handleClickNotification = (event) => {
        setAnchorNotification(event.currentTarget);
    };
    const handleNotificationClose = () => {
        setAnchorNotification(null);
    };
    const openNotification = Boolean(anchorNotification);
    const idNotification = openNotification ? 'notification-popover' : undefined;
    const [age, setAge] = useState('');
    const handleChangeSelect = (event) => {
        setAge(event.target.value);
    };
    const [value, setValue] = useState({ namaKegiatan: "", tanggalKegiatan: new Date() });

    return (
        <Layout>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ mb: 5 }}>
                        <IconButton sx={{ p: 0.5 }} aria-describedby={idNotification} onClick={handleClickNotification}>
                            <Badge color="warning" variant="dot">
                                <Icon sx={[{ color: 'secondary.main', cursor: 'pointer' }, { '&:hover': { color: 'secondary.darker' } }]}>notifications</Icon>
                            </Badge>
                        </IconButton>
                        <Popover
                            id={idNotification}
                            open={openNotification}
                            anchorEl={anchorNotification}
                            onClose={handleNotificationClose}
                            anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'right'
                            }}
                            marginThreshold={0}
                            PaperProps={{ sx: 'overflowY:hidden' }}
                        >
                            <NotificationKegiatan data={selectedKegiatan} />
                        </Popover>
                    </Box>
                    <Box>
                        <FormBox
                            title="Form Input"
                        >

                            <FormControl fullWidth variant="filled">
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 2,
                                        gap: 3
                                    }}
                                >
                                    <Typography>No</Typography>
                                    <TextField disabled hiddenLabel id="filled-basic" label="" variant="filled" />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1,
                                        mb: 2
                                    }}
                                >
                                    <Typography>Kode Barang</Typography>
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1,
                                        mb: 2
                                    }}
                                >
                                    <Typography>Jenis / Nama Barang</Typography>
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        mb: 2,
                                        gap: 2
                                    }}
                                >
                                    <Typography>Merk/Model</Typography>
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        mb: 2,
                                        gap: 2
                                    }}
                                >
                                    <Typography>No. Seri Pabrik</Typography>
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        mb: 2,
                                        gap: 2
                                    }}
                                >
                                    <Typography>Mutasi</Typography>
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        mb: 2,
                                        gap: 2
                                    }}
                                >
                                    <Typography>Asal Usul</Typography>
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }} />
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
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label=""
                                            value={value.tanggalKegiatan}
                                            onChange={(newValue) => {
                                                setValue((prevState) => ({ ...prevState, tanggalKegiatan: newValue }));
                                            }}
                                            renderInput={(params) => <TextField variant="filled" {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        mb: 2,
                                        gap: 2
                                    }}
                                >
                                    <Typography>Jumlah Barang</Typography>
                                    <TextField hiddenLabel type="number" InputProps={{ inputProps: { min: 1 } }} id="filled-basic" label="" variant="filled" sx={{ width: 1 }} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        mb: 2,
                                        gap: 2
                                    }}
                                >
                                    <Typography>Harga</Typography>
                                    <TextField hiddenLabel id="filled-basic" label="Rp" variant="filled" sx={{ width: 1 }} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        mb: 2,
                                        gap: 2
                                    }}
                                >
                                    <Typography>Kondisi Barang</Typography>
                                    <Select
                                        value={age}
                                        onChange={handleChangeSelect}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value={10}>Baik</MenuItem>
                                        <MenuItem value={20}>Kurang Baik</MenuItem>
                                        <MenuItem value={30}>Rusak Berat</MenuItem>
                                    </Select>
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        mb: 2,
                                        gap: 2
                                    }}
                                >
                                    <Typography>Keterangan</Typography>
                                    <TextField hiddenLabel multiline id="filled-basic" label="" variant="filled" sx={{ width: 1 }} />
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
                            </FormControl>
                        </FormBox>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TableBIB />
                </Box>
            </Box>
        </Layout >
    )
};

export default BukuInventarisBarang;