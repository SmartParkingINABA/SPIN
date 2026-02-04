import { Users, petugasProfile } from "../../models/Index.js";

const menuPetugasParkirRepo = {
    totalPetugas() {
        return Users.count(
            {
                where: {role_id: 2}
            }
        );
    },

    totalPetugasAktif() {
        return Users.count(
            {
                where: {role_id: 2, status: 'aktif'}
            }
        );
    },

    findAllPetugas() {
        return Users.findAll(
            {
                where: {role_id: 2},
                include: [
                    {
                        model: petugasProfile, as: 'petugasProfile',
                        attributes: [
                            'id_petugas',
                            'nama_petugas',
                            'no_telp',
                            'shift',
                            'lokasi_kerja'
                        ]
                    }
                ]
            }
        );
    },

    findUserById(id) {
        return Users.findOne(
            {
                where: {id_users: id}
            }
        );
    },

    findPetugasProfileByUserId(id) {
        return petugasProfile.findOne(
            {
                where: {user_id: id}
            }
        );
    },

    createUser(data) {
        return Users.create(data);
    },

    createPetugasProfile(data) {
        return petugasProfile.create(data);
    },

    deletePetugasProfileById(id) {
        return petugasProfile.destroy(
            {
                where: {user_id: id}
            }
        );
    },

    deleteUserById(id) {
        return Users.destroy(
            {
                where: {id_users: id}
            }
        );
    }

};

export default menuPetugasParkirRepo;