const kendaraanMasukModel = (sequelize, DataTypes) => {
    const kendaraanMasuk = sequelize.define('kendaraanMasuk', {
        id_kendaraan_masuk: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        kendaraan_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        petugas_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        waktu_masuk : {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }, 
        status_parkir: {
            type: DataTypes.ENUM('Sedang Parkir', 'Selesai'),
            defaultValue: 'Sedang Parkir'
        }
    },{
        tableName: 'kendaraan_masuk',
        timestamps: false,
        underscored: true
    });
    return kendaraanMasuk;
};

export default kendaraanMasukModel;