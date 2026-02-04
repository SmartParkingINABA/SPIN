import pengendaraService from "../../services/admin/menuPengendara.js";

const menuPengendaraController = {
    async getList(req, res) {
        try {
            const data = await pengendaraService.getListPengendara(req.query);
            res.json(data);
        } catch (err) {
            console.error('Gagal Mengambil Data Pengendara: ', err);
            res.status(500).json(
                {
                    message: 'Internal Server Error!'
                }
            )
        }
    },

    async getDetail(req, res) {
        try {
            const data = await pengendaraService.getDetailPengendara(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(404).json(
                {
                    message: err.message
                }
            );
        }
    },

    async updateStatus(req, res) {
        try {
            const result = await pengendaraService.updateStatus(
                req.params.id,
                req.body.status
            );
            res.json(result);
        } catch (err) {
            res.status(400).json(
                {
                    message: err.message
                }
            );
        }
    }
};

export default menuPengendaraController;