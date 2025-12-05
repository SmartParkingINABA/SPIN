import redis from "../configs/RedisConfig.js";

const statusPetugas = async (req, res, next) => {
    try {
        const user = req.user;

        if (!user || user.role.nama_role.toLowerCase() !== 'petugas') {
            return res.status(403).json(
                {
                    message: 'Akses Di Tolak!, Hanya Petugas Yang Di Izinkan'
                }
            );
        }
        const key = `petugas:presence:${user.id_users}`;
        const status = await redis.get(key);

        if(!status) {
            return res.status(401).json(
                {
                    message: 'Petugas Tidak Aktif'
                }
            );
        }
        req.status = JSON.parse(status);
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json(
            {
                message: 'Internal Server Error!'
            }
        );
    }
};

export default statusPetugas;