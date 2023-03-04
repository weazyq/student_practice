import {DataTypes} from 'sequelize';

export default (sequelize) => {
    return sequelize.define("Student", {
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
        },
        groupID: {
            type: DataTypes.INTEGER
        }
    })
}