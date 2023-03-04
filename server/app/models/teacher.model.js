import { DataTypes } from "sequelize";

export default (sequelize) => {
    return sequelize.define("Teacher", {
        login: {
            type: DataTypes.STRING(65)
        },
        password: {
            type: DataTypes.STRING(65)
        },
        firstname: {
            type: DataTypes.STRING(65)
        },
        lastname: {
            type: DataTypes.STRING(65)
        }
    })
}