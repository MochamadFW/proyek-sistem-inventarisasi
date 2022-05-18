import React, { useState } from "react";
import { Box, Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Icon from '@mui/material/Icon';

const Sidebar = () => {
    const [openPendataan, setOpenPendataan] = useState(false);

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

    return (
        <Box
            sx={{
                backgroundColor: 'secondary.main',
            }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
            }}>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '42px',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 3
                    }}>
                        <Typography variant="h4" textTransform="uppercase" fontWeight="bold" color="font.white">siinvent</Typography>
                        <Box sx={{ width: '59px', height: '51px', backgroundColor: 'secondary.darker' }}></Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        }}
                    >
                        <List sx={{ p: 0 }}>
                            <ListItemButton sx={{ px: 3, py: 2 }} alignItems="center" dense >
                                <Icon sx={{ color: 'font.white', mr: 2 }}>dashboard</Icon>
                                <ListItemText primary="Dashboard" sx={{ color: "font.white" }} />
                            </ListItemButton>
                            <ListItemButton sx={{ px: 3, py: 2 }} alignItems="center" dense >
                                <Icon sx={{ color: 'font.white', mr: 2 }}>bar_chart</Icon>
                                <ListItemText primary="Pendataan" sx={{ color: "font.white" }} />
                            </ListItemButton>
                            <ListItemButton sx={{ px: 3, py: 2 }} alignItems="center" dense >
                                <Icon sx={{ color: 'font.white', mr: 2 }}>edit_note</Icon>
                                <ListItemText primary="Pencatatan" sx={{ color: "font.white" }} />
                            </ListItemButton>
                            <ListItemButton sx={{ px: 3, py: 2 }} alignItems="center" dense >
                                <Icon sx={{ color: 'font.white', mr: 2 }}>summarize</Icon>
                                <ListItemText primary="Pelaporan" sx={{ color: "font.white" }} />
                            </ListItemButton>
                            <Collapse in={openPendataan} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                        </ListItemIcon>
                                        <ListItemText primary="Starred" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
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