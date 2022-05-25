const express = require("express");
const cors = require("cors");
const app = express();
const port = 8081;

const Sequelize = require('sequelize');
//use your own database passing parameter ('database', 'username', 'password')
const sequelize = new Sequelize('sistem-inventarisasi', 'postgres', '-', {
    host: 'localhost',
    dialect: 'postgres'
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

app.get("/", (req, res) => {
    res.json({ message: "Sistem Informasi Inventarisasi Dinas Sumber Daya Air dan Bina Marga Kota Bandung." });
});