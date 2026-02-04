const notifikasiAdminModel = (sequelize, DataTypes) => {
    const notifikasiAdmin = sequelize.define('notifikasiAdmin', {
        id_notifikasi_admin: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        admin_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        judul: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        pesan: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tipe: {
            type: DataTypes.ENUM('Peringatan', 'Informasi', 'Pesan'),
            allowNull: false
        },
        target: {
            type: DataTypes.ENUM('All', 'Petugas', 'Pengendara'),
            allowNull: false
        },
        total_penerima: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        waktu_dibuat: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'notifikasi_admin',
        timestamps: false,  
        underscored: true
    });
    return notifikasiAdmin;
};

export default notifikasiAdminModel;