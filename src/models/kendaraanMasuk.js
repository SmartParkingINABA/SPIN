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
        }
    },{
        tableName: 'kendaraan_masuk',
        timestamps: false
    });
    return kendaraanMasuk;
};

export default kendaraanMasukModel;