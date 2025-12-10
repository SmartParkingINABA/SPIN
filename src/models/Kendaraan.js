const kendaraanModel = (sequelize, DataTypes) => {
    const Kendaraan = sequelize.define('Kendaraan', {
        id_kendaraan : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pengendara_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        no_plat : {
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false
        },
        merk : {
            type: DataTypes.STRING(50)
        },
        jenis : {
            type: DataTypes.STRING(30)
        },
        warna : {
            type: DataTypes.STRING(30)
        },
        cc : {
            type: DataTypes.INTEGER
        },
        tahun_keluaran : {
            type: DataTypes.INTEGER
        },
        masa_berlaku: {
            type: DataTypes.DATE
        },
        qr_code : {
            type: DataTypes.TEXT
        },
        status : {
            type: DataTypes.ENUM('Aktif', 'Non-aktif'),
            defaultValue: 'Aktif'
        }
    },
    {
        tableName: 'kendaraan',
        timestamps: false
    });
    return Kendaraan;

};

export default kendaraanModel;