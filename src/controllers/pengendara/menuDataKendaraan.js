import menuDataKendaraanService from "../../services/pengendara/menuDataKendaraan.js";

class menuDataKendaraanController {
    async list(req, res, next) {
        try {
            const userId = req.user.id_users;
            const data = await menuDataKendaraanService.getMyKendaraan(userId);
            res.json(data)
        } catch (err) {
            next(err)
        }
    }

    async create(req, res, next) {
        try {
            const userId = req.user.id_users;
            const data = await menuDataKendaraanService.createKendaraan(userId, req.body);
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    }

    async update(req, res, next) {
        try {
            const userId = req.user.id_users;
            await menuDataKendaraanService.updateKendaraan(userId, req.params.id, req.body);
            res.json({ message: 'Kendaraan Berhasil Diperbarui' });
        } catch (error) {
            next(err);
        }
    }

    async remove(req, res, next) {
        try {
            const userId = req.user.id_users;
            await menuDataKendaraanService.deleteKendaraan(userId, req.params.id);
            res.json({ message: 'Kendaraan Berhasil Dihapus' });
        } catch (err) {
            next(err)
        }
    }
}

export default new menuDataKendaraanController();