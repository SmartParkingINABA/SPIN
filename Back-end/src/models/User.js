const userModel = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id_users: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password_users: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        role_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status : {
            type: DataTypes.ENUM('Aktif', 'Non-aktif'),
            defaultValue: 'Aktif'
        },
        tanggal_daftar : {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,

        }
    },

    {
        tableName: 'users',
        timestamps: false
    });
    return Users;
};

export default userModel;