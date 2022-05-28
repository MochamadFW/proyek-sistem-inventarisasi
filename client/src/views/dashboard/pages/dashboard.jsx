import { Button, Typography } from "@mui/material";
import React from "react";
import Layout from "../../shared/components/layout";
import { Box } from "@mui/material";

const DashboardAdmin = () => {
    return (<Layout>
        <Box>
            <Box
                variant="h5"
                sx={{ py: 2, px: 3, backgroundColor: 'font.white', border: 1, borderColor: '#29B6F6' }}>
                <Typography variant="h5" color="font.main">SISTEM INFORMASI INVENTARISASI ASET</Typography>
            </Box>
            <Box
                sx={{ mt: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Box>
                    <img src={process.env.PUBLIC_URL + 'logo_kota_bandung.png'}></img>
                </Box>
                <Box
                    sx={{ mr: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box
                        textAlign="center"
                    >
                        <Typography variant="h5">Standar Operasional Prosedur</Typography>
                        <Typography variant="h5">Inventaris</Typography>
                        <Button variant="contained"
                            onClick={() => {
                                alert('clicked')
                            }}
                            sx={{ mt: 2, backgroundColor: "#F2D424" }}>Lihat Selengkapnya</Button>
                    </Box>
                    <Box
                        textAlign="center"
                        sx={{ mt: 5 }}>
                        <Typography variant="h5">Standar Operasional Prosedur</Typography>
                        <Typography variant="h5">Mutasi Aset</Typography>
                        <Button variant="contained"
                            onClick={() => {
                                alert('clicked')
                            }}
                            sx={{ mt: 2, backgroundColor: "#F2D424" }}>Lihat Selengkapnya</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box
                    width="327px"
                    height="158px"
                    sx={{ backgroundColor: "#FFA726", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <Box sx={{ ml: 3, display: 'flex', flexDirection: 'row' }}>
                        <Box sx={{ my: 'auto' }}><img src={process.env.PUBLIC_URL + 'logo_total_aset.png'}></img></Box>
                        <Box textAlign="center" sx={{ ml: 10 }}>
                            <Typography variant="subtitle2">TOTAL ASET</Typography>
                            <Typography variant="h3">25</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    width="327px"
                    height="158px"
                    sx={{ backgroundColor: "#FFA726", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <Box sx={{ ml: 3, display: 'flex', flexDirection: 'row' }}>
                        <Box sx={{ my: 'auto' }}><img src={process.env.PUBLIC_URL + 'logo_total_permintaan.png'}></img></Box>
                        <Box textAlign="center" sx={{ ml: 5 }}>
                            <Typography variant="subtitle2">TOTAL PERMINTAAN</Typography>
                            <Typography variant="subtitle2">PERBAIKAN/PEMELIHARAAN</Typography>
                            <Typography variant="h3">25</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    width="327px"
                    height="158px"
                    sx={{ backgroundColor: "#FFA726", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <Box sx={{ ml: 3, display: 'flex', flexDirection: 'row' }}>
                        <Box sx={{ my: 'auto' }}><img src={process.env.PUBLIC_URL + 'total_login.png'}></img></Box>
                        <Box textAlign="center" sx={{ ml: 10 }}>
                            <Typography variant="subtitle2">TOTAL LOGIN</Typography>
                            <Typography variant="h3">25</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box textAlign="end"
                sx={{ mr: 3, mt: 8 }}
            >
                <Typography variant="h5">DINAS SUMBER DAYA AIR DAN BINA MARGA KOTA BANDUNG</Typography>
            </Box>
        </Box>
    </Layout>)
}

export default DashboardAdmin;
