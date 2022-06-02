import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, FormControl, TextField, Typography } from '@mui/material';

import Button from '../../shared/components/button';

import {
    useNavigate,
    useLocation,
} from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        localStorage.removeItem('user');
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8081/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: user,
                    password: password
                }),
                withCredentials: true
            })
                .then(response => response.json())
                .then(data => {
                    const role = data.data.user.user_role;
                    setAuth({ user, password, role });
                    localStorage.setItem("user", JSON.stringify({ user, password, role }));
                })
            setPassword('');
            setUser('');
            localStorage.getItem('user').role === "Pengguna_barang" ? navigate("/pengguna", { replace: true }) : navigate(from, { replace: true })

        }
        catch (err) {
            console.error(err);
        }
    };
    return (
        <Container maxWidth="100vw" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "background.png" + ")", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                    <FormControl onSubmit={handleLogin}>
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
                                        error={user.length === 0}
                                        margin="normal"
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="username"
                                        autoFocus
                                        variant='filled'
                                        sx={{ height: "56px", width: "330px" }}
                                        onChange={(event) => { setUser(event.target.value) }}
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
                                        type="password"
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
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ alignItems: "right", display: "flex", flexDirection: "row", width: "100%", justifyContent: "end" }}>
                                <Box onSubmit={handleLogin}>
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
};


export default Login;