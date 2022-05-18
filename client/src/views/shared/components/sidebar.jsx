import React, { useState } from "react";
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Icon from '@mui/material/Icon';

const Sidebar = () => {
    const [openPendataan, setOpenPendataan] = useState(false);

    const menu = [
        {
            icon: 'dashboard',
            text: 'Dashboard'
        },
        {
            icon: 'bar_chart',
            text: 'Pendataan'
        },
        {
            icon: 'edit_note',
            text: 'Pencatatan'
        },
        {
            icon: 'summarize',
            text: 'Pelaporan'
        }
    ]

    return (
        <Box
            sx={{
                backgroundColor: 'secondary.main',
            }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '42px',
                alignItems: 'center',
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
                    {menu.map((data) => (
                        <ListItemButton sx={{ px: 3, py: 2}} alignItems="center" dense >
                            <Icon sx={{ color: 'font.white', mr: 2 }}>{data.icon}</Icon>
                            <ListItemText primary={data.text} sx={{ color: "font.white" }} />
                        </ListItemButton>

                    ))}
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
    )
}

export default Sidebar;