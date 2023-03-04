import dbConfig from '../config/db.config.js'
import {DataTypes, Sequelize} from "sequelize";

import defineStudentModel from "./student.model.js";
import defineAdministratorModel from "./administrator.model.js";
import defineGroupModel from "./group.model.js";
import defineMarkModel from "./mark.model.js";
import definePracticeModel from "./practice.model.js";
import defineTeacherModel from "./teacher.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = defineStudentModel(sequelize)
db.administrators = defineAdministratorModel(sequelize)
db.groups = defineGroupModel(sequelize)
db.marks = defineMarkModel(sequelize)
db.practicies = definePracticeModel(sequelize)
db.teachers = defineTeacherModel(sequelize)

export default db;
