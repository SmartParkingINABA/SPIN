import { Users, pengendaraProfile, kendaraan, kendaraanMasuk, kendaraanKeluar } from "../../models/Index.js";
import { Op, literal } from "sequelize";

const pengendaraRepo = {
    findAll({ search }) {
        return Users.findAll({
            where: {
                role_id: 3,
                ...(search && {
                    [Op.or]: [
                        { email: { [Op.like]: `%${search}%` } },
                        { '$pengendaraProfile.nama_pengendara$': { [Op.like]: `%${search}%` } },
                        { '$pengendaraProfile.no_telp$': { [Op.like]: `%${search}%` } }
                    ]
                })
            },
            attributes: {
                include: [
                    [
                        literal(`(
                            SELECT COUNT(*) FROM kendaraan k
                            JOIN pengendara_profile pp
                            ON pp.id_pengendara = k.pengendara_id
                            WHERE pp.user_id = Users.id_users
                            )`),
                            'jumlah_kendaraan'
                    ]
                ]
            },
            include: [
                {
                    model: pengendaraProfile,
                    as: 'pengendaraProfile',
                    attributes: ['nama_pengendara', 'no_telp']
                }
            ],
            order: [['tanggal_daftar', 'DESC']]
        });
    },

    findUserById(userId) {
        return Users.findOne({
            where: { id_users: userId, role_id: 3},
            include: [
                { 
                    model: pengendaraProfile, 
                    as: 'pengendaraProfile', 
                    attributes: ['id_pengendara', 'nama_pengendara', 'no_telp', 'alamat'],
                    include: [
                        {
                            model: kendaraan,
                            as: 'kendaraans',
                            attributes: ['id_kendaraan', 'no_plat', 'merk', 'jenis']
                        }
                    ]
                }
            ]
        });
    },

    async findRiwayatParkir(userId) {
        const masuk = await kendaraanMasuk.findAll({
            include: [
                { 
                    model: kendaraan, 
                    as: 'kendaraan', 
                    attributes: ['no_plat', 'id_kendaraan'],
                    include: [
                        {
                            model: pengendaraProfile,
                            as: 'pemilik',
                            where: { user_id: userId },
                            attributes: []
                        }
                    ]
                }
            ],
            order: [['waktu_masuk', 'DESC']],
            limit: 10
        });

        const keluar = await kendaraanKeluar.findAll({
            include: [
                {
                    model: kendaraan,
                    as: 'kendaraanKeluars',
                    attributes: ['no_plat', 'id_kendaraan'],
                    include: [
                        {
                            model: pengendaraProfile,
                            as: 'pemilik',
                            where: { user_id: userId },
                            attributes: []
                        }
                    ]
                }
            ],
            order: [['waktu_keluar', 'DESC']],
            limit: 10
        });
        return { masuk, keluar }
    },

    updateStatus(userId, status) {
        return Users.update(
            { status },
            {
                where: {id_users: userId, role_id: 3}
            }
        );
    }
};

export default pengendaraRepo;


