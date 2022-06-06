import React from "react";
import { Box, Button } from "@mui/material";
import { Page, Document, Image, StyleSheet, Text, View, PDFViewer } from '@react-pdf/renderer';
import { useLocation } from "react-router-dom";

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    reportTitle: {
        fontSize: 14,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    description: {
        fontSize: 8,
        fontWeight: '700',
        textTransform: "uppercase"
    },
    tableHead: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        fontSize: 8,
        border: '1 solid #000000'
    },
    tableCell: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        padding: 3
    }
});

const Title = ({ title }) => {
    return (<Text style={[styles.reportTitle, { marginBottom: 20 }]}>{title}</Text>)
};

const array = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",]

const AuthoritySignature = () => {
    return (
        <View style={{ paddingHorizontal: 48, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View wrap={false} style={{ fontSize: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Text>Mengetahui:</Text>
                <Text>Kepala Sub Bagian Umpegdatin</Text>
                <Text>Selaku</Text>
                <Text style={{ marginBottom: 50 }}>Pejabat Penatausahaan Pengguna Barang</Text>
                <Text>Siti Mulyani, S.ST.MAP</Text>
                <Text>NIP. 197101231994032004</Text>
            </View>
            <View wrap={false} style={{ fontSize: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ marginBottom: 20 }}>Bandung,   ............................ 2022</Text>
                <Text style={{ marginBottom: 50 }}>Pengurus Barang</Text>
                <Text>Arin Setiawan, S.IP</Text>
                <Text>NIP. 197306092008011004</Text>
            </View>
        </View>
    )
}

const AuthoritySignatureVerTwo = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View wrap={false} style={{ paddingHorizontal: 48, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ fontSize: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Text>Kepala Sub Bagian Umpegdatin</Text>
                    <Text style={{ marginBottom: 50 }}>Pejabat Penatausahaan Pengguna Barang</Text>
                    <Text>Siti Mulyani, S.ST.MAP</Text>
                    <Text>NIP. 197101231994032004</Text>
                </View>
                <View style={{ fontSize: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ marginBottom: 20 }}>Bandung,  ............................ 2022</Text>
                    <Text style={{ marginBottom: 50 }}>Pengurus Barang</Text>
                    <Text>Arin Setiawan, S.IP</Text>
                    <Text>NIP. 197306092008011004</Text>
                </View>
            </View>
            <View wrap={false} style={{ fontSize: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center' }}>
                <Text>Mengetahui:</Text>
                <Text>Kepala Dinas Pekerjaan Umum</Text>
                <Text>Selaku</Text>
                <Text style={{ marginBottom: 50 }}>Pengguna barang</Text>
                <Text>Ir. DIDI RUSWANDI, MT</Text>
                <Text>Pembina Utama Muda</Text>
                <Text>NIP. 196807101995031002</Text>
            </View>
        </View>
    )
}

const KIR = ({ data }) => {
    return (
        <React.Fragment>
            <Title title="Kartu Inventaris Ruangan" />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', marginRight: 12 }}>
                        <Text style={styles.description}>KAB/KOTA</Text>
                        <Text style={styles.description}>Provinsi</Text>
                        <Text style={styles.description}>unit</Text>
                        <Text style={styles.description}>Satuan Kerja</Text>
                        <Text style={styles.description}>Ruangan</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={styles.description}>: Bandung</Text>
                        <Text style={styles.description}>: Jawa barat</Text>
                        <Text style={styles.description}>: Dinas sumber daya dan bina marga kota bandung</Text>
                        <Text style={styles.description}>: Dinas sumber daya dan bina marga kota bandung</Text>
                        <Text style={styles.description}>: kepala dinas pekerjaan umum</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', marginRight: 12 }}>
                        <Text style={styles.description}>Luas Lantai</Text>
                        <Text style={styles.description}>Nomor kode lokasi</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={styles.description}>: 63m2</Text>
                        <Text style={styles.description}>: 12.10.17.05.01.2012.01.00.01</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.tableHead]}>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>No. Urut</Text></View>
                <View style={[{ width: '10%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Nama Barang/<br />Jenis Barang</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Merk/<br />Model</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>No. Seri Pabrik</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Ukuran</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Bahan</Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Tahun Pembuatan/Pembelian</Text></View>
                <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Nomor Kode Barang</Text></View>
                <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Jumlah Barang/Register(X)</Text></View>
                <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Harga Beli/<br />Perolehan</Text></View>
                <View style={{ width: '15%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ padding: 3, textAlign: 'center' }}>Kondisi Barang</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[{ width: "33%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Baik(B)</Text></View>
                        <View style={[{ width: "34%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Kurang Baik(KB)</Text></View>
                        <View style={[{ width: "33%", borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Rusak Berat(RB)</Text></View>
                    </View>
                </View>
                <View style={[{ width: "10%", borderLeft: '1 solid #000000' }, styles.tableCell]}><Text>Keterangan Mutasi</Text></View>
            </View >
            <View style={[styles.tableHead]}>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>1</Text></View>
                <View style={[{ width: '10%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>2</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>3</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>4</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>5</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>6</Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>7</Text></View>
                <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>8</Text></View>
                <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>9</Text></View>
                <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>10</Text></View>
                <View style={{ width: '15%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[{ width: "33%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>11</Text></View>
                        <View style={[{ width: "34%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>12</Text></View>
                        <View style={[{ width: "33%" }, styles.tableCell]}><Text>13</Text></View>
                    </View>
                </View>
                <View style={[{ width: "10%", borderLeft: '1 solid #000000' }, styles.tableCell]}><Text>14</Text></View>
            </View>
            {array.map((data, index) =>
                <View style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: 8,
                    borderRight: '1 solid #000000',
                    borderLeft: '1 solid #000000',
                    borderBottom: '1 solid #000000'
                }}>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{index}</Text></View>
                    <View style={[{ width: '10%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>2</Text></View>
                    <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>3</Text></View>
                    <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>4</Text></View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>5</Text></View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>6</Text></View>
                    <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>7</Text></View>
                    <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>8</Text></View>
                    <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>9</Text></View>
                    <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>10</Text></View>
                    <View style={{ width: '15%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={[{ width: "33%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>11</Text></View>
                            <View style={[{ width: "34%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>12</Text></View>
                            <View style={[{ width: "33%" }, styles.tableCell]}><Text>13</Text></View>
                        </View>
                    </View>
                    <View style={[{ width: "10%", borderLeft: '1 solid #000000' }, styles.tableCell]}><Text>14</Text></View>
                </View>
            )}
            <View style={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'row',
                fontSize: 8,
                borderRight: '1 solid #000000',
                borderLeft: '1 solid #000000',
                borderBottom: '1 solid #000000',
                marginBottom: 20
            }}>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                <View style={[{ width: '10%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Jumlah</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                <View style={[{ width: '9%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                <View style={{ width: '15%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[{ width: "33%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                        <View style={[{ width: "34%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
                        <View style={[{ width: "33%" }, styles.tableCell]}><Text> </Text></View>
                    </View>
                </View>
                <View style={[{ width: "10%", borderLeft: '1 solid #000000' }, styles.tableCell]}><Text> </Text></View>
            </View>
            <AuthoritySignature />
        </React.Fragment >
    )
};

const KIB = ({ data }) => {
    const dataKIB = data;
    return (
        <React.Fragment>
            <Title title="Kartu Inventaris Barang" />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', marginRight: 12 }}>
                        <Text style={styles.description}>KAB/KOTA</Text>
                        <Text style={styles.description}>Provinsi</Text>
                        <Text style={styles.description}>unit</Text>
                        <Text style={styles.description}>Satuan Kerja</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={styles.description}>: Bandung</Text>
                        <Text style={styles.description}>: Jawa barat</Text>
                        <Text style={styles.description}>: Dinas sumber daya dan bina marga kota bandung</Text>
                        <Text style={styles.description}>: Dinas sumber daya dan bina marga kota bandung</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.tableHead]}>
                <View style={[{ width: '3%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>No</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Kode Barang</Text></View>
                <View style={[{ width: '10%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Jenis Barang/<br />Nama Barang</Text></View>
                <View style={[{ width: '10%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Nomor Register</Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Merk/<br /> Type</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Ukuran/<br />CC</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Bahan</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Tahun Pembelian</Text></View>
                <View style={{ width: '33%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ padding: 3, textAlign: 'center' }}>Nomor</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[{ width: "20%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Pabrik</Text></View>
                        <View style={[{ width: "20%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Rangka</Text></View>
                        <View style={[{ width: "20%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Mesin</Text></View>
                        <View style={[{ width: "20%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Polisi</Text></View>
                        <View style={[{ width: "20%", borderTop: '1 solid #000000' }, styles.tableCell]}><Text>BPKB</Text></View>
                    </View>
                </View>
                <View style={[{ width: "7%", borderLeft: '1 solid #000000' }, styles.tableCell]}><Text>Asal Usul</Text></View>
                <View style={[{ width: "7%", borderLeft: '1 solid #000000' }, styles.tableCell]}><Text>Harga(Rp)</Text></View>
            </View >
            <View style={[styles.tableHead]}>
                <View style={[{ width: '3%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>1</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>2</Text></View>
                <View style={[{ width: '10%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>3</Text></View>
                <View style={[{ width: '10%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>4</Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>5</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>6</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>7</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>8</Text></View>
                <View style={{ width: '33%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[{ width: "20%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>9</Text></View>
                        <View style={[{ width: "20%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>10</Text></View>
                        <View style={[{ width: "20%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>11</Text></View>
                        <View style={[{ width: "20%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>12</Text></View>
                        <View style={[{ width: "20%" }, styles.tableCell]}><Text>13</Text></View>
                    </View>
                </View>
                <View style={[{ width: "7%", borderLeft: '1 solid #000000' }, styles.tableCell]}><Text>14</Text></View>
                <View style={[{ width: "7%", borderLeft: '1 solid #000000' }, styles.tableCell]}><Text>15</Text></View>
            </View>
            {dataKIB.map((data, index) =>
                <View style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: 8,
                    borderRight: '1 solid #000000',
                    borderLeft: '1 solid #000000',
                    borderBottom: '1 solid #000000'
                }}
                    key={data.id}
                >
                    <View style={[{ width: '3%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{index + 1}</Text></View>
                    <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.kode_barang}</Text></View>
                    <View style={[{ width: '10%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.nama_barang}</Text></View>
                    <View style={[{ width: '10%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.nomor_register}</Text></View>
                    <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.tipe_barang}</Text></View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.ukuran_barang}</Text></View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.bahan_barang}</Text></View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.tahun_pembelian}</Text></View>
                    <View style={{ width: '33%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={[{ width: "20%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.nomor_pabrik}</Text></View>
                            <View style={[{ width: "20%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.nomor_rangka}</Text></View>
                            <View style={[{ width: "20%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.nomor_mesin}</Text></View>
                            <View style={[{ width: "20%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.nomor_polisi}</Text></View>
                            <View style={[{ width: "20%" }, styles.tableCell]}><Text>{data.nomor_bpkb}</Text></View>
                        </View>
                    </View>
                    <View style={[{ width: "7%", borderLeft: '1 solid #000000' }, styles.tableCell]}><Text>{data.asal_usul}</Text></View>
                    <View style={[{ width: "7%", borderLeft: '1 solid #000000' }, styles.tableCell]}><Text>{data.harga_barang}</Text></View>
                </View>
            )}
            <View style={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'row',
                fontSize: 8,
                borderRight: '1 solid #000000',
                borderLeft: '1 solid #000000',
                borderBottom: '1 solid #000000',
                marginBottom: 20
            }}>
                <View style={[{ width: '79%', borderRight: '1 solid #000000' }, styles.tableCell]}></View>
                <View style={[{ width: '7%' }, styles.tableCell]}><Text>Jumlah</Text></View>
                <View style={[{ width: "7%", borderLeft: '1 solid #000000' }, styles.tableCell]}></View>
                <View style={[{ width: "7%", borderLeft: '1 solid #000000' }, styles.tableCell]}></View>
            </View>
            <AuthoritySignature />
        </React.Fragment >
    )
};

const Mutasi = ({ data }) => {
    return (
        <React.Fragment>
            <Title title="Laporan Mutasi Barang" />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', marginRight: 12 }}>
                        <Text style={styles.description}>KAB/KOTA</Text>
                        <Text style={styles.description}>Provinsi</Text>
                        <Text style={styles.description}>Satuan Kerja</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={styles.description}>: Bandung</Text>
                        <Text style={styles.description}>: Jawa barat</Text>
                        <Text style={styles.description}>: Dinas sumber daya dan bina marga kota bandung</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', marginRight: 75 }}>
                        <Text style={styles.description}>Kode Lokasi</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.tableHead]}>
                <View style={{ width: '25%', display: "flex", flexDirection: 'column', alignItems: 'center', borderRight: '1 solid #000000' }}>
                    <Text style={{ padding: 3, textAlign: 'center' }}>Nomor</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[{ width: "16%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>No</Text></View>
                        <View style={[{ width: "42%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Kode Barang</Text></View>
                        <View style={[{ width: "42%", borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Register</Text></View>
                    </View>
                </View>
                <View style={{ width: '30%', display: "flex", flexDirection: 'column', alignItems: 'center', borderRight: '1 solid #000000' }}>
                    <Text style={{ padding: 3, textAlign: 'center' }}>Spesifikasi Barang</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[{ width: "25%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Jenis Barang/<br />Nama Barang</Text></View>
                        <View style={[{ width: "25%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Merk</Text></View>
                        <View style={[{ width: "25%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>No. Seri Pabrik</Text></View>
                        <View style={[{ width: "25%", borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Bahan</Text></View>
                    </View>
                </View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Asal Usul</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Tahun Perolehan</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Satuan</Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Kondisi<br />(B,KB,RB)</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Jumlah Barang</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Harga(Rp)</Text></View>
                <View style={[{ width: "10%" }, styles.tableCell]}><Text>Keterangan</Text></View>
            </View >
            {array.map((data, index) =>
                <View style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: 8,
                    borderRight: '1 solid #000000',
                    borderLeft: '1 solid #000000',
                    borderBottom: '1 solid #000000'
                }}>
                    <View style={{ width: '25%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={[{ width: "16%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>9</Text></View>
                            <View style={[{ width: "42%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>10</Text></View>
                            <View style={[{ width: "42%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>13</Text></View>
                        </View>
                    </View>
                    <View style={{ width: '30%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={[{ width: "25%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>9</Text></View>
                            <View style={[{ width: "25%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>10</Text></View>
                            <View style={[{ width: "25%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>11</Text></View>
                            <View style={[{ width: "25%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>13</Text></View>
                        </View>
                    </View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{index + 1}</Text></View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>2</Text></View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>3</Text></View>
                    <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>4</Text></View>
                    <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>5</Text></View>
                    <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>6</Text></View>
                    <View style={[{ width: "10%" }, styles.tableCell]}><Text>15</Text></View>
                </View>
            )}
            <AuthoritySignatureVerTwo />
        </React.Fragment >
    )
};

const BukuInventarisBarang = ({ data }) => {
    const dataBIB = data;
    const toCurrency = Intl.NumberFormat('en-US');
    return (
        <React.Fragment>
            <Title title={`Buku Inventaris Barang\nPer  ............................2022`} />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', marginRight: 12 }}>
                        <Text style={styles.description}>Provinsi</Text>
                        <Text style={styles.description}>Kota</Text>
                        <Text style={styles.description}>Perangkat daerah</Text>
                        <Text style={styles.description}>Sumber penerimaan</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={styles.description}>: Jawa Barat</Text>
                        <Text style={styles.description}>: Bandung</Text>
                        <Text style={styles.description}>: Dinas sumber daya dan bina marga kota bandung</Text>
                        <Text style={styles.description}>: APBD</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.tableHead]}>
                <View style={[{ width: '4%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>No</Text></View>
                <View style={[{ width: '12%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Kode Barang</Text></View>
                <View style={[{ width: '13%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Jenis Barang/Nama Barang</Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Merk</Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>No. Seri Pabrik</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Mutasi</Text></View>
                <View style={[{ width: '6%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Asal Usul</Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Tahun Perolehan</Text></View>
                <View style={[{ width: '6%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Jumlah Barang</Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Nilai (Rp)</Text></View>
                <View style={{ width: '15%', display: "flex", flexDirection: 'column', alignItems: 'center', borderRight: '1 solid #000000' }}>
                    <Text style={{ padding: 3, textAlign: 'center' }}>Kondisi Barang</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[{ width: "33%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Baik(B)</Text></View>
                        <View style={[{ width: "34%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Kurang Baik(KB)</Text></View>
                        <View style={[{ width: "33%", borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Rusak Berat(RB)</Text></View>
                    </View>
                </View>
                <View style={[{ width: "10%" }, styles.tableCell]}><Text>Keterangan</Text></View>
            </View >
            {dataBIB.map((data, index) =>
                <View style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: 8,
                    borderRight: '1 solid #000000',
                    borderLeft: '1 solid #000000',
                    borderBottom: '1 solid #000000'
                }}>
                    <View style={[{ width: '4%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.id}</Text></View>
                    <View style={[{ width: '12%', borderRight: '1 solid #000000' }, styles.tableCell]}>{data.kode_barang === "" || data.kode_barang === null ? null : <Text>{data.kode_barang}</Text>}</View>
                    <View style={[{ width: '13%', borderRight: '1 solid #000000' }, styles.tableCell]}>{data.nama_barang === "" || data.nama_barang === null ? null : <Text>{data.nama_barang}</Text>}</View>
                    <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}>{data.tipe_barang === "" || data.tipe_barang === null ? null : <Text>{data.tipe_barang}</Text>}</View>
                    <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}>{data.nomor_seri_pabrik === "" || data.nomor_seri_pabrik === null ? null : <Text>{data.nomor_seri_pabrik}</Text>}</View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}>{data.ukuran_barang === "" || data.ukuran_barang === null ? null : <Text>{data.ukuran_barang}</Text>}</View>
                    <View style={[{ width: '6%', borderRight: '1 solid #000000' }, styles.tableCell]}>{data.asal_usul === "" || data.asal_usul === null ? null : <Text>{data.asal_usul}</Text>}</View>
                    <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}>{data.tahun_perolehan === null ? null : <Text>{data.tahun_perolehan}</Text>}</View>
                    <View style={[{ width: '6%', borderRight: '1 solid #000000' }, styles.tableCell]}>{data.jumlah_barang === "" || data.jumlah_barang === null ? null : <Text>{data.jumlah_barang}</Text>}</View>
                    <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}>{data.harga_barang === null ? null : <Text>Rp{toCurrency.format(data.harga_barang)}</Text>}</View>
                    <View style={{ width: '15%', display: "flex", flexDirection: 'column', alignItems: 'center'}}>
                        <View style={{ display: 'flex', flexDirection: 'row'}}>
                            <View style={[{ width: "33%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.keadaan_barang === "Baik" ? data.jumlah_barang : "-"}</Text></View>
                            <View style={[{ width: "34%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.keadaan_barang === "Kurang Baik" ? data.jumlah_barang : "-"}</Text></View>
                            <View style={[{ width: "33%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{data.keadaan_barang === "Rusak Berat" ? data.jumlah_barang : "-"}</Text></View>
                        </View>
                    </View>
                    <View style={[{ width: "10%" }, styles.tableCell]}>{data.keterangan_barang === "" || data.keterangan_barang === null ? null : <Text>{data.keterangan_barang}</Text>}</View>
                </View>
            )}
            <AuthoritySignatureVerTwo />
        </React.Fragment >
    )
};

const BeritaAcaraMutasi = ({ data }) => {
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '2 solid #000000', paddingBottom: 6 }}>
                <Image src={process.env.PUBLIC_URL + "/Lambang_Kota_Bandung_2.PNG"} style={{ width: 59, height: 51 }} />
                <View style={{
                    display: 'flex', flexDirection: 'column',
                    width: '100%',
                    textTransform: 'uppercase',
                }}>
                    <Text style={{ fontSize: 10, textAlign: 'center' }}>Pemerintah kota bandung</Text>
                    <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}><b>Dinas Sumber Daya Air dan Bina Marga</b></Text>
                    <Text style={{ fontSize: 10, textAlign: 'center' }}>Jalan Cianjur no. 34 Bandung</Text>
                </View>
            </View>
            <View style={{ paddingLeft: 59, paddingTop: 6, marginBottom: 24 }}>
                <Text style={{ fontSize: 10, textAlign: 'center' }}>Berita Acara mutasi Barang</Text>
                <Text style={{ fontSize: 10, textAlign: 'center' }}>Per............................2022 </Text>
            </View>
            <View style={{ fontSize: 8, marginBottom: 12 }}>
                <Text style={{ marginBottom: 12 }}>Yang bertanda tangan di bawah ini:</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ marginRight: 6 }}>
                        <Text>Nama</Text>
                        <Text>NIP</Text>
                        <Text>Jabatan</Text>
                    </View>
                    <View>
                        <Text>: Taryono</Text>
                        <Text>: 196311062007011000</Text>
                        <Text>: Pengelola Keuangan</Text>
                    </View>
                </View>
                <Text>Selaku PIHAK KESATU</Text>
            </View>
            <View style={{ fontSize: 8, marginBottom: 12 }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ marginRight: 6 }}>
                        <Text>Nama</Text>
                        <Text>NIP</Text>
                        <Text>Jabatan</Text>
                    </View>
                    <View>
                        <Text>: Adi Ajeng Krissou</Text>
                        <Text>: 19830625200512000</Text>
                        <Text>: Penyimpan Barang</Text>
                    </View>
                </View>
                <Text>Selaku PIHAK KEDUA</Text>
            </View>
            <View style={{ fontSize: 8, marginBottom: 12 }}>
                <Text>Dengan ini PIHAK KESATU menyerahkan aset milik Dinas Pekerjaan Umum Kota Bandung berupa mesin dan peralatan kepada PIHAK KEDUA, dengan spesifikasi sebagai berikut:</Text>
            </View>
            <View style={[styles.tableHead]}>
                <View style={{ width: '25%', display: "flex", flexDirection: 'column', alignItems: 'center', borderRight: '1 solid #000000' }}>
                    <Text style={{ padding: 3, textAlign: 'center' }}>Nomor</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[{ width: "16%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>No</Text></View>
                        <View style={[{ width: "42%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Kode Barang</Text></View>
                        <View style={[{ width: "42%", borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Register</Text></View>
                    </View>
                </View>
                <View style={{ width: '30%', display: "flex", flexDirection: 'column', alignItems: 'center', borderRight: '1 solid #000000' }}>
                    <Text style={{ padding: 3, textAlign: 'center' }}>Spesifikasi Barang</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[{ width: "25%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Jenis Barang/<br />Nama Barang</Text></View>
                        <View style={[{ width: "25%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Merk</Text></View>
                        <View style={[{ width: "25%", borderRight: '1 solid #000000', borderTop: '1 solid #000000' }, styles.tableCell]}><Text>No. Seri Pabrik</Text></View>
                        <View style={[{ width: "25%", borderTop: '1 solid #000000' }, styles.tableCell]}><Text>Bahan</Text></View>
                    </View>
                </View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Asal Usul</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Tahun Perolehan</Text></View>
                <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Satuan</Text></View>
                <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Kondisi<br />(B,KB,RB)</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Jumlah Barang</Text></View>
                <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>Harga(Rp)</Text></View>
                <View style={[{ width: "10%" }, styles.tableCell]}><Text>Keterangan</Text></View>
            </View >
            {array.map((data, index) =>
                <View style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: 8,
                    borderRight: '1 solid #000000',
                    borderLeft: '1 solid #000000',
                    borderBottom: '1 solid #000000'
                }}>
                    <View style={{ width: '25%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={[{ width: "16%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>9</Text></View>
                            <View style={[{ width: "42%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>10</Text></View>
                            <View style={[{ width: "42%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>13</Text></View>
                        </View>
                    </View>
                    <View style={{ width: '30%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={[{ width: "25%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>9</Text></View>
                            <View style={[{ width: "25%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>10</Text></View>
                            <View style={[{ width: "25%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>11</Text></View>
                            <View style={[{ width: "25%", borderRight: '1 solid #000000' }, styles.tableCell]}><Text>13</Text></View>
                        </View>
                    </View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>{index + 1}</Text></View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>2</Text></View>
                    <View style={[{ width: '5%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>3</Text></View>
                    <View style={[{ width: '7%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>4</Text></View>
                    <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>5</Text></View>
                    <View style={[{ width: '8%', borderRight: '1 solid #000000' }, styles.tableCell]}><Text>6</Text></View>
                    <View style={[{ width: "10%" }, styles.tableCell]}><Text>15</Text></View>
                </View>
            )}
            <View style={{ fontSize: 8, marginVertical: 12 }}>
                <Text>Demikianlah Berita Acara Serah Terima Barang ini dibuat oleh kedua belah pihak, adapun barang tersebut ada dalam keadaan baik sejak penandatanganan berita acara ini, maka barang tersebut menjadi tanggung jawab PIHAK KEDUA, PIHAK KEDUA memelihara/merawat dengan baik serta dipergunakan untuk keperluan dinas.</Text>
            </View>
            <AuthoritySignatureVerTwo />
        </View >
    )
};

const Label = ({ tahun_perolehan, nama_barang, kode_barang }) => {
    return (
        <View wrap={false} style={{ display: 'flex', flexDirection: 'column', border: '1 solid #000000', padding: 6, width: '45%', marginBottom: 12 }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 7.5, }}>
                <Image src={process.env.PUBLIC_URL + "/Lambang_Kota_Bandung_2.PNG"} style={{ width: 39.33, height: 34 }} />
                <View style={{ display: 'flex', flexDirection: 'column', textOverflow: 'ellipsis', marginLeft: 12 }}>
                    <Text style={{ fontSize: 12, textTransform: 'uppercase' }}>{`Inventarisasi\nBarang Milik Daerah`}</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 7.5 }}>
                <Text style={{ fontSize: 12, textTransform: 'uppercase' }}> Pemerintah Kota Bandung</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', fontSize: 8 }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ width: '30%' }}><Text>OPD</Text></View>
                    <View style={{ width: '70%' }}><Text>: Dinas Sumber Daya Air dan Bina Marga</Text></View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ width: '30%' }}><Text>Tahun Perolehan</Text></View>
                    <View style={{ width: '70%' }}><Text>: 2022</Text></View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ width: '30%' }}><Text>Nama &#38; Kode Barang</Text></View>
                    <View style={{ width: '70%', display: 'flex', flexDirection: 'column' }}>
                        <Text>: Meja Rapat</Text>
                        <Text>  02.06.04.02.014</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const LabelPDF = ({ data }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>

        </View>
    )
};

const PDF = () => {
    let { state } = useLocation();
    if (state.type === null) { return <h1>LOADING</h1> }
    const type = state.type;
    const data = state.data;
    console.log(data)
    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex' }}>
            <PDFViewer style={{ p: 0, m: 0, border: 0 }} showToolbar={true} width="100%" height="100%">
                <Document>
                    <Page size="A4" orientation={type === "label" ? "potrait" : "landscape"} style=
                        {{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingVertical: 30,
                            paddingHorizontal: 18
                        }}>
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            {type === "kir" ? <KIR /> : type === "kib" ?
                                <KIB data={data} /> : type === "mutasi" ?
                                    <Mutasi /> : type === "bib" ?
                                        <BukuInventarisBarang data={data} /> : type === "bam" ?
                                            <BeritaAcaraMutasi /> : <LabelPDF />
                            }
                        </View>
                    </Page>
                </Document >
            </PDFViewer>
        </Box>
    )
}

export default PDF;