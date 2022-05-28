import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, FilledInput, FormControl, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const Login = () => {
    return (
        <Container maxWidth="100vw" disableGlutters
            style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "background.png" + ")", backgroundSize: 'cover', backgroundPosition: 'center' }}
        // sx={{ backgroundImage: process.env.PUBLIC_URL + "background.png" }}
        >
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Box
                    sx={{
                        width: "1202px",
                        height: "246px",
                        backgroundColor: "#3084F2",
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            mt: 5,
                            ml: 5,
                            mr: 6,
                            width: "921px"
                        }}
                    >
                        <Typography
                            component="div"
                            gutterBottom
                            sx={{
                                fontSize: 60,
                                fontWeight: 700,
                                mb: 0,
                                color: "white",
                            }}
                        >
                            SIINVENT
                        </Typography>
                        <Typography
                            variant='h5'
                            component="div"
                            gutterBottom
                            sx={{ fontWeight: 600, color: "white", }}
                        >
                            SISTEM INFORMASI INVENTARISASI ASET
                            DINAS SUMBER DAYA AIR DAN BINA MARGA KOTA BANDUNG
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            mt: 5,
                            mb: "53px",
                            mr: 5,
                            ml: 3,
                            width: "177px",
                        }}
                    >
                        <img src={process.env.PUBLIC_URL + "Lambang_Kota_Bandung_2.png"} alt="lambang_kota_bandung" />
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "1202px",
                        height: "329px",
                        backgroundColor: '#F7F7F7',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" noValidate sx={{ width: "534px" }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            mt: 6
                        }}>
                            <Typography
                                variant='h5'
                                component="div"
                                gutterBottom
                                sx={{
                                    mt: 2,
                                    fontWeight: 600,
                                }}
                            >
                                Username
                            </Typography>
                            <Box sx={{
                                alignItems: "right",
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                justifyContent: "end"
                            }}>
                                <TextField
                                    
                                    margin="normal"
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    variant='filled'
                                    sx={{ height: "56px", width: "330px" }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Typography
                                variant='h5'
                                component="div"
                                gutterBottom
                                sx={{
                                    mt: 2,
                                    fontWeight: 600,
                                }}
                            >
                                Password
                            </Typography>
                            <Box sx={{
                                alignItems: "right",
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                justifyContent: "end"
                            }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Enter your password"
                                    name="password"
                                    autoComplete="password"
                                    autoFocus
                                    variant='filled'
                                    helperText="At least 8 characters"
                                    sx={{ mt: 4, height: "56px", width: "330px" }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ alignItems: "right", display: "flex", flexDirection: "row", width: "100%", justifyContent: "end" }}>
                            
                            <Button
                                variant='contained'
                                href="/"
                                sx={{
                                    backgroundColor: "#66BB6A",
                                    borderRadius: "8px", 
                                    mt: 5, mb: 6, 
                                    width: "92px", 
                                    height: "32px",
                                    '&:hover': {
                                        backgroundColor: '#66BB6A',
                                    }
                                }}
                            >
                                <Typography color="#FFFFFF">LOGIN</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Container>
    );
}

const handleClick = assync () => {
    setIsLoading(true);
    try {
        const {data} = await axios.get('', {
            headers: {
                Accept: 'application/json'
            },
        });

        console.log('data is: ', JSON.stringify(data, null, 4));
        setData(data);
    } catch (err) {
        setErr(err.message);
    } finally {
        setIsLoading
    }
};

console.log(data);

export default Login;