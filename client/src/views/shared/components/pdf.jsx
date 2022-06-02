import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import ReactDOMServer from 'react-dom/server'
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import React from "react";

const PDF =
    <React.Fragment>
        <Box sx={{ width: '100vw' }}><Typography fontSize={1} textAlign="center">Kartu Inventaris Barang</Typography></Box>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>NO</TableCell>
                    <TableCell>Kode Barang</TableCell>
                    <TableCell>Jenis Barang/Nama Barang</TableCell>
                    <TableCell>Nomor Register</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>A002V3CAX</TableCell>
                    <TableCell>Inventaris</TableCell>
                    <TableCell>1</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>A002V3CAX</TableCell>
                    <TableCell>Inventaris</TableCell>
                    <TableCell>1</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>A002V3CAX</TableCell>
                    <TableCell>Inventaris</TableCell>
                    <TableCell>1</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>A002V3CAX</TableCell>
                    <TableCell>Inventaris</TableCell>
                    <TableCell>1</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>A002V3CAX</TableCell>
                    <TableCell>Inventaris</TableCell>
                    <TableCell>1</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </React.Fragment>

const createPDF = () => {


    const save = () => {
        const doc = new jsPDF({
            orientation: 'landscape',
            size: "A4",
        });
        doc.setFontSize(10)

        doc.text("Kartu Inventaris Barang", 0 ,0)
        // doc.html(ReactDOMServer.renderToStaticMarkup(PDF), { callback: function (doc) { doc.save("tesstt.pdf") } })
        doc.save();
    }
    return (
        <Button variant="contained" onClick={save}>HELLO</Button>
    )
}

export default createPDF;