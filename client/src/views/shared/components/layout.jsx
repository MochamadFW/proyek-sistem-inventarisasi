import React, {useEffect} from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar";

const Layout = () => {
    return (
        <Container
            disableGutters
            maxWidth="100vw"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'primary.main',
                height: '100vh'
            }}>
            <Sidebar />
            <Box sx={{ p: 3, width: '100%', overflowY: 'auto' }}>
                <Outlet />
            </Box>
        </Container>
    )
}

export default Layout;