const notificationModel = (sequelize, DataTypes) => {
    const Notification = sequelize.define('Notification', {
        id_notifikasi : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        kendaraan_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        judul : {
            type: DataTypes.STRING(100),
        },
        pesan : {
            type: DataTypes.TEXT
        },
        jenis : {
            type: DataTypes.ENUM('Masuk', 'Keluar', 'Info'),
        },
        status_baca : {
            type: DataTypes.ENUM('Dibaca', 'Belum'),
            defaultValue: 'Belum'
        },
        waktu_dibuat : {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'notifikasi',
        timestamps: false
    });
    return Notification;
};

export default notificationModel;