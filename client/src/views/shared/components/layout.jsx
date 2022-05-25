import React from "react";
import { Box, Container } from "@mui/material";

import Sidebar from "./sidebar";

const Layout = (props) => {
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
                {props.children}
            </Box>
        </Container>
    )
}

export default Layout;