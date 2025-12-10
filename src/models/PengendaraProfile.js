const pengendaraProfileModel = (sequelize, DataTypes) => {
    const pengendaraProfile = sequelize.define('pengendaraProfile', {
        id_pengendara : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nama_pengendara : {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        alamat : {
            type: DataTypes.TEXT
        },
        no_telp : {
            type: DataTypes.STRING(20)
        }
    },
    {
        tableName: 'pengendara_profile',
        timestamps: false
    });
    return pengendaraProfile;
};

export default pengendaraProfileModel;