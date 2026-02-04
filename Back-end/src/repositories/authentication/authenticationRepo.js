import { Users, Role, adminProfile, petugasProfile, pengendaraProfile } from "../../models/Index.js";

const authRepo = {
    findUserWithByRoleId(id) {
        return Users.findByPk(id, {
            include: [
                { model: Role, as: 'role', attributes: ['nama_role'] },
                { model: adminProfile, as: 'adminProfile', attributes: ['nama_admin', 'no_telp'], required: false },
                { model: petugasProfile, as: 'petugasProfile', attributes: ['id_petugas', 'nama_petugas', 'shift'], required: false },
                { model: pengendaraProfile, as: 'pengendaraProfile', attributes: ['id_pengendara', 'nama_pengendara', 'alamat'], required: false }
            ]
        });
    }
};

export default authRepo;