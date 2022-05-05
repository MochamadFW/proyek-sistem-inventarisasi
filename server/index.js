const express = require("express");
const cors = require("cors");
const app = express();
//middleware
app.use(cors());
app.use(express.json());

app.listen(8081, () => {
    console.log(`Server is running on port 8081.`);
});

app.get("/", (req, res) => {
    res.json({ message: "Sistem Informasi Inventarisasi Dinas Sumber Daya Air dan Bina Marga Kota Bandung." });
});

