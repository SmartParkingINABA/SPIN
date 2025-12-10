const roleModel = (sequelize, DataTypes) => {
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