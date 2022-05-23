exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
exports.penggunaBoard = (req, res) => {
    res.status(200).send("Pengguna Barang Content.");
};
exports.pengurusBoard = (req, res) => {
    res.status(200).send("Pengurus Barang Content.");
};