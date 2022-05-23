const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8081;

var corsOption = {
  origin: "http://localhost:8080"
}
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//database
const db = require("./models");
const Role = db.role;
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database');
  initial();
});

// const Sequelize = require('sequelize');
// //use your own database passing parameter ('database', 'username', 'password')
// const sequelize = new Sequelize('sistem-inventarisasi', 'postgres', '-', {
//     host: 'localhost',
//     dialect: 'postgres'
// });
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
app.get("/", (req, res) => {
  res.json({ message: "Sistem Informasi Inventarisasi Dinas Sumber Daya Air dan Bina Marga Kota Bandung." });
});
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "pengurus_barang"
  });
 
  Role.create({
    id: 2,
    name: "pengguna_barang"
  });
}