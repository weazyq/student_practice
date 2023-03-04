import {DataTypes, INTEGER} from 'sequelize';

export default (sequelize) => {
    return sequelize.define("Practice", {
        name: {
            type: DataTypes.STRING
        },
        dateStart: {
            type: DataTypes.DATE
        },
        dateEnd: {
            type: DataTypes.DATE
        },
        groupID: {
            type: INTEGER
        }
    })
}