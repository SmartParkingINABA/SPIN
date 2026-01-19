import { DataTypes } from 'sequelize'
import sequelize from '../configs/DBConfig.js'

import roleModel from './Role.js'
import userModel from './User.js'
import adminProfileModel from './AdminProfile.js'
import petugasProfileModel from './PetugasProfile.js'
import pengendaraProfileModel from './PengendaraProfile.js'
import kendaraanModel from './Kendaraan.js'
import kendaraanMasukModel from './kendaraanMasuk.js'
import kendaraanKeluarModel from './kendaraanKeluar.js'
import notificationModel from './Notification.js'
import notifikasiAdminModel from './notifikasiAdmin.js'
import notifikasiUserModel from './notifikasiUser.js'

const Role = roleModel(sequelize, DataTypes);
const Users = userModel(sequelize, DataTypes);
const adminProfile = adminProfileModel(sequelize, DataTypes);
const petugasProfile = petugasProfileModel(sequelize, DataTypes);
const pengendaraProfile = pengendaraProfileModel(sequelize, DataTypes);
const kendaraan = kendaraanModel(sequelize, DataTypes);
const kendaraanMasuk = kendaraanMasukModel(sequelize, DataTypes);
const kendaraanKeluar = kendaraanKeluarModel(sequelize, DataTypes);
const notification = notificationModel(sequelize, DataTypes);
const notificationAdmin = notifikasiAdminModel(sequelize, DataTypes);
const notificationUser = notifikasiUserModel(sequelize, DataTypes);


Role.hasMany(Users, { foreignKey: 'role_id', as: 'users' });
Users.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });

Users.hasOne(adminProfile, { foreignKey: 'user_id', as: 'adminProfile' });
adminProfile.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });

Users.hasOne(petugasProfile, { foreignKey: 'user_id', as: 'petugasProfile' });
petugasProfile.belongsTo(Users, { foreignKey: 'user_id', as: 'user'} );

Users.hasOne(pengendaraProfile, { foreignKey: 'user_id', as: 'pengendaraProfile' });
pengendaraProfile.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });

pengendaraProfile.hasMany(kendaraan, { foreignKey: 'pengendara_id', as: 'kendaraans' });
kendaraan.belongsTo(pengendaraProfile, { foreignKey: 'pengendara_id', as: 'pemilik' });

petugasProfile.hasMany(kendaraanMasuk, { foreignKey: 'petugas_id', as: 'kendaraanMasuk'});
kendaraanMasuk.belongsTo(petugasProfile, { foreignKey: 'petugas_id', as: 'petugas'});

petugasProfile.hasMany(kendaraanKeluar, { foreignKey: 'petugas_id', as: 'kendaraanKeluar'});
kendaraanKeluar.belongsTo(petugasProfile, { foreignKey: 'petugas_id', as: 'petugas'});

kendaraan.hasMany(kendaraanMasuk, { foreignKey: 'kendaraan_id', as: 'riwayatMasuk'});
kendaraanMasuk.belongsTo(kendaraan, { foreignKey: 'kendaraan_id', as: 'kendaraan'});

kendaraanMasuk.hasOne(kendaraanKeluar, { foreignKey: 'kendaraan_masuk_id', as: 'kendaraanKeluar'});
kendaraanKeluar.belongsTo(kendaraanMasuk, { foreignKey: 'kendaraan_masuk_id', as: 'kendaraanMasuk'});

kendaraan.hasMany(kendaraanKeluar, { foreignKey: 'kendaraan_id', as: 'riwayatKeluar'});
kendaraanKeluar.belongsTo(kendaraan, { foreignKey: 'kendaraan_id', as: 'kendaraanKeluar'});

kendaraan.hasMany(notification, { foreignKey: 'kendaraan_id', as: 'notifikasi'});
notification.belongsTo(kendaraan, { foreignKey: 'kendaraan_id', as: 'kendaraan'});

Users.hasMany(notificationAdmin, { foreignKey: 'admin_id', as: 'notifikasiDibuat' });
notificationAdmin.belongsTo(Users, { foreignKey: 'admin_id', as: 'admin' });

notificationAdmin.hasMany(notificationUser, { foreignKey: 'notifikasi_admin_id', as: 'penerima' });
notificationUser.belongsTo(notificationAdmin, { foreignKey: 'notifikasi_admin_id', as: 'notifikasi' });

Users.hasMany(notificationUser, { foreignKey: 'user_id', as: 'notifikasiUser' });
notificationUser.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });

export {
    Role,
    Users,
    adminProfile,
    petugasProfile,
    pengendaraProfile,
    kendaraan,
    kendaraanMasuk,
    kendaraanKeluar,
    notification,
    notificationAdmin,
    notificationUser
};

