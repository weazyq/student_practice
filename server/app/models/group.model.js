import {DataTypes} from "sequelize";

export default (sequelize) => {
    return sequelize.define("Group", {
        id: {
            type: DataTypes.INTEGER
        },
        teacherID: {
            type: DataTypes.INTEGER
        }
    })
}