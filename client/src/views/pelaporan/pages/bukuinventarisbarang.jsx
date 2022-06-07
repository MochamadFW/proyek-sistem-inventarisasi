import React, { useState, useContext, useEffect } from 'react';
import {
    Badge,
    Box,
    Button,
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
    styled,
    Snackbar,
    Alert,
    Modal,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

import moment from 'moment';

import { KegiatanContext } from '../../../hooks/useKegiatanContext';

import ButtonMUI from '../../shared/components/button';
import FormBox from '../../shared/components/formBox';
import { Navigate, useNavigate } from 'react-router-dom';

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

const TableBIB = ({ data, changed, setChange }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
    const ActionsPagination = () => { return (<></>) };
    function defaultLabelDisplayedRows({ from, to, count }) { return ``; };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
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
    const [selectedID, setSelectedID] = useState();
    const [deleteToggle, setDeleteToggle] = useState(false);
    const navigate = useNavigate();
    function handleDeleteRow(id) {
        setDeleteToggle(true);
        setSelectedID(id);
    };
    const DeleteRowModal = () => {

        const handleCloseDelete = () => {
            setDeleteToggle(false);
        }
        const handleDelete = () => {
            fetch("http://localhost:8081/ruangan/" + selectedID, {
                method: 'DELETE'
            }).then(res => console.log(res));
            setChange(!changed);
            handleCloseDelete();
            setSelectedID(undefined);
        }
        return (
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
                        <ButtonMUI
                            Label="Batalkan"
                            sx={[{ bgcolor: "#3084F2", color: "font.white" }, { '&:hover': { bgcolor: "#29B6F6" } }]}
                            Click={handleCloseDelete}
                        />
                        <ButtonMUI
                            Label="Hapus"
                            color="error"
                            sx={[{ bgcolor: "#F44336", color: "font.white" }, { '&:hover': { bgcolor: "#B83229" } }]}
                            Click={handleDelete}
                        />
                    </Box>
                </Box>
            </Modal>
        )
    };
    const [editToggle, setEditToggle] = useState(false);
    function handleEditRow(id) {
        setEditToggle(true);
        setSelectedID(id);
    };
    const EditRowModal = () => {
        function getEditData() { return data.filter(function (el) { return el.id === selectedID }) };
        const [dataFormBuku, setDataFormBuku] = useState(selectedID === undefined ? {
            kode_ruangan: " ",
            nomor_register: " ",
            nama_ruangan: " ",
            luas_lantai: " ",
            kode_barang: " ",
            nama_barang: " ",
            tipe_barang: " ",
            nomor_seri_pabrik: " ",
            asal_usul: " ",
            ukuran_barang: " ",
            bahan_barang: " ",
            tahun_perolehan: " ",
            jumlah_barang: 1,
            harga_barang: 0,
            keadaan_barang: " ",
            keterangan_barang: " "
        } : getEditData()[0]);
        const handleCloseEdit = () => {
            setEditToggle(false);
        };

        function handleSubmit() {
            fetch("http://localhost:8081/ruangan/" + selectedID,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            nomor_register: "",
                            kode_ruangan: "",                            
                            nama_ruangan: "",
                            luas_lantai: "",
                            kode_barang: dataFormBuku.kode_barang,
                            nama_barang: dataFormBuku.nama_barang,
                            tipe_barang: dataFormBuku.tipe_barang,
                            nomor_seri_pabrik: dataFormBuku.nomor_seri_pabrik,
                            ukuran_barang: dataFormBuku.ukuran_barang,
                            bahan_barang: dataFormBuku.bahan_barang,
                            tahun_perolehan: typeof (dataFormBuku.tahun_perolehan) === "string" ? dataFormBuku.tahun_perolehan : String(dataFormBuku.tahun_perolehan.getFullYear()),
                            jumlah_barang: typeof (dataFormBuku.jumlah_barang) === "string" ? Number(dataFormBuku.jumlah_barang) : dataFormBuku.jumlah_barang,
                            harga_barang: typeof (dataFormBuku.harga_barang) === "string" ? Number(dataFormBuku.harga_barang) : dataFormBuku.harga_barang,
                            keadaan_barang: dataFormBuku.keadaan_barang,
                            keterangan_barang: dataFormBuku.keterangan_barang,
                            asal_usul: dataFormBuku.asal_usul
                        }
                    )
                }).then(res => res.json())
            setChange(!changed);
            setDataFormBuku({
                kode_ruangan: "",
                nomor_register: "",
                nama_ruangan: "",
                luas_lantai: "",
                kode_barang: "",
                nama_barang: "",
                tipe_barang: "",
                nomor_seri_pabrik: "",
                asal_usul: "",
                ukuran_barang: "",
                bahan_barang: "",
                tahun_perolehan: "",
                jumlah_barang: 1,
                harga_barang: 0,
                keadaan_barang: "",
                keterangan_barang: ""
            });
            handleCloseEdit();
        };
        const handleChangeSelect = (event) => {
            setDataFormBuku((prev) => ({ ...prev, keadaan_barang: event.target.value }));
        };
        return (
            <Modal
                open={editToggle}
                onClose={handleCloseEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={[style]}>
                    <FormBox
                        title="Form Input"
                        sx={{ maxHeight: '80vh', overflowY: 'scroll' }}
                    >
                        <form onSubmit={handleSubmit}>
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
                                <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                    value={dataFormBuku?.kode_barang}
                                    onChange={(event) => { setDataFormBuku((prev) => ({ ...prev, kode_barang: event.target.value })) }} />
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
                                <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                    value={dataFormBuku.nama_barang} onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, nama_barang: value.target.value })) }} />
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
                                <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                    value={dataFormBuku.tipe_barang} onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, tipe_barang: value.target.value })) }} />
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
                                <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                    value={dataFormBuku.nomor_seri_pabrik} onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, nomor_seri_pabrik: value.target.value })) }} />
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
                                <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }} disabled />
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
                                <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                    value={dataFormBuku.asal_usul} onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, asal_usul: value.target.value })) }}
                                />
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
                                        views={['year']}
                                        label=""
                                        value={dataFormBuku.tahun_perolehan}
                                        inputFormat="yyyy"
                                        onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, tahun_perolehan: value })) }}
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
                                <TextField hiddenLabel type="number" InputProps={{ inputProps: { min: 1 } }} id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                    value={dataFormBuku.jumlah_barang}
                                    onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, jumlah_barang: value.target.value })) }}
                                />
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
                                <TextField hiddenLabel id="filled-basic" label="Rp" variant="filled" sx={{ width: 1 }}
                                    type="number"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    value={dataFormBuku.harga_barang}
                                    onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, harga_barang: value.target.value })) }}
                                />
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
                                    value={dataFormBuku.keadaan_barang}
                                    onChange={handleChangeSelect}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    required
                                    defaultValue=''
                                >
                                    <MenuItem value="Baik">Baik</MenuItem>
                                    <MenuItem value="Kurang Baik">Kurang Baik</MenuItem>
                                    <MenuItem value="Rusak Berat">Rusak Berat</MenuItem>
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
                                <TextField hiddenLabel multiline id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                    value={dataFormBuku.keterangan_barang}
                                    onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, keterangan_barang: value.target.value })) }} />
                            </Box>
                            <Button
                                Label="Submit"
                                sx={[
                                    { width: 1, bgcolor: "#66BB6A", color: "font.white" },
                                    {
                                        '&:hover': {
                                            bgcolor: "#4D8A4F",
                                        },
                                    }
                                ]}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </form>
                    </FormBox>
                </Box>
            </Modal>
        )
    }

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
                    count={data.length}
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
                        <TableHead sx={{ border: 1, backgroundColor: '#66bb6a' }} align="center">
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
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <StyledTableRow
                                    key={index}
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
                                                onClick={() => handleEditRow(row.id)}
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
                                                onClick={() => handleDeleteRow(row.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ border: 1, borderLeft: 0 }} align="center">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell sx={{ border: 1 }} align="center">{row.kode_barang}</TableCell>
                                    <TableCell sx={{ border: 1 }} align="center">{row.nama_barang}</TableCell>
                                    <TableCell sx={{ border: 1 }} align="center">{row.tipe_barang}</TableCell>
                                    <TableCell sx={{ border: 1 }} align="center">{row.nomor_seri_pabrik}</TableCell>
                                    <TableCell sx={{ border: 1 }} align="center">{row.ukuran_barang}</TableCell>
                                    <TableCell sx={{ border: 1 }} align="center">{row.asal_usul}</TableCell>
                                    <TableCell sx={{ border: 1 }} align="center">{row.tahun_perolehan}</TableCell>
                                    <TableCell sx={{ border: 1 }} align="center">{row.jumlah_barang}</TableCell>
                                    <TableCell sx={{ border: 1 }} align="center">Rp{Intl.NumberFormat('en-US').format(row.harga_barang)}</TableCell>
                                    <TableRow sx={{ display: 'flex', }}>
                                        <TableCell sx={{ borderRight: 1, borderBottom: 1 }} align="center"><Box sx={{ width: '28px', height: '100%' }}>{row.keadaan_barang === "Baik" ? row.jumlah_barang : "-"}</Box></TableCell>
                                        <TableCell sx={{ borderRight: 1, borderBottom: 1 }} align="center"><Box sx={{ width: '48px', height: '100%' }}>{row.keadaan_barang === "Kurang Baik" ? row.jumlah_barang : "-"}</Box></TableCell>
                                        <TableCell sx={{ borderBottom: 1 }} align="center"><Box sx={{ width: '42px', height: '100%' }}>{row.keadaan_barang === "Rusak Berat" ? row.jumlah_barang : "-"}</Box></TableCell>
                                    </TableRow>
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
                    sx={{ width: 1, display: 'flex', justifyContent: 'flex-end' }}
                >
                    <ButtonMUI
                        Label="Buku Inventaris Barang"
                        sx={{
                            mt: 12,
                        }}
                        Click={() => { navigate("/pdf", { state: { type: 'bib', data: data } }) }}
                    />
                </Box>
            </FormBox>
            <DeleteRowModal />
            <EditRowModal />
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
    const [dataAllRuangan, setDataAllRuangan] = useState();
    const [dataFormBuku, setDataFormBuku] = useState(
        {
            kode_ruangan: " ",
            nomor_register: " ",
            nama_ruangan: " ",
            luas_lantai: " ",
            kode_barang: " ",
            nama_barang: " ",
            tipe_barang: " ",
            nomor_seri_pabrik: " ",
            asal_usul: " ",
            ukuran_barang: " ",
            bahan_barang: " ",
            tahun_perolehan: " ",
            jumlah_barang: 1,
            harga_barang: 0,
            keadaan_barang: " ",
            keterangan_barang: " "
        }
    );
    const [deletedData, setDeletedData] = useState(false);
    useEffect(() => {
        fetch("http://localhost:8081/ruangan/allruangan").
            then((data) => data.json()).
            then((data) => setDataAllRuangan(data.data.ruangan))
    }, [dataFormBuku, deletedData]);
    const handleChangeSelect = (event) => {
        setDataFormBuku((prev) => ({ ...prev, keadaan_barang: event.target.value }));
    };
    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:8081/ruangan/newruangan/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        kode_ruangan: dataFormBuku.kode_ruangan,
                        nomor_register: dataFormBuku.nomor_register,
                        nama_ruangan: dataFormBuku.nama_ruangan,
                        luas_lantai: dataFormBuku.luas_lantai,
                        kode_barang: dataFormBuku.kode_barang,
                        nama_barang: dataFormBuku.nama_barang,
                        tipe_barang: dataFormBuku.tipe_barang,
                        nomor_seri_pabrik: dataFormBuku.nomor_seri_pabrik,
                        asal_usul: dataFormBuku.asal_usul,
                        ukuran_barang: dataFormBuku.ukuran_barang,
                        bahan_barang: dataFormBuku.bahan_barang,
                        tahun_perolehan: String(dataFormBuku.tahun_perolehan.getFullYear()),
                        jumlah_barang: Number(dataFormBuku.jumlah_barang),
                        harga_barang: Number(dataFormBuku.harga_barang),
                        keadaan_barang: dataFormBuku.keadaan_barang,
                        keterangan_barang: dataFormBuku.keterangan_barang
                    }
                )
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .then(setOpenSnackBar(true))
            .then(setDataFormBuku({
                kode_ruangan: "",
                nomor_register: "",
                nama_ruangan: "",
                luas_lantai: "",
                kode_barang: "",
                nama_barang: "",
                tipe_barang: "",
                nomor_seri_pabrik: "",
                asal_usul: "",
                ukuran_barang: "",
                bahan_barang: "",
                tahun_perolehan: null,
                jumlah_barang: 1,
                harga_barang: 0,
                keadaan_barang: "",
                keterangan_barang: ""
            }))
            .catch(error => {
                console.error('Error:', error);
            });
    }
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleCloseSnackBar = () => {
        setOpenSnackBar(false);
    };
    if (dataAllRuangan === undefined) { return <h1>Loading</h1> }
    return (
        <React.Fragment>
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
                            <form onSubmit={handleSubmit}>
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
                                    <TextField disabled hiddenLabel value={dataAllRuangan?.length + 1} id="filled-basic" label="" variant="filled" />
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
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                        value={dataFormBuku?.kode_barang}
                                        onChange={(event) => { setDataFormBuku((prev) => ({ ...prev, kode_barang: event.target.value })) }} />
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
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                        value={dataFormBuku.nama_barang} onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, nama_barang: value.target.value })) }} />
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
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                        value={dataFormBuku.tipe_barang} onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, tipe_barang: value.target.value })) }} />
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
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                        value={dataFormBuku.nomor_seri_pabrik} onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, nomor_seri_pabrik: value.target.value })) }} />
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
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }} disabled />
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
                                    <TextField hiddenLabel id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                        value={dataFormBuku.asal_usul} onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, asal_usul: value.target.value })) }}
                                    />
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
                                            views={['year']}
                                            label=""
                                            value={dataFormBuku.tahun_perolehan}
                                            inputFormat="yyyy"
                                            onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, tahun_perolehan: value })) }}
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
                                    <TextField hiddenLabel type="number" InputProps={{ inputProps: { min: 1 } }} id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                        value={dataFormBuku.jumlah_barang}
                                        onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, jumlah_barang: value.target.value })) }}
                                    />
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
                                    <TextField hiddenLabel id="filled-basic" label="Rp" variant="filled" sx={{ width: 1 }}
                                        type="number"
                                        InputProps={{ inputProps: { min: 0 } }}
                                        value={dataFormBuku.harga_barang}
                                        onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, harga_barang: value.target.value })) }}
                                    />
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
                                        value={dataFormBuku.keadaan_barang}
                                        onChange={handleChangeSelect}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        required
                                        defaultValue=''
                                    >
                                        <MenuItem value="Baik">Baik</MenuItem>
                                        <MenuItem value="Kurang Baik">Kurang Baik</MenuItem>
                                        <MenuItem value="Rusak Berat">Rusak Berat</MenuItem>
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
                                    <TextField hiddenLabel multiline id="filled-basic" label="" variant="filled" sx={{ width: 1 }}
                                        value={dataFormBuku.keterangan_barang}
                                        onChange={(value) => { setDataFormBuku((prev) => ({ ...prev, keterangan_barang: value.target.value })) }} />
                                </Box>
                                <Button
                                    Label="Submit"
                                    type='submit'
                                    sx={[
                                        { width: 1, bgcolor: "#66BB6A", color: "font.white" },
                                        {
                                            '&:hover': {
                                                bgcolor: "#4D8A4F",
                                            },
                                        }
                                    ]}
                                >
                                    Submit
                                </Button>
                            </form>
                        </FormBox>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TableBIB data={dataAllRuangan} changed={deletedData} setChange={setDeletedData} />
                </Box>
            </Box>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
                    Data berhasil ditambahkan!
                </Alert>
            </Snackbar>
        </React.Fragment >
    )
};

export default BukuInventarisBarang;