import db from "../models/index.js"
import BaseController from "./index.controller.js"

const Mark = db.marks;

class MarkController extends BaseController {
    constructor(model) {
        super(model);
    }

    // уникальная логика для обработки запросов, специфичная для модели пользователя
}

export default MarkController