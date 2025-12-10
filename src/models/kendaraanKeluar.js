const kendaraanKeluarModel = (sequelize, DataTypes) => {
    const kendaraanKeluar = sequelize.define('kendaraanKeluar', {
        id_kendaraan_keluar : {
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
        waktu_keluar: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'kendaraan_keluar',
        timestamps: false
    });
    return kendaraanKeluar;
};

export default kendaraanKeluarModel;