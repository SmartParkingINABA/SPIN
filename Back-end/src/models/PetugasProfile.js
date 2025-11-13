import { DataTypes } from 'sequelize'
import sequelize from '../configs/DBConfig.js'

const petugasProfileModel = () => {
    const petugasProfile = sequelize.define('petugasProfile', {
        id_petugas : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nama_petugas : {
            type: DataTypes.STRING(100)
        },
        no_telp : {
            type: DataTypes.STRING(20)
        },
        shift : {
            type: DataTypes.ENUM('Pagi', 'Siang', 'Malam')
        },
        lokasi_kerja : {
            type: DataTypes.STRING(100)
        }
    }, 
    {
        tableName: 'petugas_profile',
        timestamps: false
    });
    return petugasProfile;
};

export default petugasProfileModel;

