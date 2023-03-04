import db from "../models/index.js"
import BaseController from "./index.controller.js"

const Student = db.students;

class StudentController extends BaseController {
    constructor(model) {
        super(model);
    }

    // уникальная логика для обработки запросов, специфичная для модели пользователя
}

export default StudentController