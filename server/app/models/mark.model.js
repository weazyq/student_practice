import {DataTypes} from 'sequelize';

export default (sequelize) => {
    return sequelize.define("Mark", {
        studentID: {
            type: DataTypes.INTEGER
        },
        photo: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        }
    })
}