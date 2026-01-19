import { Users } from "../../models/Index.js";

const userRepo = {
    async findUserIdByTarget(target) {
        const where = {};

        if (target === 'Petugas') where.role_id = 2;
        if ( target === 'Pengendara') where.role_id = 3;

        const user = await Users.findAll({
            where,
            attributes: ['id_users']
        });

        return user.map(u => u.id_users);
    },

    async countActiveUsers() {
        return Users.count({
            where: {
                status: 'Aktif'
            }
        })
    }
};

export default userRepo;

