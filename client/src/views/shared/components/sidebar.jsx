import React, { useContext } from "react";
import {
    Box,
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    TextField
} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Icon from '@mui/material/Icon';

import "../style/scrollbar.css"
import { DateContext } from "../../../hooks/useDateContext";

const Sidebar = () => {
    const { selectedDate, setSelectedDate } = useContext(DateContext);
    const account = [
        {
            name: 'Siti Mulyani',
            NIP: '197101231994032004',
            position: 'Kepala Sub Bagian Umpegdatin',
            status: 'Online'
        },
        {
            name: 'Arin Setiawan',
            NIP: '197306092008011004',
            position: 'Pengurus Barang Pengguna',
            status: 'Offline'
        }
    ]

    const subMenuPencatatan = [
        {
            id: 1,
            name: 'Kartu Inventaris Barang (KIB)',
            menu: [
                { id: 1, name: 'KIB (A)' },
                { id: 2, name: 'KIB (B)' },
                { id: 3, name: 'KIB (C)' },
                { id: 4, name: 'KIB (D)' },
                { id: 5, name: 'KIB (E)' },
                { id: 6, name: 'KIB (F)' }
            ]
        },
        {
            id: 2,
            name: 'Kartu Inventaris Ruangan (KIR)',
            menu: [
                { id: 1, name: 'R. Kepala Dinas' },
                { id: 2, name: 'R. Sekretaris Dinas' },
                { id: 3, name: 'R. Kasubag Umpegdatin' },
                { id: 4, name: 'R. Staff Umum' },
                { id: 5, name: 'R. Kasubag Keuangan' },
                { id: 6, name: 'R. Keuangan I' },
            ]
        }
    ]
    return (
        <Box
            sx={{
                backgroundColor: 'secondary.main',
            }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                height: '100%'
            }}>
                <Box
                    sx={{ display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '42px',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 3,
                        userSelect: 'none',
                        msUserSelect: 'none',
                        MozUserSelect: 'none'
                    }}>
                        <Typography variant="h4" textTransform="uppercase" fontWeight="bold" color="font.white">siinvent</Typography>
                        <Box><img src={process.env.PUBLIC_URL + "/image/Lambang_Kota_Bandung.svg"} alt="Logo Kota Bandung" loading="lazy" height="auto" width="59px" /></Box>
                    </Box>
                    <Box
                        className="menu"
                        component="div"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'scroll',
                        }}
                    >
                        <List key={1} sx={{ color: "font.white" }} disablePadding>
                            <ListItemButton sx={{ px: 3, py: 1 }} alignItems="center">
                                <Icon sx={{ color: 'font.white', mr: 2 }}>dashboard</Icon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </List>
                        <List key={2} sx={{ color: "font.white" }} disablePadding>
                            <ListItemButton sx={{ px: 3, py: 1 }} alignItems="center">
                                <Icon sx={{ color: 'font.white', mr: 2 }}>bar_chart</Icon>
                                <ListItemText primary="Pendataan" />
                            </ListItemButton>
                            <Collapse in={true} component="li" timeout="auto" unmountOnExit>
                                <List key={3} disablePadding sx={{ color: 'font.white', pl: 8 }}>
                                    <ListItem sx={{ gap: '1rem', p: 0, mb: 2 }}>
                                        <ListItemText primary="Bulan" />
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                disableMaskedInput
                                                inputFormat="MMMM"
                                                views={["month"]}
                                                value={selectedDate}
                                                onChange={(newValue) => {
                                                    setSelectedDate(newValue);
                                                }}
                                                renderInput={(params) => <TextField sx={{ backgroundColor: 'font.white', borderRadius: '4px', borderColor: 'transparent' }} {...params} inputProps={{ ...params.inputProps, placeholder: "month" }} />}
                                            />
                                        </LocalizationProvider>
                                    </ListItem>
                                    <ListItem sx={{ gap: '1rem', p: 0 }}>
                                        <ListItemText primary="Tahun" />
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                views={["year"]}
                                                value={selectedDate}
                                                onChange={(newValue) => {
                                                    setSelectedDate(newValue);
                                                }}
                                                renderInput={(params) => <TextField sx={{ backgroundColor: 'font.white', borderRadius: '4px', borderColor: 'transparent' }} {...params} inputProps={{ ...params.inputProps, placeholder: "year" }} />}
                                            />
                                        </LocalizationProvider>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                        <List key={4} sx={{ color: "font.white" }} disablePadding>
                            <ListItemButton sx={{ px: 3, py: 1 }} alignItems="center">
                                <Icon sx={{ color: 'font.white', mr: 2 }}>edit_note</Icon>
                                <ListItemText primary="Pencatatan" />
                            </ListItemButton>
                            <Collapse in={true} component="li" timeout="auto" unmountOnExit sx={{ backgroundColor: 'secondary.darker', ml: 3, p: 1, borderRadius: '4px' }}>
                                <List key={5} disablePadding>
                                    {subMenuPencatatan.map((data, index) =>
                                        <>
                                            <ListItemButton key={index} sx={{ p: 1 }}>
                                                <ListItemText primary={data.name} />
                                                <Icon>expand_less</Icon>
                                            </ListItemButton>
                                            <Collapse in={true} component="li" timeout="auto" unmountOnExit>
                                                <List key={index + `a`} sx={{ py: 0 }} disablePadding>
                                                    {data.menu.map((menu, index) =>

                                                        <ListItemButton sx={{ color: "font.white", py: 0 }}>
                                                            <ListItemText primary={menu.name} />
                                                        </ListItemButton>
                                                    )}
                                                </List>
                                            </Collapse>
                                        </>
                                    )}
                                </List>
                            </Collapse>
                        </List>
                        <List sx={{ color: "font.white" }} disablePadding key={6}>
                            <ListItemButton sx={{ px: 3, py: 1 }} alignItems="center" dense >
                                <Icon sx={{ color: 'font.white', mr: 2 }}>summarize</Icon>
                                <ListItemText primary="Pelaporan" sx={{ color: "font.white" }} />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {account.map((data) =>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', px: 3, mb: 3, userSelect: "none", MozUserSelect: "none" }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                                <Icon sx={{ color: 'font.white' }}>
                                    person
                                </Icon>
                                <Box sx={{ color: "font.white" }}>
                                    <Typography variant="body1" fontWeight="bold">
                                        {data.name}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        {data.NIP}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        {data.position}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ px: 2, py: 1, backgroundColor: data.status === "Online" ? "success.main" : "error.main", color: 'font.white', borderRadius: "8px" }}>
                                {data.status}
                            </Box>
                        </Box>)}

                    <Box sx={{ borderTop: 1, borderColor: "font.white" }}>
                        <ListItemButton sx={{ px: 3, py: 2 }} alignItems="center" dense>
                            <Icon sx={{ color: 'font.white', mr: 2 }}>logout</Icon>
                            <ListItemText primary="Logout" sx={{ color: "font.white" }} />
                        </ListItemButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar;