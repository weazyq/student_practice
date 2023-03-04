class BaseController {
    constructor(model) {
        this.model = model;
    }

    async create(req, res) {
        // общая логика для создания записи в модели
    }

    async read(req, res) {
        // общая логика для чтения записи из модели
    }

    async update(req, res) {
        // общая логика для обновления записи в модели
    }

    async delete(req, res) {
        // общая логика для удаления записи из модели
    }
}

export default BaseController