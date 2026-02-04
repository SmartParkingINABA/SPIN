import menuDataKendaraanService from "../../services/pengendara/menuDataKendaraan.js";

class menuDataKendaraanController {
    async list(req, res, next) {
        try {
            const userId = req.user.id_users;
            const data = await menuDataKendaraanService.getMyKendaraan(userId);
            res.json(data)
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async create(req, res, next) {
        try {
            const userId = req.user.id_users;
            await menuDataKendaraanService.createKendaraan(userId, req.body);
            res.status(201).json({ message: 'Data Kendaraan Berhasil Ditambahkan' })
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async update(req, res, next) {
        try {
            const userId = req.user.id_users;
            await menuDataKendaraanService.updateKendaraan(userId, req.params.id, req.body);
            res.status(200).json({ message: 'Kendaraan Berhasil Diperbarui' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async remove(req, res, next) {
        try {
            const userId = req.user.id_users;
            await menuDataKendaraanService.deleteKendaraan(userId, req.params.id);
            res.status(200).json({ message: 'Kendaraan Berhasil Dihapus' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new menuDataKendaraanController();