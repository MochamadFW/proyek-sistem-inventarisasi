import React, { useContext, useEffect, useState } from "react";
import {
    Box,
    Collapse,
    FormControl,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    MenuItem,
    Typography,
    TextField,
    Select
} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate, useLocation } from "react-router-dom";
import Icon from '@mui/material/Icon';
import "../style/scrollbar.css"
import { DateContext } from "../../../hooks/useDateContext";
import AuthContext from "../../../context/AuthProvider";
import useAuth from "../../../hooks/useAuth";

const Sidebar = () => {
    const { selectedDate, setSelectedDate } = useContext(DateContext);
    const navigate = useNavigate();
    let currentPath = useLocation();
    const [openPendataanCollapse, setOpenPendataanCollapse] = useState(false);
    useEffect(() => {
        if (currentPath.pathname === "/pendataan") { setOpenPendataanCollapse(true) }
        else if (currentPath.pathname === "/pelaporan/mutasi") { setOpenFormPerbaikanCollapse(true) }
        else { setOpenPendataanCollapse(false) }
    }, [currentPath]);
    const [openPencatatanCollapse, setOpenPencatatancollapse] = useState(false);
    const [openSubPencatatanCollapse, setOpenSubPencatatancollapse] = useState({});
    const handleClickSubPencatatan = (e) => {
        setOpenSubPencatatancollapse({ [e]: !openSubPencatatanCollapse[e] })
    };
    const [openPelaporanCollapse, setOpenPelaporanCollapse] = useState(false);
    const [openFormPerbaikanCollapse, setOpenFormPerbaikanCollapse] = useState(false);
    const account = [
        {
            name: 'Siti Mulyani',
            NIP: '197101231994032004',
            position: 'Kepala Sub Bagian Umpegdatin',
            status: 'Online',
            id: 'sitimulyani'
        },
        {
            name: 'Arin Setiawan',
            NIP: '197306092008011004',
            position: 'Pengurus Barang Pengguna',
            status: 'Offline',
            id: 'arinsetiawan'
        }
    ]

    const subMenuPencatatan = [
        {
            id: 1,
            name: 'Kartu Inventaris Barang (KIB)',
            menu: [
                { id: 1, name: 'KIB (A)', link: '#' },
                { id: 2, name: 'KIB (B)', link: '/pencatatan/kib/b' },
                { id: 3, name: 'KIB (C)', link: '#' },
                { id: 4, name: 'KIB (D)', link: '#' },
                { id: 5, name: 'KIB (E)', link: '#' },
                { id: 6, name: 'KIB (F)', link: '#' }
            ]
        },
        {
            id: 2,
            name: 'Kartu Inventaris Ruangan (KIR)',
            menu: [
                { id: 1, name: 'R. Kepala Dinas', link: '/pencatatan/kir/ruang-kepala-dinas' },
                { id: 2, name: 'R. Sekretaris Dinas', link: '#' },
                { id: 3, name: 'R. Kasubag Umpegdatin', link: '#' },
                { id: 4, name: 'R. Staff Umum', link: '/pencatatan/kir/staff-umum' },
                { id: 5, name: 'R. Kasubag Keuangan', link: '#' },
                { id: 6, name: 'R. Keuangan I', link: '#' },
            ]
        }
    ];
    const subMenuPelaporan = [
        { id: 1, name: 'Mutasi Barang', link: '/pelaporan/mutasi-aset' },
        { id: 2, name: 'Buku Inventaris Barang', link: '/pelaporan/buku-inventaris-barang' }
    ];

    const { auth } = useAuth();
    const [isAdmin, setIsAdmin] = useState(JSON.parse(auth?.role === "pengurus_barang"));
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const { setAuth } = useContext(AuthContext);
    const logout = async () => {
        setAuth({});
        localStorage.removeItem("user")
        navigate('/login')
    }
    const loggedin = JSON.parse(localStorage.getItem('user'));
    const loggedInAccount = account.filter(function (el) { return el.id === loggedin.user });
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
                        <Box><img src={process.env.PUBLIC_URL + "/Image/Lambang_Kota_Bandung.svg"} alt="Logo Kota Bandung" loading="lazy" height="auto" width="59px" /></Box>
                    </Box>
                    <Box
                        className="menu"
                        component="div"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'scroll',
                        }}
                    >{isAdmin ?
                        <React.Fragment>
                            <List sx={{ color: "font.white" }} disablePadding>
                                <ListItemButton key={1} sx={{ px: 3, py: 1 }} alignItems="center" onClick={() => { navigate('/') }}>
                                    <Icon sx={{ color: 'font.white', mr: 2 }}>dashboard</Icon>
                                    <ListItemText primary="Dashboard" />
                                </ListItemButton>
                            </List>
                            <List sx={{ color: "font.white" }} disablePadding>
                                <ListItemButton key={2} sx={{ px: 3, py: 1 }} alignItems="center" onClick={() => { navigate('/pendataan') }}>
                                    <Icon sx={{ color: 'font.white', mr: 2 }}>bar_chart</Icon>
                                    <ListItemText primary="Pendataan" />
                                </ListItemButton>
                                <Collapse in={openPendataanCollapse} component="li" timeout="auto" unmountOnExit>
                                    <List disablePadding sx={{ color: 'font.white', pl: 8 }}>
                                        <ListItem key={"asd3"} sx={{ gap: '1rem', p: 0, mb: 2 }}>
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
                                        <ListItem key={"asd4"} sx={{ gap: '1rem', p: 0 }}>
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
                            <List sx={{ color: "font.white" }} disablePadding>
                                <ListItemButton key={5} sx={{ px: 3, py: 1 }} alignItems="center" onClick={() => setOpenPencatatancollapse(!openPencatatanCollapse)}>
                                    <Icon sx={{ color: 'font.white', mr: 2 }}>edit_note</Icon>
                                    <ListItemText primary="Pencatatan" />
                                </ListItemButton>
                                <Collapse in={openPencatatanCollapse} component="li" timeout="auto" unmountOnExit sx={{ backgroundColor: 'secondary.darker', ml: 3, p: 1, borderRadius: '4px' }}>
                                    <List disablePadding>
                                        {subMenuPencatatan.map((data, index) =>
                                            <React.Fragment key={index}>
                                                <ListItemButton key={index} sx={{ p: 1 }} onClick={() => handleClickSubPencatatan(data.name)}>
                                                    <Typography variant="body1" fontWeight={700}>{data.name}</Typography>
                                                    <Icon>{openSubPencatatanCollapse[data.name] ? 'expand_less' : 'expand_more'}</Icon>
                                                </ListItemButton>
                                                <Collapse in={openSubPencatatanCollapse[data.name]} component="li" timeout="auto" unmountOnExit>
                                                    <List key={index + `a`} sx={{ py: 0 }} disablePadding>
                                                        {data.menu.map((menu, index) =>

                                                            <ListItemButton key={index} sx={{ color: "font.white", py: 0 }} onClick={() => { navigate(menu.link) }}>
                                                                <Typography variant="body1" marginY={1}>{menu.name}</Typography>
                                                            </ListItemButton>
                                                        )}
                                                    </List>
                                                </Collapse>
                                            </React.Fragment>
                                        )}
                                    </List>
                                </Collapse>
                            </List>
                            <List sx={{ color: "font.white" }} disablePadding key={6}>
                                <ListItemButton key={88} sx={{ px: 3, py: 1 }} alignItems="center" dense onClick={() => setOpenPelaporanCollapse(!openPelaporanCollapse)}>
                                    <Icon sx={{ color: 'font.white', mr: 2 }}>summarize</Icon>
                                    <ListItemText primary="Pelaporan" sx={{ color: "font.white" }} />
                                </ListItemButton>
                                <Collapse in={openPelaporanCollapse} component="li" timeout="auto" unmountOnExit sx={{ backgroundColor: 'secondary.darker', ml: 3, p: 1, borderRadius: '4px' }}>
                                    {subMenuPelaporan.map((data, index) =>
                                        <ListItemButton key={index} sx={{ p: 1 }} onClick={() => { navigate(data.link) }}>
                                            <Typography variant="body1" fontWeight={700}>{data.name}</Typography>
                                        </ListItemButton>
                                    )}
                                </Collapse>
                            </List>
                        </React.Fragment> :
                        <React.Fragment>
                            <List sx={{ color: "font.white" }} disablePadding>
                                <ListItemButton key={1} sx={{ px: 3, py: 1 }} alignItems="center" onClick={() => { setOpenFormPerbaikanCollapse(true); navigate('/pengguna') }}>
                                    <Icon sx={{ color: 'font.white', mr: 2 }}>edit_note</Icon>
                                    <ListItemText primary="Form Perbaikan" />
                                </ListItemButton>
                                <Collapse in={openFormPerbaikanCollapse}>
                                    <ListItem sx={{ px: 3, py: 1 }}>
                                        <Icon sx={{ color: 'font.white', mr: 2 }} />
                                        <Typography variant="body1" marginRight={2}>Ruangan</Typography>
                                        <FormControl variant="filled" fullWidth>
                                            <Select
                                                sx={{ width: '200px' }}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}>
                                                <MenuItem value={10}>R. Kepala Dinas</MenuItem>
                                                <MenuItem value={20}>R. Sekretaris Dinas</MenuItem>
                                                <MenuItem value={30}>R. Kasubag Umpegdatin</MenuItem>
                                                <MenuItem value={40}>R. Staff Umum</MenuItem>
                                                <MenuItem value={50}>R. Kasubag Keuangan</MenuItem>
                                                <MenuItem value={60}>R. Keuangan I</MenuItem>
                                                <MenuItem value={70}>R. Keuangan II</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </ListItem>
                                </Collapse>
                            </List>
                            <List sx={{ color: "font.white" }} disablePadding>
                                <ListItemButton key={1} sx={{ px: 3, py: 1 }} alignItems="center" onClick={() => { navigate('/pengguna/kib') }}>
                                    <Icon sx={{ color: 'font.white', mr: 2 }}>credit_card</Icon>
                                    <ListItemText primary="Kartu Inventaris Barang" />
                                </ListItemButton>
                            </List>
                            <List sx={{ color: "font.white" }} disablePadding>
                                <ListItemButton key={1} sx={{ px: 3, py: 1 }} alignItems="center" onClick={() => { navigate('/pengguna/kir') }}>
                                    <Icon sx={{ color: 'font.white', mr: 2 }}>style</Icon>
                                    <ListItemText primary="Kartu Inventaris Ruangan" />
                                </ListItemButton>
                            </List>
                        </React.Fragment>
                        }
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {account.map((data) =>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 2, px: 3, mb: 2, userSelect: "none", MozUserSelect: "none" }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                                <Icon sx={{ color: 'font.gray' }}>
                                    person
                                </Icon>
                                <Box sx={{ color: "font.gray" }}>
                                    <Typography fontWeight="black" variant="subtitle1">
                                        {data.name}
                                    </Typography>
                                    <Typography fontSize="8pt" variant="subtitle2">
                                        {data.NIP}
                                    </Typography>
                                    <Typography fontSize="8pt" variant="subtitle2">
                                        {data.position}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ px: 2, py: 1, backgroundColor: loggedInAccount.length > 0 ? loggedInAccount[0].name === data.name ? "success.main" : "error.main" : "error.main", color: 'font.white', borderRadius: "8px" }}>
                                {loggedInAccount.length > 0 ? loggedInAccount[0].name === data.name ? "Online" : "Offline" : "Offline"}
                            </Box>
                        </Box>)}

                    <Box sx={{ borderTop: 1, borderColor: "font.white" }}>
                        <ListItemButton sx={{ px: 3, py: 2 }} alignItems="center" dense onClick={logout}>
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