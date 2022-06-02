import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";

import Button from "../../shared/components/button"
import Layout from "../../shared/components/layout";

const ChildModal = ({ url }) => {
    const [openDetailSOPInventaris, setDetailOpenSOPInventaris] = useState(false);
    const handleOpenDetailSOPInventaris = () => {
        setDetailOpenSOPInventaris(!openDetailSOPInventaris);
    }
    const handleCloseDetailSOPInventaris = () => {
        setDetailOpenSOPInventaris(false);
    }
    return (
        <React.Fragment>
            <Box onClick={handleOpenDetailSOPInventaris}><Button Label="Lihat Selengkapnya" /></Box>
            <Modal
                open={openDetailSOPInventaris}
                onClose={handleCloseDetailSOPInventaris}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 8, overflowY: 'scroll' }}>

                <img src={url} style={{maxWidth:'80%', height:'auto' }}/>
            </Modal>
        </React.Fragment>
    )
}

const DashboardAdmin = () => {
    const [openSOPInventaris, setOpenSOPInventaris] = useState(false);
    const handleOpenSOPInventaris = () => {
        setOpenSOPInventaris(!openSOPInventaris);
    }
    const handleCloseSOPInventaris = () => {
        setOpenSOPInventaris(false);
    }
    const [openSOPMutasi, setOpenSOPMutasi] = useState(false);
    const handleOpenSOPMutasi = () => {
        setOpenSOPMutasi(!openSOPMutasi);
    }
    const handleCloseSOPMutasi = () => {
        setOpenSOPMutasi(false);
    }
    return (
        <React.Fragment>
            <Box>
                <Box
                    variant="h5"
                    sx={{ py: 2, px: 3, backgroundColor: 'font.white', border: 1, borderColor: '#29B6F6' }}>
                    <Typography variant="h5" color="font.main">SISTEM INFORMASI INVENTARISASI ASET</Typography>
                </Box>
                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Box>
                        <img src={process.env.PUBLIC_URL + '/Image/Lambang_Kota_Bandung.svg'}></img>
                    </Box>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
                        <Box textAlign="center" sx={{ backgroundColor: 'white', p: 2 }}>
                            <Typography variant="h5">Standar Operasional Prosedur <br />Inventaris</Typography>
                            <Box onClick={handleOpenSOPInventaris} sx={{ mt: 2 }}>
                                <Button Label="Lihat Selengkapnya" />
                            </Box>
                        </Box>
                        <Box
                            textAlign="center" sx={{ backgroundColor: 'white', p: 2 }}>
                            <Typography variant="h5">Standar Operasional Prosedur <br />Mutasi Aset</Typography>
                            <Box onClick={handleOpenSOPMutasi} sx={{ mt: 2 }}><Button Label="Lihat Selengkapnya" /></Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
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
            <Modal
                open={openSOPInventaris}
                onClose={handleCloseSOPInventaris}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 8 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                    <img src={process.env.PUBLIC_URL + '/Image/Cover_SOP_INVENT.png'} loading="lazy" style={{ height: "512px", width: "638px" }} />
                    <ChildModal url={process.env.PUBLIC_URL + '/Image/Detail_SOP_INVENT.png'} />
                </Box>
            </Modal>
            <Modal
                open={openSOPMutasi}
                onClose={handleCloseSOPMutasi}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 8 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                    <img src={process.env.PUBLIC_URL + '/Image/Cover_SOP_MUTASI.png'} loading="lazy" style={{ height: "512px", width: "638px" }} />
                    <ChildModal url={process.env.PUBLIC_URL + '/Image/Detail_SOP_MUTASI.png'} />
                </Box>
            </Modal>

        </React.Fragment>
    )
}

export default DashboardAdmin;
