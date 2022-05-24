import React, { useContext } from "react";
import { Box, Icon, Typography, TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { DateContext } from "../../../hooks/useDateContext";
import Layout from "../../shared/components/layout";
import SubmitButton from "../../shared/components/button";

import '../style/calendar.css'

const Pendataan = () => {
    const { selectedDate, setSelectedDate } = useContext(DateContext);

    return (
        <Layout>
            <Box sx={{ py: 2, px: 3, mb: 3, backgroundColor: 'font.white', textTransform: 'uppercase', }}>
                <Typography variant="h5" color="font.main" sx={{ fontWeight: 'medium' }}>siinvent</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={selectedDate}
                            onChange={(newValue) => {
                                setSelectedDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Icon sx={[{ color: 'secondary.main', mr: 2, cursor: 'pointer' }, { '&:hover': { color: 'secondary.darker' } }]}>notifications</Icon>
                </Box>
                <Box sx={{ alignSelf: 'end' }}>
                    <SubmitButton Label="Edit" />
                </Box>
            </Box>
        </Layout >
    )
}

export default Pendataan;