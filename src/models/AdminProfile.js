import { DataTypes } from "sequelize";
import sequelize from "../configs/DBConfig.js";

const adminProfileModel = () => {
    const adminProfile = sequelize.define('adminProfile', {
        id_admin : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id : {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nama_admin : {
            type: DataTypes.STRING(100)
        },
        no_telp : {
            type: DataTypes.STRING(20)
        },

    }, 
    {
        tableName: 'admin_profile',
        timestamps: false
    });
    return adminProfile;
};

export default adminProfileModel;