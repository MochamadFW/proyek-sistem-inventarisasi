import { Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "../../shared/components/layout";
import { Box } from "@mui/material";
import { Container, height } from "@mui/system";

const Dashboard = () => {
    return (<Layout>
        <Box sx={{ py:2, px:3, backgroundColor: 'font.white'}}>
            <Typography variant="h5" color="font.main">siinvent</Typography>
        </Box>
    </Layout>)
}

export default Dashboard;