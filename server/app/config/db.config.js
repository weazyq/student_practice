export default {
    // MySql конфигурация
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "student_practice",
    dialect: "mysql",

    // Sequelize pool конфигурация
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}