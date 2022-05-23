module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "mereka123",
    DB: "proyek_inventaris",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};