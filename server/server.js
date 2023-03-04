import express from 'express';
import cors from 'cors';

const app = express();

const db = require("./app/models")
db.sequelize.sync({force: true}).then(() => {
    console.log("")
})

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Парсит запросы из content-type в application/json
app.use(express.json());

// Парсит запросы из content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// Пример роута GET
app.get("/", (req,res) => {
    res.json({message: "Welcome to student_practice app"})
})

// Пример роута POST
app.post("/", (req, res) => {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
})

// Установка порта, для ожидания запросов
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})