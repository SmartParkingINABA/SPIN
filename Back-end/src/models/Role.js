import { DataTypes } from "sequelize";
import sequelize from "../configs/DBConfig.js";

const roleModel = () => {
    const Role = sequelize.define('Role', {
        id_role: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_role: {
            type: DataTypes.ENUM('Admin', 'Petugas', 'Pengendara'),
            allowNull: false
        },
    },

    {
        tableName: 'role',
        timestamps: false
    });
    return Role;
};

export default roleModel;