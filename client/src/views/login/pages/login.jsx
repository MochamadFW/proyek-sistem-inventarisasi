import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, FormControl, TextField, Typography } from '@mui/material';

import Button from '../../shared/components/button';

import {
    Navigate,
    Link,
    Routes,
    Route,
    useNavigate,
    useLocation,
} from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const from = location.state?.from?.pathname || "/";

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const password = formData.get("password")

        auth.signin(username, () => {
            navigate(from, { replace: true });
        });
    }

    const handleLogin = () => {
        console.log()
    }
    return (
        <Container maxWidth="100vw" disableGlutters style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "background.png" + ")", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                    <FormControl>
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
                                        variant='filled'
                                        helperText="At least 8 characters"
                                        sx={{ mt: 4, height: "56px", width: "330px" }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ alignItems: "right", display: "flex", flexDirection: "row", width: "100%", justifyContent: "end" }}>
                                <Box onClick={handleLogin}>
                                    <Button
                                        Label="Login"
                                        Types="submit"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </FormControl>
                </Box>
            </Grid>
        </Container>
    );
}


export default Login;