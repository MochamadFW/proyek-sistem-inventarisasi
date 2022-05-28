import express from 'express'
// import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

import userRouter from './routes/User.js'
import barangRouter from './routes/Barang.js'
import ruanganRouter from './routes/Ruangan.js'
import permintaanRouter from './routes/Permintaan_Perbaikan.js'
import jadwalkegiatanRouter from './routes/JadwalKegiatan.js'

const app = express()

app.use(cors())
// Non aktifkan dulu keycloak agar tidak ada validasi token
// app.use(keycloak.middleware())
// app.use(keycloak.protect())
app.use(bodyParser.json())
// app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.json({ message: "Sistem Informasi Inventarisasi Dinas Sumber Daya Air dan Bina Marga Kota Bandung." })
})
app.use('/user', userRouter)
app.use('/barang', barangRouter)
app.use('/ruangan', ruanganRouter)
app.use('/permintaan', permintaanRouter)
app.use('/jadwalkegiatan', jadwalkegiatanRouter)

// error handling
app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const cause = error.cause || 'Internal Server Error'
  res.status(status).json({
    message: message,
    error: status,
    cause: cause
  })
})

export default app
