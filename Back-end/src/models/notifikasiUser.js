const notifikasiUserModel = (sequelize, DataTypes) => {
    const notifikasiUser = sequelize.define('notifikasiUser', {
        id_notifikasi_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        notifikasi_admin_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_baca: {
            type: DataTypes.ENUM('Belum', 'Sudah'),
            defaultValue: 'Belum'
        },
        waktu_dibaca: {
            type: DataTypes.DATE
        }

    }, {
        tableName: 'notifikasi_user',
        timestamps: false,
        underscored: true
    });
    return notifikasiUser;
};

export default notifikasiUserModel;