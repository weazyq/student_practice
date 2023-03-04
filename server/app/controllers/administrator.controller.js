import db from "../models/index.js"
import BaseController from "./index.controller.js"

const Administrator = db.administrators;

class AdministratorController extends BaseController {
    constructor(model) {
        super(model);
    }

    // уникальная логика для обработки запросов, специфичная для модели пользователя
}

export default AdministratorController