import React, { useContext, useState } from "react";
import { Alert, Box, Badge, Icon, IconButton, Snackbar, Typography, TextField, Dialog, Popover } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PickersDay, pickersDayClasses } from '@mui/x-date-pickers/PickersDay';

import isSameDay from 'date-fns/isSameDay';
import moment from 'moment';

import { DateContext } from "../../../hooks/useDateContext";
import { KegiatanContext } from "../../../hooks/useKegiatanContext";

import Layout from "../../shared/components/layout";
import SubmitButton from "../../shared/components/button";

import '../../shared/style/scrollbar.css'

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
}

const FormKegiatan = ({ onSubmit, setDate }) => {
    const [value, setValue] = useState({ namaKegiatan: "", tanggalKegiatan: new Date() });
    function handleSubmitAddKegiatan(event) {
        event.preventDefault();
        setDate((prevState) => ([...prevState, value]));
        onSubmit();
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ backgroundColor: 'info.main', px: 2, py: 3 }}><Typography variant="h5" color="font.white">Form Input</Typography></Box>

            <form onSubmit={handleSubmitAddKegiatan}>
                <Box sx={{ display: 'flex', flexDirection: 'column', px: 3, pt: 2, pb: 5, gap: 3 }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography variant="body1">Tanggal Kegiatan</Typography>
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography variant="body1">Nama Kegiatan Inventaris</Typography>
                        <TextField
                            variant="filled"
                            required
                            id="nama_kegiatan_inventaris"
                            value={value.namaKegiatan}
                            onChange={(newValue) => {
                                setValue((prevState) => ({ ...prevState, namaKegiatan: newValue.target.value }))
                            }}
                            inputProps={{ style: { paddingTop: '12px' } }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <SubmitButton Label="Tambah Kegiatan" Types='submit' sx={{backgroundColor:'button.submit', '&:hover':{backgroundColor:'#4A874D'}}} />
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

const Pendataan = () => {
    const { selectedDate, setSelectedDate } = useContext(DateContext);
    const { selectedKegiatan, setSelectedKegiatan } = useContext(KegiatanContext);
    const renderEventsDay = (date, selectedDates, pickersDayProps) => {
        const matchedStyles = selectedKegiatan.reduce((a, v) => {
            return isSameDay(date, v.tanggalKegiatan) ? {
                backgroundColor: "secondary.main",
                color: "font.white",
                '&:hover, &:focus': { backgroundColor: "secondary.darker" },
                [`&&.${pickersDayClasses.today}`]: { backgroundColor: "secondary.main" },
                [`&&.${pickersDayClasses.selected}`]: { color: 'font.white', backgroundColor: "secondary.darker", border: '2px solid', borderColor: 'secondary.darker' }
            } : a;
        }, {});

        return (<PickersDay {...pickersDayProps} sx={{
            ...matchedStyles,
        }} />)
    };
    const [openFormKegiatan, setOpenFormKegiatan] = useState(false);
    const handleCloseFormKegiatan = () => {
        setOpenFormKegiatan(false);
    };
    const handleToggleFormKegiatan = () => {
        setOpenFormKegiatan(!openFormKegiatan);
    };
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleCloseSnackBar = () => {
        setOpenSnackBar(false);
    };
    const [anchorNotification, setAnchorNotification] = useState(null);
    const handleClickNotification = (event) => {
        setAnchorNotification(event.currentTarget);
    };
    const handleNotificationClose = () => {
        setAnchorNotification(null);
    };
    const openNotification = Boolean(anchorNotification);
    const idNotification = openNotification ? 'notification-popover' : undefined;
    return (
        <Layout>
            <Box sx={{ py: 2, px: 3, mb: 3, backgroundColor: 'font.white', textTransform: 'uppercase', }}>
                <Typography variant="h5" color="font.main" sx={{ fontWeight: 'medium' }}>siinvent</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={selectedDate}
                            onChange={(newValue) => {
                                setSelectedDate(newValue);
                            }}
                            renderDay={renderEventsDay}
                            inputFormat="dd-mm-yyyy"
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Box sx={{display:'flex', flexDirection:'row-reverse'}} onClick={handleToggleFormKegiatan}>
                        <SubmitButton Label="Edit" />
                    </Box>
                </Box>
                <Box>
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

                <Dialog
                    onClose={handleCloseFormKegiatan}
                    open={openFormKegiatan}
                >
                    <FormKegiatan onSubmit={handleCloseFormKegiatan} setDate={setSelectedKegiatan} />
                </Dialog>
                <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                    <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
            </Box>
        </Layout >
    )
}

export default Pendataan;